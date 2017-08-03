var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var JobsSchema = new Schema({
   date: {
    type: Date
  },
  jobEnd: {
    type: Date
  },
    type: {
  	type: String
  }, 
  
  notes: {
    type: String
  },

  employee: {
    type: Number
  },

  labor: {
    type: Number

  },
  commute: {
    type: Number

  },
  materials: {
    type: String

  },
  cost: {
    type: Number
  }
  
});

var Jobs = mongoose.model("Jobs", JobsSchema);
module.exports = Jobs;
