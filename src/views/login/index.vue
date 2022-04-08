<template>
  <div class="login">
    <el-form
      ref="form"
      :model="form"
      label-width="80px"
      label-position="top"
    >
      <el-form-item label="手机号">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          v-model="form.password"
          type="password"
          ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
         type="primary"
         @click="onSubmit"
         >登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'LoginIndex',
  data () {
    return {
      form: {
        phone: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('点击提交!')
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
