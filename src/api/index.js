/**
 * 接口
 */
import { COUPON } from '@api/url'
import $api from '@utils/axios'

/**
 * 
 * @param {Object} data 请求数据
 * @param {String} method 请求方式
 * @param {String} searchParamsStr 附加链接search参数
 * @example getCoupon({ keyword: 11 },'post','a=1&b=2') 
 * @returns Promise
 */
export const getCoupon = (data, method = 'get', searchParamsStr = '') => {
  let paramsName = method === 'post' ? 'data' : 'params'
  let searchStr = searchParamsStr ? ('&' + searchParamsStr) : ''
  return $api({
    url: `${COUPON.GET_LIST}${searchStr}`,
    [paramsName]: data,
    method
  })
}