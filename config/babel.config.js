/**
 * Babel配置
 */

module.exports = {
  test: /\.js$/,
  exclude: /(node_modules)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@vue/app'],
      plugins: ['dynamic-import-webpack']
    }
  }

}