import router from '@/router'
import store from '@/store'
import axios from 'axios'
import { Message } from 'element-ui'
import qs from 'qs'

function redirectLogin () {
  router.push('/login')
}

function refreshToekn () {
  return axios.create()({
    method: 'POST',
    url: '/front/user/refresh_token',
    data: qs.stringify({
      refreshtoken: store.state.user.refresh_token
    })
  })
}

const requst = axios.create({
  // do something
})

// 添加请求拦截器
requst.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // console.log(config)
  const { state: { user } } = store
  if (user && user.access_token) {
    config.headers.Authorization = user.access_token
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

let isRefresh = false
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let requestList: any[] = [] // 存储刷新 token 期间过来的 401 请求
// 响应拦截器
requst.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, async function (error) {
  // 对响应错误做点什么
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    // 400 401 404 500
    const { status } = error.response
    if (status === 400) {
      Message.error('请求参数或者方法错误')
    } else if (status === 401) {
      if (!store.state.user) {
        redirectLogin()
        return Promise.reject(error)
      }
      // 尝试刷新 token
      if (!isRefresh) {
        isRefresh = true
        // tips: 继续返回，否则外部拿不到内部的状态
        return refreshToekn().then(res => {
          if (!res.data.success) {
            throw new Error('刷新 Token 失败')
          }
          // 成功了 -> 把本次失败的请求重新发出去
          // 把刷新后拿到的 token 更新到容器中
          store.commit('setUser', res.data.content)

          // 把 requestList 队列中的请求重新发出去
          requestList.forEach(cb => cb())
          // 重置 requestList 数组
          requestList = []
          // error.config 失败请求的配置信息
          return requst(error.config)
        }).catch(err => {
          console.log(err)
          store.commit('setUser', null)
          redirectLogin()
          return Promise.reject(error)
        }).finally(() => {
          isRefresh = false
        })
      }
      // 刷新状态下，把请求挂起放到 requestList 数组中
      return new Promise(resolve => {
        requestList.push(() => {
          resolve(requst(error.config))
        })
      })
    } else if (status === 403) {
      Message.error('没有权限，请联系管理员')
    } else if (status === 404) {
      Message.error('资源不存在')
    } else if (status >= 500) {
      Message.error('服务端错误！！！')
    }
    console.log(error.response.data)
    console.log(error.response.status)
    console.log(error.response.headers)
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    Message.error('请求超时，请刷新页面')
    console.log(error.request)
  } else {
    Message.error(`请求失败 ${error.message}`)
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message)
  }
  console.log(error.config)
  return Promise.reject(error)
})

export default requst
