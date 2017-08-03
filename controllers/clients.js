var Clients = require("../models/Clients");


module.exports = {
  get: function(data, cb) {
    // Find all notes with the headline id from the article we passed
    Clients.find({
      name: data._id,
      email: data._id,
      address: data._id,
      city: data._id,
      zip: data._id,
      state: data._id
    }, cb);
  },
  // Save a note
  // Export this function as "save" (data = note info, cb = callback)
  save: function(data, cb) {

    // Make a newNote with the note model, saving the apropos info
    var newClients = {
      name: data.clientName,
      email: data.clientEmail,
      address: data.clientAddress,
      city: data.clientCity,
      zip: data.clientZip,
      state: data.clientState

          };

    // Save the newNote we made to mongoDB with mongoose's save function
    Clients.create(newClients, function(err, doc) {
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
    Clients.remove({
      _id: data._id
    }, cb);
  }
};