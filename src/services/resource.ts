/**
 * 资源相关请求模块
 */

import requst from '@/utils/request'

export const getResourcePagesApi = (data: any) => {
  return requst({
    method: 'POST',
    url: '/boss/resource/getResourcePages',
    data
  })
}

export const getResourceCategoryApi = () => {
  return requst({
    method: 'GET',
    url: '/boss/resource/category/getAll'
  })
}
