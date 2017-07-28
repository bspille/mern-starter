const Path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const VENDOR_LIBS = [
    "axios",
    "express",
    "body-parser",
    "lodash",
    "react",
    "react-dom",
    "react-router-dom",
    "react-redux",
    "redux",
];

module.exports = {
    entry: {
        // split the code into vendor packages listed above and source code
        bundle: "./src/index.js",
        vendor: VENDOR_LIBS
    },
    output: {
        path: Path.resolve(__dirname, "build"),
        // required to resolve plugins and loader emmits 
        publicPath: "/",
        // calls the name by the entry key above and hash to allow for cache busting
        filename: "[name].[chunkhash].js"
    },
    module: {
        rules: [
            {
              // babel loader for react here see presets in babelrc
                use: "babel-loader",
                test: /\.js?$/,
                exclude: /node_modules/
            },
            {
              // loader plugin for extracting text used here for css loading to a seperate file
                use: ExtractTextPlugin.extract({
                    use: "css-loader"
                }),
                test: /\.css$/
            }
           
        ] 
    },
    plugins: [
        // creates a package for css code
        new ExtractTextPlugin("style.css"),
        // used to split code in to smaller packages TODO: look up manifest
        new webpack.optimize.CommonsChunkPlugin({
            names: ["vendor", "manifest"]
        }),
        // adds script tags to a template and renders it in the build directory
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html"
        }),
        // set up for webpack dev server
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        })
    ],
    // handles errors cannot resolve fs and net TODO: look up what this does and investigate a better way of handling these
    node: {
        fs: "empty",
        net: "empty"
    },
    // setup for dev tool debuging
    devtool: "eval-source-map"
};
