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
      path: '/gameHome',
      name: 'GameHome',
      component: () => import('../components/My Compo/EntryOverlay.vue')
    },
    {
      path: '/gameStadium',
      name: 'GameStadium',
      component: () => import('../components/My Compo/playStadium.vue')
    },
    {
      path:'/gameSettings',
      name:'GameSettings',
      component: () => import('../components/My Compo/gameSettings.vue')
    },
    {
      path:'/gameTutorial',
      name:'GameTutorial',
      component: () => import('../components/My Compo/gameTutorials.vue')
    }
  ]
})

export default router
