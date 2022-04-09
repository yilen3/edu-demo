<template>
  <div class="login">
    <el-form
      ref="form"
      :model="form"
      :rules="rules"
      label-width="80px"
      label-position="top"
    >
      <el-form-item
       label="手机号"
       prop="phone"
      >
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item
       label="密码"
       prop="password"
      >
        <el-input
          v-model="form.password"
          type="password"
          ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
         type="primary"
         @click="onSubmit"
         :loading="isLoginLoading"
         >登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import request from '@/utils/request'
// import qs from 'qs'
// 引入封装的接口功能组件
import { login } from '@/services/user.js'

export default {
  name: 'LoginIndex',
  data () {
    return {
      // 存储表单数据的对象
      form: {
        // 为了方便测试写成固定值
        phone: '18201288771',
        password: '111111'
      },
      // 用于设置表单校验规则
      rules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1\d{10}$/, message: '请输入正确的手机号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '密码长度为 6 到 18 位', trigger: 'blur' }
        ]
      },
      // 用于保存加载状态
      isLoginLoading: false
    }
  },
  methods: {
    // 登录功能
    async onSubmit () {
      // this.$refs.form.validate(valid)
      try {
        // 1.设置校验成功的功能（请求）
        await this.$refs.form.validate()
        this.isLoginLoading = true
        // 2.发送请求
        // const { data } = await request({
        // method: 'POST',
        // url: 'front/user/login',
        // headers: { 'content-type': 'application/x-www-form-urlencoded'}
        // urlencoded 格式： 名=值&名=值。
        // data: qs.stringify(this.form)
        // })
        const { data } = await login(this.form)
        this.isLoginLoading = false
        // 3.响应处理
        if (data.state === 1) {
          this.$message.success('登陆成功')
          // 将用户信息存储到 Vuex 中
          this.$store.commit('setUser', data.content)
          // 根据可能存在的 redirect 数据进行跳转设置,所有功能完事之后跳转可以减少不必要的问题
          this.$router.push(this.$route.query.redirect || '/')
        } else {
          // alert(data.message)
          this.$message.error('登陆失败,请检查账号或密码是否正确')
        }
      } catch (err) {
        // 设置校验失败后的功能（提示）
        console.log('没有通过校验')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .login {
    display: flex;
    // 设置内部元素垂直水平居中
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .el-form {
    background-color: rgb(255, 255, 255);
    padding: 20px;
    width: 300px;
    border-radius: 10px;
    .el-button {
      width: 100%;
    }
  }
</style>
