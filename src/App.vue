<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { setRoutes } from '@utils/router'

export default {
  data() {
    return {

    }
  },
  created() {
    // 页面刷新设置路由
    let routes = sessionStorage.routes || '[]'
    setRoutes(this.$router, JSON.parse(routes))
  },
  mounted() {
  }
}
</script>

<style lang="less">
@import "~@styles/app";
</style>
