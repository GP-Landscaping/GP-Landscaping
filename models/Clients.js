


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClientsSchema = new Schema({
  name: {
    type: String,
  },
  email: {
  	type: String,
  },
  address: {
  	type: String,
  },
  city: {
  	type: String,
  },
  zip: {
    type: Number,
  },
  state: {
              type: String,
          },
  Jobs: [{
    type: Schema.Types.ObjectId,

    ref: "Jobs"
  }]
  // createdAt: {
  //   type: Date,
  //   default: Date.now
  // }
});

var Clients = mongoose.model('Clients', ClientsSchema);

module.exports = Clients;