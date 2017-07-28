# Starter code template for Mongo Express React Node app (MERN app)

## controllers
- use to interface with back end technologies and generally provide callback methods for the routes

## sourcing
- Sourcing is now handled with a plugin and code spliting.

## file naming
- extension .js allows for imports and requires without the .js
- index is the default file loaded when a dirctory is imported using index allows for shorter naming
- try to keep the file system flat
- use meaningful nameing and lowercase with hyphens for file names and directories
- classes all start with a capital character and camel case
- use es6 as much as possible
- controller are used for controlling something and can provide callback methods for the routes
- routes handle the incoming requests
- middlewares are a great way to handle errors and authorizing incoming requests
## config script
See the new webpack config now support webpack dev server integration with node.

## webpack-dev-server
This is a small node express server that will live update the code as the files are saved.
running this through the node server may require refreshing the page.

## dependencies
- react
- react-dom
- express
- body-parser
- axios // used to make http request
- lodash // used as a user interface utility for nicer control
- react-router-dom
- redux // a better way of hamdleing state
- react-redux // required to connect redux to react components
- cors // used to handle cross origin resourse sharing

## devDependencies
- webpack-dev-server
- webpack-dev-middleware
- html-webpack-plugin // builds the html entry point
- extract-text-webpack-plugin
- rimraf // compatability tool for rm comands
- css-loader // loads css
- babel-core // base babel
- babel-loader // loader for transpiler
- babel-preset-env // latest presets for es
- babel-preset-react // need to reconise jsx
- webpack // bundles modules


## file scripts
- create a working directory and cd into it
- Copy and paste text from starter-script.txt into the terminal
- This will create a boilerplate app file stucture and code base

## local deployment
### add scripts to packages.json
-   "clean": "rimraf build",
-   "build": "NODE_ENV=production npm run clean && webpack -p",
-   "serve": "webpack-dev-server",
-   "test": "echo \"Error: no test specified\" && exit 1",
-   "start": "npm run build && node server.js",
-   "start-dev": "nodemon server"
### how to run
- npm run clean // will remove the build directory that gets created using webpack
- npm run build // will first clean up then bundle the modules into a build directory in production mode
- npm run serve // will run webpack dev server independently use for developing only client side code
- npm run start // will first clean and build the build directory for production then start the server
- npm run start-dev // will run the nodemon on the server in developement mode using webpack-dev-server and webpack-dev-middleware
- the addition of a postinstall to build the build directory may be needed in the future and testing is not complete 

## conclusion

- this is the basic needs to run react on express servers on a local machine
- note the new packages-lock.json in addition to the packages.json for add integrity
