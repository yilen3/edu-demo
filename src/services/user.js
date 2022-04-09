import request from '@/utils/request.js'
import qs from 'qs'

// 用户登录接口
export const login = data => {
  return request({
    method: 'POST',
    url: 'front/user/login',
    // headers: { 'content-type': 'applicationx-www-form-urlencoded'}
    // urlencoded 格式： 名=值&名=值。
    data: qs.stringify(data)
  })
}

// 用户基本信息接口
export const getUserInfo = () => {
  return request({
    method: 'GET',
    url: '/front/user/getInfo'
  })
}
