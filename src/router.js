import Vue from 'vue'
import Router from 'vue-router'
import login from './components/login/index.vue'
import clientes from './components/clientes/index.vue'
import detalleCliente from './components/detalleCliente/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: clientes,
      props: true
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/clientes/:id',
      name: 'detalleCliente',
      component: detalleCliente,
      props: true
    }
  ]
})
