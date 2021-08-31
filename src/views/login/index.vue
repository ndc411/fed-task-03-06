<template>
  <div class="login">
    <el-form
     class="login-form"
     label-width="80px"
     label-position="top"
     ref="form"
     :model="form"
     :rules="rules"
     >
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          class="login-btn"
          type="primary"
          @click="onSubmit"
          :loading="isLoginLoading"
        >
        登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Form } from 'element-ui'
import { loginApi } from '@/services/user'

export default Vue.extend({
  name: 'LoginIndex',
  data () {
    return {
      form: {
        phone: '',
        password: ''
      },
      rules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1\d{10}$/, message: '请输入正确的手机号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { min: 6, max: 18, message: '长度为 6 到 18 位', trigger: 'blur' }
        ]
      },
      isLoginLoading: false
    }
  },
  methods: {
    async onSubmit () {
      // 1. 表单验证
      try {
        await (this.$refs.form as Form).validate()
        this.isLoginLoading = true
        // 2. 验证通过 -> 提交表单
        const { data } = await loginApi(this.form)
        if (data.state !== 1) {
          return this.$message.error(data.message)
        } else {
          this.$router.push('/')
          this.$message.success('登录成功')
        }
      } catch (err) {
        console.log('登录失败', err)
      }
      this.isLoginLoading = false
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
