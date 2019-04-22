import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', 
      redirect: '/HelloWorld' 
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      name: "Home",
      component: Home
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => require(['../pages/index/index.vue'], resolve)
    }
  ]
})
