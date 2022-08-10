import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}

export function getRemindList($user_id) {
  return request({
    url: '/api/remind/query/chat_id/' + $user_id,
    method: 'get',
  })
}

export function getToken() {
  return request({
    url: '/api/suite_access_token',
    method: 'get',
  })
}

export function getUserInfo($code, $token) {
  return request({
    url: '/api/user_info/' + $code + '/' + $token,
    method: 'get',
  })
}
