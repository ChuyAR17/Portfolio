const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const JSLoader = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env','@babel/preset-react']
    }
  }
}

const ESLintLoader = {
  test: /\.js$/,
  enforce: 'pre',
  exclude: /node_modules/,
  use: {
    loader: 'eslint-loader',
    options: {
      configFile: __dirname + '/.eslintrc'
    },
  }
}

const CSSLoader = {
  test: /\.css$/,
  exclude: /node_modules/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: __dirname + '../client/public/css',
      }
    },
    {
      loader: 'css-loader',
      options: {importLoaders: 1},
    },
    {
      loader: 'postcss-loader',
      options: {
        config: {
          path: __dirname + '/postcss.config.js'
        }
      }
    }
  ]
}

const CSSDevLoader = {
  test: /\.css$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'style-loader',
    },
    {
      loader: 'css-loader',
      options: {importLoaders: 1},
    },
    {
      loader: 'postcss-loader',
      options: {
        config: {
          path: __dirname + '/postcss.config.js'
        }
      }
    }
  ]
}

const MediaLoader = {
  test: /\.(jpg|png|gif|svg|woff|ttf)$/,
  use: [
    'file-loader',
    {
      loader: 'image-webpack-loader',
      options: {
        limit: 100000,
        fallback: 'file-loader',
        name: '../src/media/[name].[ext]',
      }
    }
  ]
}

module.exports = {
  MediaLoader: MediaLoader,
  JSLoader: JSLoader,
  ESLintLoader: ESLintLoader,
  CSSLoader: CSSLoader,
  CSSDevLoader: CSSDevLoader,
}