module.exports = {
  entry: './index.we?entry',
  output: {
    path: '../dist',
    filename: 'weex.2.js'
  },
  module: {
    rules: [
      {
        test: /\.we$/,
        loader: 'weex-loader'
      }
    ]
  }
}
