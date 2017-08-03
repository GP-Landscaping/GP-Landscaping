var Jobs = require("../models/Jobs");


module.exports = {
  get: function(data, cb) {
    // Find all notes with the headline id from the article we passed
    Jobs.find({
      date: data._id,
      jobEnd: data.id,
      type: data._id,
      notes: data._id,
      employee: data._id,
      labor: data._id,
      commute: data._id,
      materials: data._id,
      cost: data._id

    }, cb);
  },
  // Save a note
  // Export this function as "save" (data = note info, cb = callback)
  save: function(data, cb) {

    // Make a newNote with the note model, saving the apropos info
    var newJobs = {
      date: data.jobDate,
      jobEnd: data.jobEnd,
      type: data.jobType,
      notes: data.jobNotes,
      employee: data.jobEmployee,
      labor: data.jobLabor,
      commute: data.jobCommute,
      materials: data.jobMaterials,
      cost: data.jobCost


          };

    // Save the newNote we made to mongoDB with mongoose's save function
    Jobs.create(newJobs, function(err, doc) {
      // Log any errors
      if (err) {
        console.log(err);
      }
      // Or just log the doc we saved
      else {
        console.log(doc);
        // Place the log back in this callback function
        // so it can be used with other functions asynchronously
        cb(doc);
      }
    });
  },
  delete: function(data, cb) {
    // Remove a Note using mongoose and our note Model,
    // searching by the article's id
    Jobs.remove({
      _id: data._id
    }, cb);
  }
};