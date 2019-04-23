/**
 * Vue-cli 配置
 */

const configureWebpack = require('./config/webpack.config')
module.exports = {
  assetsDir: 'static',
  productionSourceMap: false,
  configureWebpack,
  css: {
    loaderOptions: {
      postcss: {
        config: {
          path: './config/postcss.config'
        }
      }
    }
  }
}