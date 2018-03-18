/**
 * Created by Jeff Haskell on 7/29/2017.
 */
var express = require('express');
var filesRoutes = express.Router();
const jwtoken = require('jsonwebtoken');
const jwt = require('express-jwt');
var mongoose = require('mongoose');
var gridfsstorage = require('multer-gridfs-storage');
var Grid = require('gridfs-stream');
var conn = mongoose.connection;
var gfs = new Grid(conn, mongoose.mongo);
var storage = gridfsstorage({
  url: 'mongodb://Haske107:Applegate451!@projectx-shard-00-00-y8jpz.mongodb.net:27017,projectx-shard-00-01-y8jpz' +
  '.mongodb.net:27017,projectx-shard-00-02-y8jpz.mongodb.net:27017/projectx?ssl=true&replicaSet=projectx-shard-0&authSource=admin',

  filename: function(req,file,cb) {
    cb(null, req.params.id.substring(1));

  },
  metadata: function(req,file,cb) {
    cb(null, 'main');
  },

  root: 'Images'
});
var multistorage = gridfsstorage({
  url: 'mongodb://Haske107:Applegate451!@projectx-shard-00-00-y8jpz.mongodb.net:27017,projectx-shard-00-01-y8jpz' +
  '.mongodb.net:27017,projectx-shard-00-02-y8jpz.mongodb.net:27017/projectx?ssl=true&replicaSet=projectx-shard-0&authSource=admin',

  filename: function(req,file,cb) {
    cb(null, req.params.id.substring(1));

  },
  metadata: function(req,file,cb) {
    cb(null, 'other');
  },

  root: 'Images'
});
var multer = require('multer');
var supload = multer({ storage: storage }).single('photo');
var mupload = multer({ storage: multistorage }).array('photos', 10);


//SERVE PHOTOS
filesRoutes.get('/:id', function(req,res) {
  gfs.findOne({ filename: req.params.id, root: 'Images', metadata: 'main' }, function (err, file){
    if(!err){
      if(file){
          var readstream = gfs.createReadStream({
            filename: file.filename,
            root: "Images"
          });
        res.set('Content-Type', file.contentType);
        return readstream.pipe(res);
      }
      return res.status(400).json({
        title: 'File not Found'
      });
    }
  });
});

//VERIFY USER BEFORE PROCEEDING
filesRoutes.use('/', function(req,res,next){
  jwtoken.verify(req.query.token, 'xbqRTQ3hdPmhfSX3g8QhreT9ZmYLUZsjVU8ybMEI_xvSaN9xzv9ldDZ0i3eRwuVr', function(err, decoded)  {
    if(err) {
      return res.status(401).json({
        title: 'Not Authorized',
        error: err
      });
    }
    next();
  })
});

//UPLOAD OTHER PHOTOS
filesRoutes.post('/other/:id', function (req, res, next) {
  mupload(req, res, function (err) {
    if (err) {
      console.log(err);
      return res.status(422).send("an Error occured")
    }
    res.status(201).json({
      message: 'Success!',
      obj: req.file
    });
  });
});
module.exports = filesRoutes;
