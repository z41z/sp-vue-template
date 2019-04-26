/**
 * 接口
 */
import { COUPON } from '@api/url'
import $api from '@utils/axios'

/**
 * 获取xxx
 * @param {Object} obj 请求配置
 * @param {Object} obj.data 请求数据
 * @param {String} obj.method 请求方式
 * @param {String} obj.search 附加链接search参数
 * @param {String} obj.name 接口名
 * @example getCoupon({ data: { keyword: 11 }, method: 'get', search: 'a=1&b=2', name: '测试接口' }) 
 * @returns Promise
 */

export const getCoupon = (obj = {}) => {
  let { data = {}, method = 'get', search = '', name = ''} = obj;
  return $api({
    url: COUPON.GET_LIST,
    data,
    method,
    search,
    name
  })
}