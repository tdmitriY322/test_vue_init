import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      layout: 'main'
    },
    component: () => import('@/views/Slider')
  },
  {
    path: '/currency',
    name: 'Rate',
    meta: {
      layout: 'main'
    },
    component: () => import('@/views/CurrencyRate')
  },
  {
    path: '/chat',
    name: 'Home',
    meta: {
      layout: 'main'
    },
    component: () => import('@/views/Chat')
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router