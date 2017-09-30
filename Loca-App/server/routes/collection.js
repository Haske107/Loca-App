/**
 * Created by Jeff Haskell on 7/22/2017.
 */
var express = require('express');
var collectionRouter = express.Router();
var User = require('../models/user');
var Collection = require('../models/collection');
var Location = require('../models/location');
const jwtoken = require('jsonwebtoken');
const jwt = require('express-jwt');
today = new Date();

//GET COLLECTIONS
  //PUBLIC COLLECTIONS
collectionRouter.get('/community', function (req, res, next) {
  Collection.find(
    {
      publicity: true
    })
    .exec(function(err, Collections)  {
      if(err) {
        return res.status(500).json({
          title: 'An Error Occured',
          error: err
        });
      }
      res.status(202).json({
        message: 'success',
        obj: Collections
      });
    });
});
  //PRIVATE COLLECTIONS
collectionRouter.get('/private/:id', function (req, res, next) {
  Collection.find(
    {
      $and: [
        {
          publicity: false
        },
        {
          owner: req.params.id
        }
      ]
    })
    .exec(function(err, Collections)  {
      if(err) {
        return res.status(500).json({
          title: 'An Error Occured',
          error: err
        });
      }
      res.status(202).json({
        message: 'success',
        obj: Collections
      });
    });
});
  //CREATED COLLECTIONS
collectionRouter.get('/created/:ID', function(req, res) {
  Collection.find({owner: req.params.ID})
    .exec(function(err, Collections)  {
      if(err) {
        return res.status(500).json({
          title: 'An Error Occured',
          error: err
        });
      }
      res.status(202).json({
        message: 'success',
        obj: Collections
      });
    });
});
//GET A SET OF LOCATIONS FOR COLLECTIONS
collectionRouter.get('/locations/:ID', function(req, res, next)    {
  Collection.findById(req.params.ID, function(err, collection) {
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      });
    }
    if(!collection) {
      return res.status(500).json({
        title: 'Location not found',
        error: err
      });
    }
    Location.find({_id: {$in: collection.locations}}, function(err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occured',
          error: err
        });
      }
      if(!result) {
        return res.status(500).json({
          title: 'Location not found',
          error: err
        });
      }
       res.status(201).json({
        obj: result
      });
    });
  });
});
//CREATE COLLECTION
collectionRouter.post('/:ID', function(req,res,next)  {
  //FIND USER REQUESTING
  User.findById(req.params.ID, function (err, user) {
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      });
    }
    //STORE REQ VARIABLES INTO LOCAL LOCATION
    var collection = Collection({
      owner: req.body.owner,
      uploadDate: today.getMonth() + '/' + today.getDay() + '/' + today.getFullYear(),
      views: 0,
      name: req.body.name,
      subtitle: req.body.subtitle,
      publicity: req.body.publicity
    });
    //SAVE TO DB
    collection.save(function (err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occured',
          error: err
        });
      }
      user.createdCollections.push(result);
      user.save();
      res.status(201).json({
        message: 'Saved Collection',
        obj: result
      });
    });
  });
});
//DELETE COLLECTION
collectionRouter.delete('/remove/:ID', function(req, res, next) {
  Collection.findById(req.params.ID, function(err, collection)  {
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      });
    }
    if(!collection) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      });
    }
    collection.remove(function(err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occured',
          error: err
        });
      }
      res.status(201).json({
        message: 'Collection Removed',
        obj: result
      });
    });
  });
});
//UPDATE
  //UPDATE PUBLICITY
collectionRouter.patch('/updatePublicity/:ID', function(req,res,next) {
  var decoded = jwt.decode(req.query.token);
  Collection.findOne({_id: req.params.ID}, function(err, collection)  {
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      });
    }
    if(!collection.owner.equals(decoded.user._id))  {
      return res.status(501).json({
        title: 'Not your collection to modify',
        error: null
      });
    }
    collection.publicity = !collection.publicity;
    collection.save();
    res.status(201).json({
      message: 'Toggled Publicity',
      obj: collection
    });
  });
});
  //ADD VIEWERS
collectionRouter.patch('/addViewers/:ID', function(req,res){});
  //UPDATE COLLECTION LOCATIONS
    //ADD LOCATION
collectionRouter.patch('/addLocation/:ID', function(req, res, next) {     console.log('test');

  Collection.findById(req.params.ID, function(err, collection)  {
    console.log('test');
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      });
    }
    if(!collection) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      });
    }
    console.log('test2');
    var duplicate = false;
    collection.locations.forEach(function(location) {
      if(location._id === req.body._id) {
        duplicate = true;
      }
    });
    if(duplicate)  {
      return res.status(500).json({
        title: 'Location already added',
        error: err
      });
    }
    console.log('test after duplicate check');

    collection.locations.push(req.body._id);    console.log('test after push');

    collection.save(function(err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occured',
          error: err
        });
      }    console.log('testafter save');

      res.status(201).json({
        message: 'L2C Good',
        obj: result
      });
    });
  });
});
    //REMOVE LOCATION
collectionRouter.patch('/removeLocation/:ID', function(req, res, next) {
  Collection.update(
    {_id: req.params.ID},
    {$pull: {locations: {$in:req.body}}},
    {multi: true},
    function (err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occured',
          error: err
        });
      }
      if(!result) {
        return res.status(500).json({
          title: 'An error occured',
          error: err
        });
      }
      res.status(201).json({
        message: 'Locations Removed',
        obj: result
      });
    });
});
  //UPDATE NAME
collectionRouter.patch('/updateName/:ID', function(req,res){});
  //UPDATE SUBTITLE
collectionRouter.patch('/updateSubtitle/:ID', function(req,res){});
  //UPDATE VIEWS
collectionRouter.patch('/updateViews/:ID', function(req,res){});

module.exports = collectionRouter;
