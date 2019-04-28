<template>
  <div class="login">
    <el-form>
      <el-form-item>
        <el-input></el-input>
        <el-input></el-input>
        <el-button @click="login">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { setRoutes } from '@utils/router'
export default {
  methods: {
    login() {
      let loginSuccess = true
      if (loginSuccess) {
        let routes = [
          {
            path: '/home',
            name: 'home',
            menuName: '首页',
            component: 'Home',
            children: [
              {
                path: '/sub-home',
                name: 'SubHome',
                menuName: '子页',
                component: 'SubHome',
              }
            ]
          },
          {
            path: '/about',
            name: 'about',
            menuName: '关于',
            component: 'About'
          }, {
            path: '/help',
            name: 'help',
            menuName: '帮助',
            component: 'Help'
          }
        ]
        sessionStorage.setItem('routes', JSON.stringify(routes))
        setRoutes(this.$router, routes)
        this.$router.push('/home')
      }
    }
  }
}
</script>

