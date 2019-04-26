const path = require('path')
const loaders = require('./loaders')
const plugins = require('./plugins')

module.exports = (env) => {
  return {
    entry: {
      "index": path.resolve(__dirname, '../client/src/js/index.js'),
    },
    output: {
      path: path.resolve(__dirname, '../client/public/'),
      filename: 'js/[name].bundle.js'
    },
    module: {
      rules: [
        loaders.CSSLoaderExtract,
        loaders.JSLoader
      ]
    },
    plugins: [
      plugins.MiniCssExtractPlugin,
      // plugins.StyleLintPlugin,
    ]
  }
}