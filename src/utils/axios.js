/**
 * 请求
 */

import axios from 'axios';

// 创建axios实例
const $api = axios.create({
  timeout: 5000 // 请求超时时间
});

// request拦截器
$api.interceptors.request.use(config => {
  // Do something before request is sent
  let {
    search,
    method,
    data,
    url
  } = config;
  let methodRegx = /post|pust|patch/ig;
  let searchStr = search ? ('?' + search) : '';
  let paramsName = methodRegx.test(method.toLowerCase()) ? 'data' : 'params';
  config.data = null;
  config[paramsName] = data;
  config.url = url + searchStr;
  config.headers['Content-Type'] = 'application/json;charset=UTF-8';
  return config;
}, error => {
  // Do something with request error
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
      return response.data;
    }
  },
  error => {
    let message = error.message
    let config = error.config
    let { url, method, headers, name } = error.config;
    let data = config.data || config.params
    console.log(`⚡name:${name}`)
    console.log(`🎫message:${message}`)
    console.log(`🌈url:${url}`)
    console.log(`💬data:${JSON.stringify(data)}`)
    console.log(`🐱‍👤method:${method}`)
    console.log(`🤔headers:${JSON.stringify(headers)}`)
    return Promise.reject('❌😭😱💔');
  }
);

export default $api;