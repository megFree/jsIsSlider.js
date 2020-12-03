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
      }),
      new CleanWebpackPlugin()
    ]
  },
  {
    name: 'prod-lib',
    mode: 'production',
    entry: './src/easySlider.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'easySlider.bundle.js'
    },
    module: {
      rules: [
        {test: /\.js$/, use: 'babel-loader'}
      ]
    },
    plugins: [new CleanWebpackPlugin()]
  }
]
