<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px">
        <app-aside />
      </el-aside>
      <el-container>
        <el-header>
          <app-header />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AppAside from './components/app-aside.vue'
import AppHeader from './components/app-header.vue'
export default {
  components: { AppAside, AppHeader },
  name: 'LayoutIndex'
}
</script>

<style scoped>
.el-container {
  height: 100vh;
  min-width: 980px;
}
.el-aside {
  background: #d3dce6;
}
.el-header {
  background: #fff;
  display: flex;
  align-items: center;
}
.el-main {
  background: #fff;
}
</style>
