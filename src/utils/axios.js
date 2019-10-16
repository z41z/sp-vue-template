/**
 * 请求
 */

import axios from 'axios';
// 创建axios实例
const $api = axios.create({
  timeout: 30000 // 请求超时时间
});

/**
 * axios主要配置项config,和axios默认一致,新增options和mockData项
 * 接口返回格式{code: 200, msg: '接口返回值'}
 * @param {Object} 配置
 * @param {String} config.method 请求方式
 * @param {String} config.url 请求地址
 * @param {*} config.mockData 模拟数据
 * @param {Object} config.options 请求配置
 * @param {Object} config.options 请求配置
 * @param {*} config.options.data 请求数据
 * @param {String} config.options.search 请求url字符串search参数
 * @param {String} config.options.name 请求名称
 */
// request拦截器
$api.interceptors.request.use(config => {
  let {
    search = '',
    method = 'get',
    data = {},
    name = ''
  } = config.options;
  let { url } = config;
  let methodRegx = /post|put|patch/ig;
  let searchStr = search ? ('?' + search) : '';
  let paramsName = methodRegx.test(method.toLowerCase()) ? 'data' : 'params';
  config.method = method;
  config.data = null;
  config[paramsName] = data;
  config.url = url + searchStr;
  config.name = name;
  config.headers['Content-Type'] = 'application/json;charset=UTF-8';
  return config;
}, error => {
  console.log(error)
  Promise.reject(error);
})

// respone拦截器
$api.interceptors.response.use(
  response => {
    const res = response.data;
    if (response.status !== 200 && res.status !== 200) {
      return Promise.reject(res);
    } else {
      let errorEl = document.querySelector('#api_error')
      if (errorEl) {
        errorEl.remove()
      }
      let { mockData, name } = response.config
      if (mockData === undefined) {
        return response.data
      }
      else {
        console.log(`${name}已模拟数据:`, mockData)
        return {
          code: 200,
          msg: mockData
        }
      }
    }
  },
  error => {
    let message = error.message || error.response.data.message
    let config = error.config
    let { url = '', method = 'get', headers = {}, name = '', mockData } = config;
    let data = config.data || config.params;
    let href = location.href;
    if (mockData === undefined) {
      let errorEl = document.querySelector('#api_error')
      if (!errorEl) {
        // 错误提示弹框
        let div = document.createElement('div')
        div.id = 'api_error'
        div.style.cssText = `
          width:460px;
          position:absolute;
          top:90px;
          left:calc(50% - 250px);
          z-index:9999999;
          color:#ff6c6c;
          background:#ffe6e6;
          border-radius:5px;
          padding:10px 20px;
        `

        div.innerText = `代码:${error.request.status}\n详情:${message || '无'}`
        document.body.append(div)
        setTimeout(function () {
          div.style.display = 'none'
        }, 3000)
      }
      else {
        errorEl.style.display = 'block'
        errorEl.innerText = `代码:${error.request.status}\n详情:${message || '无'}`
        setTimeout(function () {
          errorEl.style.display = 'none'
        }, 3000)
      }
      console.log(`💔😭😱💔😭😱💔\n⚡name:${name}\n🎫message:${message}\n🌈href:${href}\n🌈url:${url}\n💬data:${JSON.stringify(data)}\n🐱‍👤method:${method}\n🤔headers:${JSON.stringify(headers)}`);
      return Promise.reject('❌😭😱💔');
    }
    else {
      console.log(`${name}已模拟数据:`, mockData)
      return {
        code: 200,
        msg: mockData
      }
    }
  }
);

export default $api;