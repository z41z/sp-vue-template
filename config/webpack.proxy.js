/**
 * 开发接口代理
 */

module.exports = {
  '/api': {
    target: 'http://sou.shybey.com/openJu.php',
    pathRewrite: { '^/api': '' },
    changeOrigin: true
  }
}