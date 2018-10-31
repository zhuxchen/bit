const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
      ]
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 200,
          outputPath: 'assets/img',
          name: '[name].[ext]',
        }
      }
    }]
  }
}