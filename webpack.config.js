var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    index: ["./app/assets/css/index.js"],
    vendor: ["./app/assets/js/common.js"],
    app: ["./app/assets/js/main.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "./javascripts/[name].bundle.js"
  },
  module:  {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader"),
        exclude: /node_modules/
      },
      {
        test: /\.png$/, loader: "file?name=../../public/images/build/[name].[ext]", exclude: /node_modules/
      }

    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      "$":"jquery",
      "jQuery":"jquery",
      "window.jQuery":"jquery"
    }),
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"./javascripts/vendor.bundle.js"),
    new ExtractTextPlugin("./stylesheets/[name].css")
  ],
  resolve: {
      root: path.resolve(__dirname, "./"),
      extensions: ['', '.js', 'less']
  }
};