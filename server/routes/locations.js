/**
 * Created by Jeff Haskell on 7/12/2017.
 */
var express = require('express');
var locationRoutes = express.Router();
const jwtoken = require('jsonwebtoken');
var User =  require('../models/user');
var Location = require('../models/location');

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


//FIND SPECIFIC LOCATION
locationRoutes.get('/find', function(req, res)  {
    Location.find({_id: req.query._ID})
        .exec(function(err, Location)    {
            if(err) {
                return res.status(500).json({
                    title: "Some error searching for location",
                    error: err
                });
            }
            if(Location)    {
                return res.status(200).json({
                    title: "Success!",
                    result: Location
                });
            }
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
    var decoded = jwtoken.decode(req.query.token);
    User.findOne({email : decoded.email}, function (err, user) {
        var location = new Location(req.body);
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
