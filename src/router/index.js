import Vue from 'vue'
import Router from 'vue-router'

import homeRouterConfig from './home-router-config'
import mallRouterConfig from './mall-router-config'

Vue.use(Router)

export default new Router({
  routes: [
    homeRouterConfig,
    mallRouterConfig,
    {
      path: '/add',
      component: () => import('../views/add'),
    },
    {
      path: '/message',
      component: () => import('../views/message'),
    },
    {
      path: '/mine',
      component: () => import('../views/mine'),
    },

    // Be attached to mall
    {
      path: '/buycar',
      component: () => import('../views/mall/buycar.vue')
    }
  ]
})
