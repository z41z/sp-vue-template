/**
 * 过滤器
 */

export const filters = {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  },
  sum: function (value) {
    return value + 10
  }
}