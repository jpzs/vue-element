import axios from 'axios'
import cookie from 'utils/cookie'

axios.defaults.baseURL = 'http://easy-mock.com/project/5901dbc27a878d73716dd5d6/'
// Add a response interceptor
// Add a request interceptor
// axios.interceptors.request.use(function (config) {
//     // Do something before request is sent
//    return config;
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error);
// });

axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response.data
}, function (error) {
  // Do something with response error
  const res = error.response
  if (res.status === 401) {
    window.location = '/#/auth'
  }

  if (res.status === 500) {
    alert('服务故障', res.message)
  }
  return Promise.reject(error)
})
// axios.defaults.transformRequest = function (data) {
//   return JSON.stringify(Object.assign(data, {token: 'token'}))
// }

// axios.defaults.transformResponse =  function (res) {
// Do whatever you want to transform the data
// },

export default function (Vue) {
  const http = {}

  http.post = function (url, params) {
    // return promise
    const token = cookie.get('callcenter_token')
    return axios.post(url + '?token=' + token, params)
  }
  http.get = function (url, params) {
    // return promise
    const target = params || {}
    const token = cookie.get('callcenter_token')
    Object.assign(target, { token })
    return axios.get(url, { params: target })
  }
  http.delete = function (url, params) {
    // return promise
    const target = params || {}
    const token = cookie.get('callcenter_token')
    Object.assign(target, { token })
    return axios.delete(url, { params: target })
  }
  if (Vue) {
    Vue.prototype.$http = http
    return
  } else {
    return http
  }
}
