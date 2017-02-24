module.exports = {
  entry: './index.we?entry',
  output: {
    path: '../dist',
    filename: 'weex.1.js'
  },
  module: {
    loaders: [
      {
        test: /\.we$/,
        loader: 'weex-loader'
      }
    ]
  }
}
