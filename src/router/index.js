import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle } from '@/lib/util'
Vue.use(Router)

const router = new Router({
  routes
})

// 根据接口，此处模拟当前已经登录
const HAS_LOGINED = true
// 前置钩子
router.beforeEach((to, from, next) => {
  // if(to.meta.title)
  to.meta && setTitle(to.meta.title)
  // 如果即将访问的页面不是登录页面
  if(to.name !== 'login') {
    // 如果已经登录，直接往下走，该跳转哪个页面就跳转哪个页面
    if(HAS_LOGINED) next()
    // 如果没有登录，需要把页面跳转到登录页面
    else next({name: 'login'})
    // 如果访问的页面是登录页面
  } else {
    // 如果跳转到的页面是登录页面，跳转到首页
    if(HAS_LOGINED) next({ name: 'home' })
    // 如果没有登录，留在登录页面
    else next()
  }
})
// 后置钩子
// router.afterEach((to, from) => {
//   //login === false
// })


export default router
