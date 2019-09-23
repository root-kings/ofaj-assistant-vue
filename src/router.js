import Vue from 'vue'
import Router from 'vue-router'
import Documents from './views/Documents.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/documents'
    },
    {
      path: '/documents',
      name: 'documents',
      component: Documents
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Login.vue')
    }
  ]
})
