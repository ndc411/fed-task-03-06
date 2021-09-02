/**
 * 用户相关请求模块
 */
import store from '@/store'
import requst from '@/utils/request'
import qs from 'qs'

interface User {
  phone: string
  password: string
}

export const loginApi = (data: User) => {
  return requst({
    method: 'POST',
    url: '/front/user/login',
    // axios中：发送请求时，content-type 的值：
    // data 是普通对象，其值为: application/json(axios 默认值)
    // data是 qs stringfy转换之后的数据：key=value&key2=value2,此时content-type被设置为: x-www-form-urlencode
    // data是FormData对象， 则 Content-Type 被设置为 multipart/form-data
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data)
  })
}

export const userInfoApi = () => {
  return requst({
    method: 'GET',
    url: '/front/user/getInfo'
  })
}
