import Vue from 'vue'
import Vuex from 'vuex'
import plugins from './plugins'

// 告诉 vue “使用” vuex
Vue.use(Vuex)

var debug= process.env.NODE_ENV !== 'production'
Vue.config.debug = debug

export const STORAGE_NEWS_KEY = 'news'
export const STORAGE_TOPICS_KEY = 'topics'
export const STORAGE_POSTS_KEY = 'posts'


const state = {
  news: JSON.parse(localStorage.getItem(STORAGE_NEWS_KEY) || '[]'),
  topics: JSON.parse(localStorage.getItem(STORAGE_TOPICS_KEY) || '[]'),
  posts: JSON.parse(localStorage.getItem(STORAGE_POSTS_KEY) || '[]'),
}

const mutations = {
  ADD_NEWS (state, news) {
    state.news.push(news)
  },
  UPDATE_NEWS (state, news) {
    state.news.splice(0, 1, news)
  },
  ADD_TOPICS (state, topics) {
  	state.topics= topics
  },
  ADD_POSTS (state, post) {
    state.posts.push(post)
  }
}


// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
  strict: debug,
  state,
  mutations,
  plugins
})