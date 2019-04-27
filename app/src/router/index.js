import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';

const index = () => import('../pages/index/index.vue');
const list = () => import('../pages/list/list.vue');
const touch = () => import('../pages/touch/touchStart.vue');
const down = () => import('../pages/down/down.vue');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      meta: {
        title: 'index'
      }
    },
    {
      path: '/list',
      name: 'list',
      component: list,
      meta: {
        title: 'list'
      }
    },
    {
      path: '/touch',
      name: 'touch',
      component: touch,
      meta: {
        title: 'touch'
      }
    },
    {
      path: '/down',
      name: 'down',
      component: down,
      meta: {
        title: 'down'
      }
    }
  ]
})
