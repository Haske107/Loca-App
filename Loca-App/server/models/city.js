/**
 * Created by Jeff Haskell on 8/30/2017.
 */
var mongoose = require('mongoose');
var schema = mongoose.Schema;


var CitySchema = new schema({
  name: {type: String},
  permitOfficeEmail: {type: String},
  permitOfficePhone: {type: String},
  permitOfficeContactName: {type : String},
  applicationRequirements: [{type : String}],
  waivePermitRequirements: [{type: String}],
  insuranceAmount : {type: String},
  moratoriaDays: [{type:String}],
  hospitals: [{
    name: {type: String},
    lat: {type: Number},
    lng: {type: Number}
  }]
});

module.exports = mongoose.model('Chat', ChatSchema);
