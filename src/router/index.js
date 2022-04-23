import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPart from '../components/MainPart'
import AboutView from '../views/AboutView'
import HomeView from '../views/HomeView'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPart,
    children: [
      {
        path: '/',
        component: HomeView,         
      },
       {
        path: 'about',
        component: AboutView,         
      }       
    ],
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
