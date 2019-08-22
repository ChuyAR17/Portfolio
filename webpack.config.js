const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const TerserJsPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: {
    app: path.resolve(__dirname, './client/src/js/index.js')
  },
  output: {
    path: path.resolve(__dirname, './client/public/'),
    filename: 'js/[name].[hash].bundle.js',
    publicPath: 'http://localhost:3001/',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  optimization: {
    minimizer: [
      new TerserJsPlugin()
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-plugin'
      },
      {
        test: /\.(jpg|png|gif|svg|jpge)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[hash].[ext]',
            outputPath: 'assets'
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Jesus Ramirez-Portfolio',
      filename: path.resolve(__dirname, './client/public/index.html'),
      template: path.resolve(__dirname, './client/src/index.html')
    }),
    // Plugins para generar los archivos del PWA
    // Configuracion del manifest para la PWA
    // new WebpackPWAManifestPlugin({
    //   name: 'Jesus Ramirez-Portfolio',
    //   short_name: 'JR Portfolio',
    //   description: 'Soy Jesus Ramirez y este es mi portafolio personal',
    //   background_color: '#fff',
    //   theme_color: '#b1a',
    // Iconos por definir
    // icons: [
    //   {
    //     src: path.resolve(__dirname, '../src/assets/icon.png'),
    //     sizes: [96,128,192,256,384,512]
    //   }
    // ]
    // }),
    // Configuracion del service worker para el caché de la app
    // new WorkboxWebpackPlugin.GenerateSW({
    //   runtimeCaching: [
    //     {
    //       urlPattern: new RegExp('https://(Servidor de imagenes)'),
    //       handler: 'CacheFirst',
    //       options: {
    //         cacheName: 'images'
    //       }
    //     },
    //     {
    //       urlPattern: new RegExp('https://(Servidor de la app)'),
    //       handler: 'NetworkFirst',
    //       options: {
    //         cacheName: 'api'
    //       }
    //     },
    //   ]
    // }),
    new webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json.js')
    }),
    new AddAssetHtmlPlugin({
      filename: path.resolve(__dirname, './src/client/public/js/*.dll.js'),
      outputPath: 'js',
      publicPath: 'http://localhost: 3001/js/'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/app.*']
    })
  ]
}
