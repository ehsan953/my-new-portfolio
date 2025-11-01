import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainLayout from '../views/Layout/MainLayout.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import ContactView from '../views/ContactView.vue'
import BlogView from '../views/BlogView.vue'
import PortfolioDetailView from '../views/ProjectDetails.vue'
import AdminLogin from '../views/Admin/AdminLogin.vue'
import AdminDashboard from '../views/Admin/AdminDashboard.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/about',
        name: 'about',
        component: AboutView
      },
      {
        path: '/services',
        name: 'services',
        component: ServicesView
      },
      {
        path: '/portfolio',
        name: 'portfolio',
        component: PortfolioView
      },
      {
        path: '/project/:id',
        name: 'ProjectDetails',
        component: PortfolioDetailView
      },
      {
        path: '/contact',
        name: 'contact',
        component: ContactView
      },
      {
        path: '/blogs',
        name: 'blogs',
        component: BlogView
      },
      {
        path: '/blogs/:id',
        name: 'BlogDetails',
        component: () => import('../views/BlogDetails.vue')
      },
      {
        path: '/admin',
        name: 'admin',
        component: AdminLogin
      },
      {
        path: '/admin/dashboard',
        name: 'dashboard',
        component: AdminDashboard
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      // delay so the DOM renders before scrolling
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }, 0)
      return false // prevent default instant scroll
    }
  }
})

export default router
