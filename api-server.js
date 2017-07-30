// Dependencies
const express = require("express")
const routes  = require("./routes");
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose") 
const path = require("path")   
const PORT = process.env.PORT || 3000;
const app = express()

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// use ES6 promises with mongoose
mongoose.Promise = global.Promise;
// localhost connection uncomment for localhost
if(process.env.NODE_ENV !== 'test'){
mongoose.connect("mongodb://localhost/api");
}
mongoose.connection
  .on("error", (error) => {
    console.log("Mongoose Error: ", error);
  })
  .once("open", () => {
    console.log("Mongoose connection successful.");
  });

// // cors config cors is a browser issue and may not be a problem later
// var whitelist = ['https://pulse-alert.herokuapp.com', 'http://pulse-alert-api.herokuapp.com'];
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error("Not allowed by CORS " + origin))
//     }
//   }
// };
// app.use(cors());

// default routeer middleware
app.use('/', routes);

// wepack dev server
if(process.env.NODE_ENV !== 'production'){
    const webpackMiddleware = require('webpack-dev-middleware');
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.config');
    app.use(webpackMiddleware(webpack(webpackConfig)));
}
else{
  app.use(express.static('build'));
  // default route add routes above
  app.get('*', (req, res)=> {
    res.sendFile(Path.join(__dirname, 'build/index.html'));
  });

}

// follow up middleware set to handle errors
app.use((err, req, res, next)=>{
  res.status(400).json(`ERROR: ${ err.message }`)
})


// starting express app
  app.listen(PORT, function() {
   
    console.log("App listening on PORT " + PORT);
  });
