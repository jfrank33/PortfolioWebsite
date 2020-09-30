import Vue from 'vue'
import Router from 'vue-router'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Portfolio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/AboutMe',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/Projects',
      name: 'Projects',
      components: Projects
    }
  ]
})