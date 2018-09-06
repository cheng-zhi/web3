import Vue from 'vue'
import App from './App'
import router from './router'
// 导入 element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入字体图标样式表
import './assets/fonts/iconfont.css'
// 导入全局的样式表
import './assets/css/global.css'
// 导入 axios
import axios from 'axios'

Vue.config.productionTip = false
// 安装element-ui
Vue.use(ElementUI)
// 设置请求根路径
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
// 配置axios
Vue.prototype.$http = axios

// 为 axios 的请求拦截器，添加处理函数
// 今后，只要使用 axios 发起了Ajax请求，必然会先调用 通过拦截器指定的回调函数
axios.interceptors.request.use(config => {
  // config 形参，就是当前请求的相关参数
  // console.log(config)
  // 为请求头对象，添加 Token 验证的 Authorization 字段
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
