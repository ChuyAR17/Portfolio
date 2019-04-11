const path = require('path')
const _MiniCssExtractPlugin = require('mini-css-extract-plugin')
const _StyleLintPlugin = require('stylelint-webpack-plugin')

const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
  filename: '[name].bundle.css',
  chunkFilename: '[name].[id].css',
  publicPath: '/build'
})

const StyleLintPlugin = new _StyleLintPlugin({
  configFile: path.resolve(__dirname, 'stylelint.config.js'),
  context: path.resolve(__dirname, '../src/css'),
  files: '**/*.css',
  failOnError: false,
  quiet: false,
})

module.exports = {
  MiniCssExtractPlugin: MiniCssExtractPlugin,
  StyleLintPlugin: StyleLintPlugin,
}