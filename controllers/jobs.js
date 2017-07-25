var Jobs = require("../models/Jobs");


module.exports = {
  get: function(data, cb) {
    // Find all notes with the headline id from the article we passed
    Jobs.find({
      date: data._id,
      type: data._id,
      materials: data._id,
      jobOpen: data._id,
      bid: data._id,
      notes: data._id
    }, cb);
  },
  // Save a note
  // Export this function as "save" (data = note info, cb = callback)
  save: function(data, cb) {

    // Make a newNote with the note model, saving the apropos info
    var newJobs = {
       date: data.jobDate,
      type: data.jobType,
      materials: data.jobMaterials,
      bid: data.jobBid,
      jobOpen: data.jobOpen,
      notes: data.jobNotes

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