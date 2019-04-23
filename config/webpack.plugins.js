/**
 * 插件配置
 */

const path = require('path')
const env = process.env.NODE_ENV
const CopyWebpackPlugin = require('copy-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

let plugins = [
  new CopyWebpackPlugin([
    {
      from: path.resolve(__dirname, '../static'),
      to: '../dist/static',
      ignore: 'root/*.*'
    },
    {
      from: path.resolve(__dirname, '../static/root'),
      to: '../dist/'
    }
  ])
]

if (env === 'production') {
  plugins.push(new BundleAnalyzerPlugin())
}
module.exports = plugins