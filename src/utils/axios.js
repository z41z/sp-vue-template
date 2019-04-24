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
    let { url, method, headers } = error.config;
    let data = config.data || config.params
    console.log(`🎫message:${message}`)
    console.log(`🌈url:${url}`)
    console.log(`💬data:${JSON.stringify(data)}`)
    console.log(`🐱‍👤method:${method}`)
    console.log(`🤔headers:${JSON.stringify(headers)}`)
    return Promise.reject('❌😭😱💔');
  }
);

export default $api;