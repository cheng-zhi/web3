import Vue from 'vue'
import Router from 'vue-router'
// 导入 登录组件
import Login from '@/components/Login'
// 导入 后台主页组件
import Home from '@/components/home/Home'
// 导入 欢迎组件
import Welcome from '@/components/home/Welcome'
// 导入 用户列表组件
import UserList from '@/components/user/User'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/login', component: Login },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', component: Welcome },
        { path: '/users', component: UserList }
      ]
    }
  ]
})

// 为路由对象，添加 beforeEach 导航守卫
router.beforeEach((to, from, next) => {
  // 如果用户访问的登录页，直接放行
  if (to.path === '/login') return next()
  // 从 sessionStorage 中获取到 保存的 token 值
  const tokenStr = window.sessionStorage.getItem('token')
  // 没有token，强制跳转到登录页
  if (!tokenStr) return next('/login')
  next()
})

export default router
