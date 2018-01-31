/**
 * Created by Jeff on 7/18/2017.
 */
var express = require('express');
var userRoutes = express.Router();
var User = require('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require ('jsonwebtoken');
var AuthenticationClient = require('auth0').AuthenticationClient;

var auth0 = new AuthenticationClient({
  domain: 'haske107.auth0.com',
  clientId: 'LYztQIY2q3OlQ34m0dY4ILLTQ2wpy1tT',
  clientSecret: 'mdsOH_tMEQ5YsnkiCH-cS6u7npvcCW8ejCg5L9HL28-moaEl3yGjSdA46hbz6WFM'
});


//GET USER BY ID
userRoutes.get( "/getUserByID/:ID", function(req, res, next) {
  User.findOne( { _id: req.params.ID }, function ( err, result ) {
    if(err) {
        return res.status(500).json({
            title: 'An error occured',
            error: err
        });
    }
    res.status(200).json({
        message: 'Returned User',
        obj: result
    });
  });
});
//GET USERS BY ID
userRoutes.get('/getUsersByID:IDs', function(req, res){});
//GET USER BY EMAIL
userRoutes.get('/getUserByEmail:Email', function(req, res){});
//GET USERS BY EMAIL
userRoutes.get('/getUsersByEmail:Emails', function(req, res){});
//GET USER BY USERNAME
userRoutes.get('/getUserByUsername:Username', function(req, res){});
//GET USERS BY USERNAME
userRoutes.get('/getUsersByUsername:Usernames', function(req, res){});
//GET USER BY LOCATION
userRoutes.get('/getUserByLocation:Location', function(req, res){});
//GET USERS BY LOCATION
userRoutes.get('/getUsersByLocation:Locations', function(req, res){});

//AUTH
  //REGISTER USER
userRoutes.get("/", function (req, res, next) {

    auth0.getProfile(req.query.token, function (err, userInfo) {
    if (err) {
      // Handle error.
         console.log(err);
    }
    const profile = userInfo;
    User.findOne({email : profile.email}, function(err, result) {

      if(!result) {
          console.log("hello");
        const user = new User({
          email: profile.email,
          firstName : profile.given_name,
          lastName: profile.family_name,
            picture: profile.picture,
          signUpDate: profile.updated_at
        });
        user.save(function(err, newUser) {
          if(err) {
            return res.status(500).json({
              title: 'Error creating new user',
              error: err
            })
          }
          if(!err) {

              return res.status(201).json({
              title: 'Created new user',
              result: newUser._id,
              profile: profile
            })
          }
        });
      }

        if(result){

          return res.status(200).json({
          title: 'Found User',
          result: result._id,
          profile: profile

        })
      }
    });
  });
});

module.exports = userRoutes;
