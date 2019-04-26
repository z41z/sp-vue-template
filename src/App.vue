<template>
  <div id="app">
    <div id="nav">
      <template v-for="menu in routers.menus">
        <router-link :to="menu.path">{{menu.menuName}}</router-link>
      </template>
    </div>
    <router-view />
  </div>
</template>

<script>
import routers from '@router'
export default {
  data() {
    return {
      routers
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  font-size: 14px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
