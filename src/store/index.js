import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用于登陆成功后用于保存用户信息（初始值默认尝试读取本地存储）
    user: JSON.parse(window.localStorage.getItem('user') || null)
  },
  getters: {
  },
  // 同步操作，对数据的修改
  mutations: {
    // 存储用户数据
    setUser (state, payload) {
      // 将 payload 转为对象后再进行存储
      state.user = JSON.parse(payload)
      // 将 payload 数据添加到本地存储中,不用进行转换，本地存储中只能存储字符串的值，不能存储对象
      window.localStorage.setItem('user', payload)
    }
  },
  // 异步操作
  actions: {
  },
  modules: {
  }
})
