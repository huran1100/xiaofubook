import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'

const Booking = () => import('../views/booking/Booking')
const Bill = () => import('../views/bill/Bill')
const User = () => import('../views/user/User')
const UserLogin = () => import('../views/login/UserLogin')
const AccountBook = () => import('../views/accountbook/AccountBook')
const AddAccount = () => import('../views/accountbook/AddAccount')
const Home = () => import('../views/Home')
const BillInfo = () => import('../views/bill/BillInfo')
const Sort = () => import('../views/user/Sort')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    component:UserLogin
  },
  {
    path: '/home',
    name: 'home',
    component:Home,

    children:[
      {
        path: '',
        redirect: '/bill'
      },
      {
        path: '/booking',
        name: 'booking',
        component: Booking,
        meta:{
          requireAuth:true
        }
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
      },
      {
        path: '/account',
        name: 'account',
        component:AccountBook
      },
      {
        path: '/addAccount',
        name: 'addAccount',
        component:AddAccount
      },
      {
          path: '/billInfo/:billId',
          name: 'billInfo',
          component:BillInfo
      },
        {
            path: '/sort',
            name: 'sort',
            component: Sort
        }
    ]

  }

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // 判断跳转的路由是否需要登录
 /* if(to.meta.requireAuth){
    // vuex.state判断token是否存在
    if(store.state.token){
      next()
    }else {
      next({
        path:'/login',
        // 将跳转的路由path作为参数，登录成功后跳转到该路由
        query:{redirect:to.fullPath}
      })
    }
  }else{
    next()
  }*/
 if(to.path=='/login') return next()
    const  tokenStr = window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next()

  /*if(to.path !='/addAccount'){
    if(this.$store.state.currentUser.currentAccountId == 0){
      console.log(this.$store.state.currentUser.currentAccountId,"dangq==")
      return next('/addAccount')
    }else{
      next()
    }
  }*/
})

export default router
