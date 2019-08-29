const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "./client/src/js/index.js")
  },
  output: {
    path: path.resolve(__dirname, "src/public/"),
    filename: "js/[name].bundle.js",
    publicPath: "http://localhost:9000/",
    chunkFilename: "js/[id].[chunkhash].js"
  },
  devServer: {
    contentBase: path.join(__dirname, "client/src"),
    port: 9000,
    hot: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(jpg|jpge|png|svg|gif)$/,
        exclude: /node_modules/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "assets/"
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "Jesus Ramirez-Portfolio",
      template: path.resolve(__dirname, "client/src/index.html")
    })
  ]
};
