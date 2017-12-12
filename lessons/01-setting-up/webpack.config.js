const path = require('path');

module.exports = {
  entry: './index.js',

  output: {
    filename: 'bundle.js',
    publicPath: './public/',
    path:path.join(__dirname, '/dist'),
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}
