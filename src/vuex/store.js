import Vue from 'vue'
import Vuex from 'vuex'
import plugins from './plugins'
import * as getters from './getters'
import * as actions from './action'

Vue.use(Vuex)

var debug= process.env.NODE_ENV !== 'production'

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
  sectionlist: {},
  loading: false,
  index: 0
}

const mutations = {
  ADD_NEWS (state, news) {
    state.news.push(news)
  },
  ADD_INDEX (state) {
    state.index++;
  },
  UPDATE_NEWS (state, news) {
    if(state.news.length) {
      // 判断是否是当日日期
      if(state.news[0].date !== news.date) {
        state.news.unshift(news);
      } else {

        if(state.news[0].stories.length !== news.stories.length) {
          // 如果不存在则添加
          news.stories.forEach(x => {
            if(!state.news[0].stories.some(t => {return t.id === x.id})) {
              state.news[0].stories.splice(0, 0, x);
            }
          })
        }
        // 顶部文章
        news.top_stories.forEach(x => {
          if(!state.news[0].top_stories.some(t => {return t.id === x.id})) {
            state.news[0].top_stories.pop();
            state.news[0].top_stories.unshift(x);
          }
        })
      }
    }else {
      state.news.push(news)
    }
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
  },
  LOADING (state, loadstate) {
    state.loading = loadstate
  }
}

export default new Vuex.Store({
  strict: debug,
  getters,
  state,
  actions,
  mutations,
  plugins
})