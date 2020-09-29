import Vue from 'vue'
//import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

//Vue.use(VueRouter);

//const router = new VueRouter({
 // routes: [
 //   { path: '/AboutMe', component: './components/AboutMe' },
 //   { paths: '/Portfolio', component: './components/Portfolio' }
//  ]
//})

new Vue({
 // router,
  render: h => h(App),
}).$mount('#app')
