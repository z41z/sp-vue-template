<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <span>{{name | capitalize}}</span>
    <span>{{age | sum}}</span>
    <span>状态：{{STATUS.TEST}}</span>
    <span>mixData：{{userName}}</span>
    <el-input
      v-focus="23"
      v-model="num"
    ></el-input>
  </div>
</template>

<script>
import HelloWorld from '@components/HelloWorld.vue'
import { filters } from '@filters'
import { directives } from '@directives'
import { userMix } from '@mixins'
import { STATUS } from '@const'
import { getCoupon } from '@api'
export default {
  name: 'home',
  mixins: [userMix],
  data() {
    return {
      name: 'alice',
      age: 10,
      num: 0,
      STATUS
    }
  },
  mounted() {
    getCoupon({ data: { keyword: 11 }, method: 'get', search: 'a=1&b=2', name: '测试接口' }).then(res => {

    })
  },
  filters,
  directives,
  components: {
    HelloWorld
  }
}
</script>

