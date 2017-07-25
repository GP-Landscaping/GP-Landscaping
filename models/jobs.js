var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var JobsSchema = new Schema({
   date: {
    type: String
  },
    type: {
  	type: String
  }, 
  materials: {
    type: String
  },
  bid: {
    type: String
  },
   jobOpen: {
    type: String
  }, 
  notes: {
    type: String
  }
  

});

var Jobs = mongoose.model("Jobs", JobsSchema);
module.exports = Jobs;
