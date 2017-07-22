const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientsSchema = new Schema({
  name: {
    type: String,
  },
  // createdAt: {
  //   type: Date,
  //   default: Date.now
  // }
});

const Clients = mongoose.model('Clients', ClientsSchema);

module.exports = Clients;