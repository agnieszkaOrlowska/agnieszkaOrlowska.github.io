import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProvidersView from '../views/ProvidersView.vue'
import LogInView from '../views/LogInView.vue'
import SignUpView from '../views/SignUpView.vue'
import ServicesView from '../views/ServicesView.vue'
import ReviewsView from '../views/ReviewsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/providers',
    name: 'providers',
    component: ProvidersView
  },
  {
    path: '/services/:providerName/:providerId',
    name: 'services',
    component: ServicesView,
  },
  {
    path: '/services/:providerName/:providerId/reviews',
    name: 'reviews',
    component: ReviewsView,
  },
  {
    path: '/login',
    name: 'login',
    component: LogInView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
