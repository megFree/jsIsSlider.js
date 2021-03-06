const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = [
  {
    name: 'dev-test',
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'dev.bundle.js'
    },
    module: {
      rules: [
        {test: /\.js$/, use: 'babel-loader'},
        {test: /\.css$/, use: ['style-loader', 'css-loader']}
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html'
      })
    ]
  },
  {
    name: 'prod-lib',
    mode: 'production',
    entry: './src/IsSlider.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'izSlider.min.js',
      library: 'jsIsSlider',
      libraryTarget: 'umd'
    },
    module: {
      rules: [
        {test: /\.js$/, use: 'babel-loader'},
        {test: /\.css$/, use: ['style-loader', 'css-loader']}
      ]
    },
    plugins: [new CleanWebpackPlugin()]
  }
]
