import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from './router'
import filter from './filter'
import store from './vuex/store'
import { sync } from 'vuex-router-sync'
import App from './App'
import './assets/styles/root.scss'
import '../node_modules/animate.css/animate.min.css'

// Vue.transition('fade', { type: 'animation', enterClass: 'zoomIn', leaveClass: 'zoomIn'})
Vue.use(VueRouter)

//自定义过滤器
filter(Vue)

const router = new VueRouter({
  history: true,
  hashbang: true,
  saveScrollPosition: true,
  suppressTransitionError: true,
  transitionOnLoad: true
})
sync(store, router)
//Config
Router(router)
//Start
router.start(App, '#app')
window.router = router