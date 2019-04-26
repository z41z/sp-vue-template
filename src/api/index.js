/**
 * 接口
 */
import { COUPON } from '@api/url'
import $api from '@utils/axios'

/**
 * 获取xxx
 * @param {Object} data 请求数据
 * @param {String} method 请求方式
 * @param {String} search 附加链接search参数
 * @example getCoupon({ keyword: 11 },'post','a=1&b=2') 
 * @returns Promise
 */
export const getCoupon = (data, method = 'get', search = '') => {
  return $api({
    url: COUPON.GET_LIST,
    data,
    method,
    search
  })
}