export default {
  path: '/mall',
  component: () => import('../views/mall'),
  children: [
    {
      path: 'lv1-category',
      component: () => import('../views/mall/lv1-category.vue')
    }
  ]
}