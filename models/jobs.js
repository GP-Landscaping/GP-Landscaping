var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ClientsSchema = new Schema({
  name: {
    type: String
  },
  // date: {
  //   type: Date
  // },
  //   address: {
  // 	type: String
  // }, 
  //  jobOpen: {
  //   type: Boolean
  // }, 
  // notes: {
  //   type: String
  // }
  
});
});

var Clients = mongoose.model("Clients", ClientsSchema);
module.exports = Clients;
