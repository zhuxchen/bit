const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js',
    vendors: './src/vendors.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
}