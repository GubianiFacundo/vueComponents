import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import vuex from 'vuex';
import './style.css'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(vuex);

const store = new vuex.Store({
  state:{
    user:"",
    password:"",
  },
  mutations:{
    setUser (state, user){
      state.user = user;
    },
    setPassword (state, password){
      state.password = password;
    }
  },
  getters:{
    user:(state)=>{
      return state.user
    },
    password:(state)=>{
      return state.password
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
