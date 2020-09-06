import Vue from 'vue'
import Router from 'vue-router'
import bottom from '../App.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'bottom',
      component: bottom
    }
  ]
})
