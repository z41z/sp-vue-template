<template>
  <div class="index">
    <hello-world></hello-world>
    {{list}}
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapState, mapActions } from 'vuex'
import store from '@/store'
import HelloWorld from '@components/index/HelloWorld'
import { getData } from '@api/index/index'
import { INDEX, USER } from '@const/api'

export default {
  data() {
    return {
      list: []
    }
  },
  mounted() {
    getData().then(res => {
      this.list = res.data
    })
    console.log(this.$store.state.name)
    this.reverseName()
    console.log(this.getName)
    this.changeName('newName')
    console.log(this.name)
  },
  methods: {
    ...mapMutations([
      'reverseName'
    ]),
    ...mapActions(['changeName'])
  },
  computed: {
    ...mapGetters([
      'getName'
    ]),
    ...mapState({
      name: state => state.name
    })
  },
  components: {
    HelloWorld
  }
}
</script>
<style lang="less" scoped>
</style>

