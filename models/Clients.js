var statesArray = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];


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
  state: {
              type: String,
          },
  // createdAt: {
  //   type: Date,
  //   default: Date.now
  // }
});

var Clients = mongoose.model('Clients', ClientsSchema);

module.exports = Clients;