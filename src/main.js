// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import header from './components/header'
import content from './components/content'
import bottom from './components/bottom'

Vue.component('MyHeader', header); 
Vue.component('MyContent', content); 
Vue.component('MyBottom', bottom);   




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
