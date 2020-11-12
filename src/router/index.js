import Vue from 'vue'
import Router from 'vue-router'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import Blog from '../components/Blog'
import Resume from '../components/Resume'
import MoodBoard from '../components/MoodBoard'

//const BlogPost = {template:'<div><p>This is the first blog. Strictly Testing. Hi!</p></div>'}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
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
      component: Projects
    },
    {
      path: '/Blog',
      name: 'Blog',
      component: Blog
      //children: [
      //  {path: '', component: Blog},
      //  {path: 'firstBlogPost', component: BlogPost}
      //]
    },
    {
      path: '/MoodBoard',
      name: 'MoodBoard',
      component: MoodBoard
    },
    {
      path: '/Resume',
      name: 'Resume',
      component: Resume
    }


  ]
})