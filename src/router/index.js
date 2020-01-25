import Vue from 'vue'
import VueRouter from 'vue-router'

const Booking = () => import('../views/booking/Booking')
const Bill = () => import('../views/bill/Bill')
const User = () => import('../views/user/User')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/booking'
  },
  {
    path: '/booking',
    name: 'booking',
    component: Booking
  },
  {
    path: '/bill',
    name: 'bill',
    component: Bill
  },
  {
    path: '/user',
    name: 'user',
    component: User
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
