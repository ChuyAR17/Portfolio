const path = require('path')
const loaders = require('./loaders')
const plugins = require('./plugins')

module.exports = {
  entry: {
    "index": path.resolve(__dirname, '../client/src/js/index.js'),
  },
  output: {
    path: path.resolve(__dirname, '../../public'),
    filename: 'js/[name].bundle.js',
    publicPath: '/build'
  },
  devServer: {
    port: 9000,
  },
  module: {
    rules: [
      loaders.MediaLoader,
      loaders.JSLoader,
      loaders.CSSDevLoader,
    ]
  },
  plugins: [
    plugins.MiniCssExtractPlugin,
    plugins.StyleLintPlugin,
  ]
}