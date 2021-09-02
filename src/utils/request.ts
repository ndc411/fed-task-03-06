import store from '@/store'
import axios from 'axios'

const requst = axios.create({
  // do something
})

// 添加请求拦截器
requst.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log(config)
  const { state: { user } } = store
  if (user && user.access_token) {
    config.headers.Authorization = user.access_token
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 响应拦截器

export default requst
