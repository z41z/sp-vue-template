/**
 * 第三方依赖分离
 */

module.exports = {
  chunks: 'all',
  cacheGroups: {
    libs: {
      name: 'chunk-base',
      test: /[\\/]node_modules[\\/]/,
      priority: 10,
      chunks: 'initial' // 只打包初始时依赖的第三方
    },
    elementUI: {
      name: 'chunk-element-ui', // 单独将 ElementUI 拆包
      priority: 20, // 权重
      test: /[\\/]node_modules[\\/]element-ui[\\/]/
    }
  }
}