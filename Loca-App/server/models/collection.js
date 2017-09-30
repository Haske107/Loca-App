
var mongoose = require('mongoose');
var schema = mongoose.Schema;
var User = require('./user');
var Location = require('./location');


var CollectionSchema = new schema({
  owner: {type: schema.Types.ObjectId, ref: 'User' },
  uploadDate: {type: String},
  views: {string: Number},
  locations: [{type: schema.Types.ObjectId, ref: 'Location'}],
  name: {type: String},
  subtitle: {type: String},
  publicity: {type: Boolean},
  followers: [{type: schema.Types.ObjectId, ref: 'User'}],
  userPermission: [{type: schema.Types.ObjectId, ref: 'User'}]
});




module.exports = mongoose.model('Collection', CollectionSchema);
