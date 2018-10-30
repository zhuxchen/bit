const path = require('path');

module.exports = {
  // 默认使用当前目录，但是推荐在配置中传递一个值。
  // 这使得你的配置独立于 CWD(current working directory - 当前执行路径)。
  context: path.resolve(__dirname), 
  entry: {
    app: './src/index.js',
    vendors: './src/vendors.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
}