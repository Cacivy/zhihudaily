import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from './router'
// import filter from './filter'
import moment from './utils/date'
import lazyload from 'vue-lazyload'
import store from './vuex/store'
import { sync } from 'vuex-router-sync'
import App from './App'
import './assets/styles/root.scss'
import '../node_modules/animate.css/animate.min.css'

Vue.use(VueRouter)

// 图片懒加载
Vue.use(lazyload, {
  error: '/static/error.jpg',
  loading: '/static/loading.gif',
  try: 1 // default 1
})

// 自定义过滤器
Vue.filter('moment', function(value) {
    return moment(value)
})
// filter(Vue)
// router
const router = new VueRouter({
	routes: Router.routes
})
router.beforeEach((to, from, next) => {
  next()
})

sync(store, router)
// Start
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
// router.start(App, '#app')
// window.router = router