var express = require('express');
var cityRoutes = express.Router();
var City = require('../models/city');


cityRoutes.get('/getCity/:Name', function(req, res, next)    {
    City.findOne({name: req.params.Name}, function (err, City)  {
        if(!City) {
            return res.status(405).json({
                message: 'Did not find ' + req.params.Name,
                obj: err
            });
        }
        if (City) {
            return res.status(200).json({
                message: 'Returning ' + req.params.Name,
                obj: City
            });
        }
    });
});


cityRoutes.get('/getAll', function(req, res)  {
    City.find()
        .exec(function(err, Cities)  {
            res.status(200).json({
                message: 'returning cities',
                obj: Cities
            });
        });
});

module.exports = cityRoutes;
