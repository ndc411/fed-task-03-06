/**
 * 菜单相关请求模块
 */
import requst from '@/utils/request'

export const createOrUpdateMenuApi = (data: any) => {
  return requst({
    method: 'POST',
    url: '/boss/menu/saveOrUpdate',
    data
  })
}

// -1 代表新增用
export const getEditMenuInfoApi = (id = -1) => {
  return requst({
    method: 'GET',
    url: '/boss/menu/getEditMenuInfo',
    params: { id }
  })
}
