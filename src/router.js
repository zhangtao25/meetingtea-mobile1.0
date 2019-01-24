import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: () => import('./views/home'),
    },
    {
      path: '/mall',
      component: () => import('./views/mall'),
      children: [
        {
          path: 'lv1-category',
          component: () => import('./views/mall/lv1-category.vue')
        }
      ]
    },
    {
      path: '/add',
      component: () => import('./views/add'),
    },
    {
      path: '/message',
      component: () => import('./views/message'),
    },
    {
      path: '/mine',
      component: () => import('./views/mine'),
    },
  ]
})
