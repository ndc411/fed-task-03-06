<template>
  <div class="login">
    <el-form
     class="login-form"
     label-position="top"
     ref="form"
     :model="form"
     label-width="80px"
     >
      <el-form-item label="手机号">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import request from '@/utils/request'
import qs from 'qs'

export default Vue.extend({
  name: 'LoginIndex',
  data () {
    return {
      form: {
        phone: '18201288771',
        password: '111111'
      }
    }
  },
  methods: {
    async onSubmit () {
      // 1. 表单验证
      // 2. 验证通过 -> 提交表单
      const res = await request({
        method: 'POST',
        url: '/front/user/login',
        // axios 默认发送的是application/json 格式的数据，所以根据接口要求，需要转化--> 可以使用 qs
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(this.form)
      })
      console.log(res)
    }
  }
})
</script>
<style lang="scss" scoped>
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -50px;
}
.login-form {
  background: #fff;
  padding: 20px;
  width: 300px;
  border-radius: 6px;
}
.login-btn {
  width: 100%;
}
</style>
