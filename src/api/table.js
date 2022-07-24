import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}

export function getRemindList() {
  return request({
    url: '/api/remind/1000014',
    method: 'get',
  })
}
