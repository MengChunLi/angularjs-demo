var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    "base": ["./app/assets/css/base.js"],
    "theme-red": ["./app/assets/css/theme-red.js"],
    "theme-green": ["./app/assets/css/theme-green.js"],
    "vendor": ["./app/assets/js/bootstrap.js"],
    "app": ["./app/assets/js/main.js",]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/app",
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
      },
      {
        test: /\.js$/,
        loader: "ng-annotate!babel?presets[]=es2015",
        exclude: /node_modules/
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