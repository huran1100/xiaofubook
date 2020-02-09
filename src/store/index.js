import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser:{
      id: 1,
      nikename: "1",
      username: "1",
      email: "1",
      currentAccountId: 1
    },
    login:false,
    token:''
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
