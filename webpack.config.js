const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const TerserJsPlugin = require("terser-webpack-plugin");
const WebpackPWAManifestPlugin = require("webpack-pwa-manifest");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "client/src/js/index.js")
  },
  output: {
    path: path.resolve(__dirname, "client/public/"),
    filename: "js/[name].[hash].bundle.js",
    publicPath: "https://chuyar17.github.io/Portfolio/",
    chunkFilename: "js/[id].[chunkhash].js"
  },
  optimization: {
    minimizer: [new TerserJsPlugin()]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(jpg|png|gif|svg|jpge)$/,
        exclude: /node_modules/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
            name: "[hash].[ext]",
            outputPath: "assets"
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: path.resolve(__dirname, "client/src/images", "favicon.png"),
      template: path.resolve(__dirname, "client/src", "index.html"),
      filename: path.resolve(__dirname, "client/public", "index.html")
    }),
    new WebpackPWAManifestPlugin({
      name: "Jesus Ramirez-Portfolio",
      short_name: "JR Portfolio",
      description: "Soy Jesus Ramirez y este es mi portafolio personal",
      background_color: "#fff",
      theme_color: "#b1a",
      icons: [
        {
          src: path.resolve(__dirname, "client/src/images/favicon.png"),
          sizes: [96, 128, 192, 256, 384]
        }
      ]
    }),
    // Configuración para los metodos de caching
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
      manifest: require("./modules-manifest.json")
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, "client/public/js/*.dll.js"),
      outputPath: "js"
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/app.*", "**/manifest.*"]
    })
  ]
};
