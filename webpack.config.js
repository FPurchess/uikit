module.exports = {
  entry: {
    uikit: './src/js/uikit.js'
  },

  output: {
    library: 'UIkit',
    libraryTarget: 'umd',
    filename: '[name].js',
    path: './js'
  },

  externals: {
      'jquery': 'jQuery'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  }
}
