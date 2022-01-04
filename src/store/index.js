/*
 * @Author: airmz
 * @Date: 2021-10-07 11:42:25
 * @LastEditTime: 2021-10-14 21:02:18
 * @FilePath: \yeb\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routes: []
  },
  mutations: {
    initRouter(state, data) {
      state.routes = data
    }

  },
  actions: {},
  modules: {}
})
