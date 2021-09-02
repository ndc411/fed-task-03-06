<template>
  <div class="header">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar shape="square" :size="26" :src="userInfo.portrait || require('@/assets/default-acatar.png')" />
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>{{ userInfo.userName }}</el-dropdown-item>
        <el-dropdown-item divided @click.native="handleLogout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script lang="ts">
import { userInfoApi } from '@/services/user'
import Vue from 'vue'

export default Vue.extend({
  name: 'AppHeader',
  data () {
    return {
      userInfo: {
        userName: '',
        portrait: ''
      }
    }
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    async getUserInfo () {
      const { data } = await userInfoApi()
      this.userInfo = data.content
    },
    handleLogout () {
      this.$store.commit('setUser', null)
      this.$router.push('/login')
    }
  }
})
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.el-dropdown-link {
  display: flex;
  align-items: center;
}
</style>
