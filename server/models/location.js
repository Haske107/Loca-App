
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var LocationSchema = new schema({
    collections: {type: schema.Types.ObjectId, ref: 'Collection'},
    views: {type: Number},
    uploadDate: {type: String},
    user: {type: schema.Types.ObjectId, ref: 'User'},
    address:{
      streetAddress: {type: String},
      city: {type: String},
      state: {type: String},
      zip: {type: String},
      country: {type: String}
    },
    coordinates: {
      lat: {type: Number},
      lng: {type: Number}
    },
    name:{type: String},
    description:{type: String},
    rules:{type: String},
    deposit: {type: Number},
    rate:{type: Number},
    type:{type: String},
    mainPhoto: {type: String},
    otherPhotos: {type: String},
    shootPhotos: {type: String},
    bathrooms: {type: Number},
    electricity: {type: Number},
    carParking: {type: Number},
    truckParking: {type: Number},
    deleted: {type: Boolean}
});



module.exports = mongoose.model('Location', LocationSchema);
