
/**
 * Created by Jeff Haskell on 8/13/2017.
 */
/**
 * Created by Jeff Haskell on 7/29/2017.
 */
var express = require('express');
var pdfRoutes = express.Router();
var multer  = require('multer');
var fs = require('fs');
var Agreement1 = require('../Files/Location Agreement 1/text.json');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'Files/PDF Viewer')
  },
  filename: function (req, file, cb) {
    cb(null, 'Agreement1.pdf')
  }
});
var upload = multer({storage: storage});

//SERVE PHOTOS
pdfRoutes.get('/Agreement1', function(req,res) {
  res.send(Agreement1);
});

pdfRoutes.post('/Agreement1',upload.single('pdf'), function(req,res)  {
  res.status(201).json({
    title: "File Updated"
  });
});

pdfRoutes.get('/viewPDF', function(req, res)  {
  var readStream = fs.createReadStream('Files/PDF Viewer/Agreement1.pdf');
  res.set('Content-Type', 'application/pdf');
  return readStream.pipe(res);
});

module.exports = pdfRoutes;
