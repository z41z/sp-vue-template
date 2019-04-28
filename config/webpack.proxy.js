/**
 * 开发接口代理
 */

module.exports = {
  '/api': {
    target: 'http://127.0.0.1/',
    pathRewrite: { '^/api': '' },
    changeOrigin: true
  }
}