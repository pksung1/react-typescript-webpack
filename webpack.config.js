const path = require('path')

module.exports = {
  mode: 'development',
  entry: './index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules|bower_components|.yarn|.pnp.cjs)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
            cacheDirectory: true
          }
        }
      }
    ]
  }
}