/**
 * 接口
 */
import {
  COUPON
} from '@api/url'
import $api from '@utils/axios'

/**
 * 获取xxx
 * @param {optionsect} options 请求配置
 * @param {optionsect} options.data 请求数据
 * @param {String} options.method 请求方式
 * @param {String} options.search 附加链接search参数
 * @param {String} options.name 接口名
 * @example getCoupon({ data: { keyword: 11 }, method: 'get', search: 'a=1&b=2', name: '测试接口' }) 
 * @returns Promise
 */

export const getCoupon = (options = {}) => {
  return $api({
    url: COUPON.GET_LIST,
    options: {
      ...options,
      name: '测试接口'
    }
  })
}