// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var jade = require("jade");
var superagent = require("superagent");
var clientsController = require('./controllers/clients');
var jobsController = require('./controllers/jobs')

// Require History Schema
var Clients = require("./models/Clients");
var Jobs = require("./models/Jobs")


// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect("mongodb://localhost/gp-landscaping");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// This is the route we will send GET requests to retrieve our most recent search data.
// We will call this route the moment our page gets rendered

app.post('/api/clients', function(req, res) {
  clientsController.save(req.body, function(data) {

    res.json(data);
  });
  // var doc = new Clients({ name: req.body.name });
  // doc.save()
  });
  
app.post('/api/jobs', function(req, res) {
  jobsController.save(req.body, function(data) {

    res.json(data);
  });
   });

  // Here we'll save the location based on the JSON input.
  
//   Clients.create({
//     name: req.body.name,
//     // date: Date.now(),
//     // address: req.body.address,
//     // // jobOpen: req.body.jobOpen,
//     // notes: req.body.notes


//   }, function(err) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send("Job Saved");
//     }
//   });
// });

// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
