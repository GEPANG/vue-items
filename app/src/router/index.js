import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'Home',
      component:Home,
    },
    {
      path: '/city',
      name:'city',
      component:()=>import('../components/city/City'),
    },
    {
      path: '/detail',
      name:'detail',
      component:()=>import('../components/details/Detail'),
    }
  ]
})
