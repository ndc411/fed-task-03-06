<template>
  <div id="app">
<!-- 根路由出口 -->
    <router-view/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import request from '@/utils/request'

// 测试接口
// request({
//   method: 'get',
//   url: '/boss/v2/api-docs?group=edu-boss-boot'
// }).then(res => {
//   console.log(res)
// })
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
