
// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const Path = require("path");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

// serve public files as static
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



// wepack dev server // note: NODE_ENV='production' can be set in the comand line appended to the run commands
if(process.env.NODE_ENV !== 'production'){
    // runs outside of a production environment
    const webpackMiddleware = require('webpack-dev-middleware');
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.config');
    app.use(webpackMiddleware(webpack(webpackConfig)));
}
else{
  // runs for production environment
  app.use(express.static('build'));
  // default routeer middleware
  const routes  = require("./routes");
  app.use('/', routes);
}

// starting express app
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
