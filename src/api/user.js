import axios from '@/utils/request.js'
// 定义user相关的网络请求
export const login = (data) => {
  // axios的请求
  return axios.request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}
