const path = require("path");
const webpack = require("webpack");
const TerserJSPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    modules: ["@reach/router", "prop-types", "react", "react-dom", "react-helmet", "react-icons", "styled-components"]
  },
  optimization: {
    minimizer: [new TerserJSPlugin()]
  },
  output: {
    path: path.resolve(__dirname, "client/public"),
    filename: "js/[name].[hash].dll.js",
    library: "[name]"
  },
  plugins: [
    new webpack.DllPlugin({
      name: "[name]",
      path: path.join(__dirname, "[name]-manifest.json")
    })
  ]
};
