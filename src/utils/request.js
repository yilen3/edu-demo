import axios from 'axios'

// creat 创建 axios 实例
const request = axios.create({
  timeout: 5000
  // baseURL:
  // headers:
})

function getBaseURL (url) {
  if (url.startsWith('/boss')) {
    return 'http://eduboss.lagounews.com'
  } else {
    return 'http://edufront.lagounews.com'
  }
}

// 请求拦截器，分析前台后台地址
request.interceptors.request.use(function (config) {
  // 判断 config。url 的前缀，来进行请求 baseURL 的设置
  config.baseURL = getBaseURL(config.url)
  // 必须返回请求信息
  return config
})

export default request