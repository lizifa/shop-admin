import axios from 'axios'

const service = axios.create({
  baseURL: 'http://127.0.0.1:7000/api',
  timeout: 200000
})

axios.defaults.withCredentials = false

function reqSuccess(config) {
  return config
}

function reqFail(error) {
  Promise.reject(error)
}

function resSuccess(response) {
  return response.data
}

function resFail(error) {
  return Promise.reject(error)
}

service.interceptors.request.use(reqSuccess, reqFail)
service.interceptors.response.use(resSuccess, resFail)

export default service
