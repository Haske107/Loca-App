/**
 * Created by Jeff Haskell on 8/15/2017.
 */

var mongoose = require('mongoose');
var schema = mongoose.Schema;
var User = require('./user');


var ChatSchema = new schema({
  Participants: {type: [{
     User: {type: schema.Types.ObjectId, ref: 'User' },
     Username: {type: String},
     Deleted: {type: Boolean}
   }]},
  Messages: { type: [{
    Author: {type: String},
    AuthorID: {type: schema.Types.ObjectId, ref: 'User'},
    Content: {type: String},
    Time: {type: String},
    read: {type: Boolean}
  }]}
});

module.exports = mongoose.model('Chat', ChatSchema);
