import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: "",
    password: "",
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setPassword(state, password) {
      state.password = password;
    }
  },
  getters: {
    user:(state)=>{
      return state.user
    },
    password:(state)=>{
      return state.password
    }
  },
  actions: {

  }
})
