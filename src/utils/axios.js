import axios from 'axios';

// axios
const service = axios.create({
  timeout: 5000
});

// request
service.interceptors.request.use(config => {
  // Do something before request is sent
  config.headers['Content-Type'] = 'application/json;charset=UTF-8';
  return config;
}, error => {
  // Do something with request error
  Promise.reject(error);
})

// respone
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (response.status !== 200 && res.status !== 200) {
      return Promise.reject(res.status);
    } else {
      return response.data;
    }
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;