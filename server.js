const express = require("express");
//const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;


app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(path.resolve(__dirname,'client')));

//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json());
//app.use(express.static('client/build'));

//app.use(express.static(path.join(__dirname,"public")));
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());
//app.use(bodyParser.text());
//app.use(bodyParser.json({ type: "application/vnd.api+json" }));



// Add routes, both API and view
app.use(routes);

app.get('*', function (req, res) {
  const index = path.join(__dirname, 'build', 'index.html');
  res.sendFile(index);
});

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreact";

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
