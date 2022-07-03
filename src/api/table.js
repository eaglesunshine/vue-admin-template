import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}

export function getRemindList(params) {
  return request({
    url: 'http://43.138.219.184/api/remind/1000014',
    method: 'get',
    params
  })
}
