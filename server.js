// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var jade = require("jade");
var superagent = require("superagent");
var clientsController = require('./controllers/clients');
var jobsController = require('./controllers/jobs')


var Clients = require("./models/Clients");
var Jobs = require("./models/jobs")


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

  // mongoose.connect("mongodb://admin:heroku_wvdq0t7m:thle5joaqosoqs3ce0tj67o6on@ds035674.mlab.com:35674/heroku_wvdq0t7m");


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


// This is the route we will send GET requests to retrieve our most recent search data.
// We will call this route the moment our page gets rendered

app.post('/api/clients', function(req, res) {
  clientsController.save(req.body, function(data) {
    console.log("data return");
    console.log(data);
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


app.get('/api/clients/', function(req, res) {
  clientsController.get(req.body, function(data) {
    res.json(data);


  });
});



app.post("/submit", function(req, res) {
  clientsController.save(req.body, function(data) {
    console.log("sdfadsdfsfd")


  
  // Use our Note model to make a new note from the req.body
  var newJobs = new Jobs(req.body);
  // Save the new note to mongoose
  newJobs.save(function(error, doc) {
    // Send any errors to the browser
    if (error) {
      res.send(error);
    }
    // Otherwise
    else {
      // Find our user and push the new note id into the User's notes array
      Clients.findOneAndUpdate({}, { $push: { "Jobs": doc.name.data._id } }, { new: true }, function(err, newdoc) {
        // Send any errors to the browser
        if (err) {
          res.send(err);
        }
        // Or send the newdoc to the browser
        else {
          res.send(newdoc);
        }
      });
    }
  });
 });
});


app.get("/populatedclients", function(req, res) {
  // Prepare a query to find all users..
  Clients.find({})
    // ..and on top of that, populate the notes (replace the objectIds in the notes array with bona-fide notes)
    .populate("Jobs")
    // Now, execute the query
    .exec(function(error, doc) {
      // Send any errors to the browser
      if (error) {
        res.send(error);
      }
      // Or send the doc to the browser
      else {
        res.send(doc);
      }
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
app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});
// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
