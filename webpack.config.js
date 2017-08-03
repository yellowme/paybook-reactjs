const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    modules: [
      'src',
      'node_modules',
    ],
    extensions: ['.js', '.jsx'],
  },
  devtool: 'eval-source-map',
  entry: [
     './index.js',
  ],
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: '/',
    filename: '[name]-[hash:8].js',
    chunkFilename: '[name]-[chunkhash:8].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'), // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
    }),
    new HtmlWebpackPlugin({     // Create HTML file that includes references to bundled CSS and JS.
      template: './index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      inject: true,
    }),
  ],
  module: {
    rules: [
      { test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    hot: false,
    inline: true,
    lazy: false,
    noInfo: true,
    publicPath: '/',
    watchContentBase: false,
  },
};
