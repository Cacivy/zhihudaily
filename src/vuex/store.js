import Vue from 'vue'
import Vuex from 'vuex'
import plugins from './plugins'

Vue.use(Vuex)

var debug= process.env.NODE_ENV !== 'production'
Vue.config.debug = debug

export const STORAGE_NEWS_KEY = 'news'
export const STORAGE_TOPICS_KEY = 'topics'
export const STORAGE_SECTIONS_KEY = 'sections'
export const STORAGE_POSTS_KEY = 'posts'


const state = {
  news: JSON.parse(localStorage.getItem(STORAGE_NEWS_KEY) || '[]'),
  topics: JSON.parse(localStorage.getItem(STORAGE_TOPICS_KEY) || '[]'),
  sections: JSON.parse(localStorage.getItem(STORAGE_SECTIONS_KEY) || '[]'),
  posts: JSON.parse(localStorage.getItem(STORAGE_POSTS_KEY) || '[]'),
  topicPosts: {},
  sectionlist: {}
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
  },
  ADD_TOPICPOSTS (state, posts) {
    state.topicPosts= posts
  },
  ADD_SECTIONS (state, sections) {
    state.sections= sections
  },
  ADD_SECTION (state, section) {
    state.sectionlist= section
  }
}

export default new Vuex.Store({
  strict: debug,
  state,
  mutations,
  plugins
})