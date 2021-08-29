<template>
  <div id="app">
    <h1>hello wrold</h1>
    <div class="text">212121</div>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
<!-- 根路由出口 -->
    <router-view/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      a: 1,
      b: [],
      c: {
        a: 1,
        b: 2
      }
    }
  },
  methods: {
    test () {
      console.log(234)
    }
  }
})
</script>
<!--<script>-->
<!--  // 1. 编辑器给的类型提示-->
<!--  // 2. TypeScript 编译期间的类型验证-->
<!--  export default {-->
<!--    data() {-->
<!--      return {-->
<!--        a: 1,-->
<!--        b: [],-->
<!--        c: {-->
<!--          a: 1,-->
<!--          b:2-->
<!--        }-->
<!--      }-->
<!--    },-->
<!--    methods: {-->
<!--      test () {-->
<!--        this.a.abc()-->
<!--      }-->
<!--    },-->
<!--  }-->
<style lang="scss" scoped>
.text {
  color: $success-color;
}
</style>
