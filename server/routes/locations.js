/**
 * Created by Jeff Haskell on 7/12/2017.
 */
var express = require('express');
var locationRoutes = express.Router();
const jwtoken = require('jsonwebtoken');
const jwt = require('express-jwt');
var User =  require('../models/user');
var Location = require('../models/location');
var today = new Date();

//GET ALL LOCATIONS
locationRoutes.get('/', function(req, res, next)    {
    Location.find()
        .exec(function(err, Locations)  {
            if(err) {
                return res.status(500).json({
                    title: 'An Error Occured',
                    error: err
                });
            }
            res.status(202).json({
                message: 'success',
                obj: Locations
            });
        });
});
//SEARCH LOCATIONS WITHIN RANGE
locationRoutes.post('/search', function(req,res) {
  Location.find()
    .exec(function(err, Locations)  {
      //CHECK FOR GENERAL ERROR
      if(err) {
        return res.status(500).json({
          title: 'An Error Occured',
          error: err
        });
      }
      //CREATE RESULT ARRAY
      var resultArray = [];
      //FIND LOCATION IN RANGE OF CHAPMAN
      Locations.forEach(function(location)  {
          if(getDistanceFromLatLonInMi(location.coordinates.lat,location.coordinates.lng,
              req.body.CurrentLocation.lat, req.body.CurrentLocation.lng) < req.body.Distance) {
            resultArray.push(location);
          }
      });
      //RETURN RESULT ARRAY
      return res.status(200).json({
        message: 'success',
        obj: resultArray
      });
    });
});

//VERIFY USER BEFORE PROCEEDING////////////////////////////
/*
locationRoutes.use('/', function(req, res, next)  {
  jwtoken.verify(req.query.token, 'xbqRTQ3hdPmhfSX3g8QhreT9ZmYLUZsjVU8ybMEI_xvSaN9xzv9ldDZ0i3eRwuVr', function( err, decoded) {
    if(err) {
      return res.status(401).json({
        title: 'Not Authenticated',
        error: err
      });
    }
    next();
  });
});
*/
//////////////////////////////////////////////////////////

//ADD LOCATION
locationRoutes.post('/', function (req, res) {

    //FIND USER REQUESTING
    var decoded = jwtoken.decode(req.query.token);
    User.findOne({email : decoded.email}, function (err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }

        //STORE REQ VARIABLES INTO LOCAL LOCATION
        var location = Location({
            user: req.body.user,
            uploadDate: today.getDate() + '/' + (today.getMonth()+1) + '/' + today.getFullYear() ,
            address: req.body.address,
            name: req.body.name,
            description: req.body.description,
            rules: req.body.rules,
            deposit: req.body.deposit,
            rate: req.body.rate,
            type: req.body.type,
            mainPhoto: req.body.mainPhoto,
            otherPhotos: req.body.otherPhotos,
            shootPhotos: req.body.shootPhotos,
            bathrooms: req.body.bathrooms,
            electricity: req.body.electricity,
            parkingSpots: req.body.parkingSpots,
            coordinates: req.body.coordinates
        });

        //SAVE TO DB
        location.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occured',
                    error: err
                });
            }
            user.ownedlocations.push(result);
            user.save();
            res.status(201).json({
                message: 'Saved Location',
                obj: result
            });
        });
    });
});
//DELETE LOCATION --
locationRoutes.patch('/delete', function(req,res){
});
//UPDATES
  //UPDATE ADDRESS --
locationRoutes.patch('/updateAddress:ID', function(req,res){
});
  //UPDATE NAME --
locationRoutes.patch('/updateName:ID', function(req,res){
});
  //UPDATE DESCRIPTION --
locationRoutes.patch('/updateDescription:ID', function(req,res){
});
  //UPDATE RULES --
locationRoutes.patch('/updateRules:ID', function(req,res){
});
  //UPDATE DEPOSIT --
locationRoutes.patch('/updateDeposit:ID', function(req,res){
});
  //UPDATE RATE --
locationRoutes.patch('/updateRate:ID', function(req,res){
});
  //UPDATE TYPE --
locationRoutes.patch('/updateType:ID', function(req,res){
});
  //UPDATE ELECTRICITY
locationRoutes.patch('/updateElectricity:ID', function(req,res){
});
  //UPDATE PARKING
locationRoutes.patch('/updateParking:ID', function(req,res){
});
  //UPDATE COLLECTIONS
locationRoutes.patch('/updateCollections:ID', function(req,res){
});
  //UPDATE VIEWS
locationRoutes.patch('/updateViews:ID', function(req,res){
});

//FUNCTIONS
function getDistanceFromLatLonInMi(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
  ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var DistanceInKilometers = R * c; // Distance in km
  var DistanceInMiles = DistanceInKilometers * 1.609;
  return DistanceInMiles;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

 module.exports = locationRoutes;