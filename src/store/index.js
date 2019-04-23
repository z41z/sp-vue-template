import Vue from 'vue'
import Vuex from 'vuex'
const state = require('./state')
const getters = require('./getters')
const mutations = require('./mutations')
const actions = require('./actions')
const modules = require('./modules')

Vue.use(Vuex)
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules
})

export default store
