const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    modules: [
      '@reach-router',
      '@babel/runtime',
      'prop-types',
      'react',
      'react-dom',
      'react-helmet',
      'react-icons',
      'styled-components'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../client/public'),
    filename: 'js/[name].[hash].dll.js',
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, './[name]-manifest.json')
    })
  ]
}
