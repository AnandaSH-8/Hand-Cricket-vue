import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/vueHome',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vueAbout',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/',
      name: 'GameHome',
      component: () => import('../components/My Compo/EntryOverlay.vue')
    },
    {
      path: '/gameStadium',
      name: 'GameStadium',
      component: () => import('../components/My Compo/playStadium.vue')
    }
  ]
})

export default router
