const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
// Serve up static assets
//app.use(express.static("client/build"));

//app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(express.static('client/build'));

//app.use(express.static('public'));

app.use(methodOverride("_method"));
// Add routes, both API and view
app.use(routes);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreact"

// Set up promises with mongoose
mongoose.Promise = Promise;

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
