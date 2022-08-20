import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}

// export function getRemindList($user_id) {
//   return request({
//     url: '/api/remind/query/chat_id/' + $user_id,
//     method: 'get',
//   })
// }

export function getRemindList($user_id) {
  return request({
    url: '/relay/api',
    method: 'post',
    data: {
      uri: 'remind/query/chat_id/' + $user_id,
    }
  })
}
