import { STORAGE_NEWS_KEY, STORAGE_TOPICS_KEY, STORAGE_POSTS_KEY } from './store'
import createLogger from './logger'

const localStoragePlugin = store => {
  store.subscribe((mutation, { news }) => {
    localStorage.setItem(STORAGE_NEWS_KEY, JSON.stringify(news))
  })
  store.subscribe((mutation, { topics }) => {
    localStorage.setItem(STORAGE_TOPICS_KEY, JSON.stringify(topics))
  })
  store.subscribe((mutation, { posts }) => {
    localStorage.setItem(STORAGE_POSTS_KEY, JSON.stringify(posts))
  })
}

export default process.env.NODE_ENV !== 'production'
  ? [createLogger(), localStoragePlugin]
  : [localStoragePlugin]