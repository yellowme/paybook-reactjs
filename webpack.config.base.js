var webpack = require('webpack');

var reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react'
};

var reactDomExternal = {
  root: 'ReactDOM',
  commonjs2: 'react-dom',
  commonjs: 'react-dom',
  amd: 'react-dom'
};

module.exports = {
  output: {
    library: 'PaybookWidget',
    libraryTarget: 'umd'
  },
  externals: {
    'react': reactExternal,
    'react-dom': reactDomExternal,
  },
  module: {
    rules: [
      { test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ]
  },
};
