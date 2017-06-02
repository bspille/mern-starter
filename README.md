# this is a test bed app for react deployed on a express server

## controllers
- use sendFile for html in public
- do not use index in public html it gets confused if using views
- use render for views using a view engine

## sourcing
- use the src attribute in a script tag to include bundle.js
- see: webpack.config.js

## webpack.config.js
- must specify entry module ie: ./app/app
- app extension may be .js or .jsx
- must specify output module ie: ./public/bundle.js
- bundle.js is created by babel do not make this file it will be renamed something different
- include module loaders
## config script
- copy and paste into the file

module.exports = {

  // This is the entry point or start of our react applicaton
  entry: "./app/app.jsx",

  // The plain compiled JavaScript will be output into this file
  output: {
    filename: "public/bundle.js"
  },

  // This section desribes the transformations we will perform
  module: {
    loaders: [
      {
        // Only working with files that in in a .js or .jsx extension
        test: /\.jsx?$/,
        // Webpack will only process files in our app folder. This avoids processing
        // node modules and server files unnecessarily
        include: /app/,
        loader: "babel-loader",
        query: {
          // These are the specific transformations we'll be using.
          presets: ["react", "env"]
        }
      }
    ]
  },
  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
  devtool: "eval-source-map"
};


## dependencies
- react
- react-dom
- express
- views engine of choice
- body-parser

## devDependencies
- babel-core // base babel
- babel-loader // loader for transpiler
- babel-preset-env // latest presets for es
- babel-preset-react // need to reconise jsx
- webpack // bundles modules


## file scripts
- copy and paste into terminal

mkdir models controllers public views app &&
mkdir public/assets views/layouts app/components &&
mkdir public/assets/css public/assets/js public/assets/images app/components/children &&
touch views/index.jsx &&
touch views/layouts/main.jsx &&
touch public/test.html &&
touch public/assets/css/style.css &&
touch public/assets/js/myapp.js &&
touch controllers/controller.js &&
touch models/master.js &&
touch models/slave.js &&
touch app/app.jsx &&
touch app/components/main.jsx &&
touch app/components/children/parent.jsx &&
touch app/components/children/child.jsx &&
touch app/components/children/grandchild.jsx &&
echo node_modules | tee .gitignore &&
npm init --yes && npm install react react-dom express mongoose axios socket.io body-parser --save && npm install babel-core babel-loader babel-preset-env webpack --Dev-save

## local deployment
- run webpack -w in the directory in one terminal window
- run node or nodemon server in another terminal window in the same directory

## conclusion

- this is the basic needs to run react on express servers on a local machine
- note the new packages-lock.json in addition to the packages.json for add integrity
