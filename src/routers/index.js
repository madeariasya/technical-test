import {createRouter ,createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Overview from '../views/Overview.vue'
import ProvinceView from '../views/TestDuaView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/overview',
        name: 'overview',
        component: Overview
      },
      {
        path: '/province',
        name: 'province',
        component: ProvinceView
      },
    ]
  })


  export default router