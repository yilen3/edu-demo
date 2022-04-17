import request from '@/utils/request'

// 分页查询课程信息
export const getQueryCourses = data => {
  return request({
    method: 'POST',
    url: '/boss/course/getQueryCourses',
    data
  })
}

// 课程上下架接口,get 请求不能直接返回 data
export const changeState = params => {
  return request({
    method: 'GET',
    url: '/boss/course/changeState',
    params
  })
}

// 保存或更新课程信息
export const saveOrUpdateCourse = data => {
  return request({
    method: 'POST',
    url: '/boss/course/saveOrUpdateCourse',
    data
  })
}

// 上传图片接口
export const uploadCourseImage = data => {
  // data 应当为 FormData 对象
  return request({
    method: 'POST',
    url: '/boss/course/upload',
    data
  })
}