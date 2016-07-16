import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from './router'
import Filter from './filter'
import App from './App'

Vue.use(VueRouter)

//自定义过滤器
Filter(Vue)

var router = new VueRouter()
//Config
Router(router)
//Start
router.start(App, '#root')