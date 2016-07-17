<template lang="jade">
  div
    div.news(v-for="(index,item) in news")
      h3(v-if="index") {{item.date | moment}}
      //- 顶部图片
      slider(v-if="!index",:list="imglist")
      //- 列表子组件
      listitem(v-for="new in item.stories",track-by="id",:new="new")
    //- 加载
    div.more(@click="getLastNews",v-if="news.length")
      loading(:mask="false",v-if="loading")
      span(v-else) 加载更多
 </template>

<script>
import api from '../api/index'
import moment from 'moment'
import { getNews,getTopics,ADD_NEWSCounter } from '../vuex/action'
import store from '../vuex/store'
import lazyload from '../utils/lazyload'
import listitem from './general/listitem'
import slider from './general/slider'
import loading from './general/loading'

export default {
  components: { listitem,slider,loading },
  data() {
    return {
      loading: false
    }
  },
  store: store,
  vuex: {
    getters: {
      news: state => state.news,
      topics: state => state.topics
    },
    actions: {
      getNews, getTopics, ADD_NEWSCounter
    }
  },
  route: {
    data(transition) {
      this.getNews()
      if(!this.topics.length){
        this.getTopics()
      }
    },
    // 這邊就是等待數據取得後才渲染組件關鍵，開啟 true 的話就會等到上面 data 處理完才會開始渲染
    waitForData: false
  },
  computed: {
    imglist() {
      let arr= []
      if(this.news.length){
         let top_stories= this.news[0].top_stories
         top_stories.forEach(item => {
          arr.push({
            image: item.image,
            title: item.title,
            url: '/new/'+item.id
          })
         })
      }
      return arr
    }
  },
  methods: {
    getLastNews() {
      this.loading= true
      let date= this.news[this.news.length-1].date
      //let date= moment(lastdate,'YYYYMMDD').add(-1, 'days').format('YYYYMMDD')
      api.getNewsByDate(date).then(res => {
        let news= JSON.parse(res.data)
        //this.news.push(news)
        this.ADD_NEWSCounter(news)
        this.loading= false
      })
    }
  },
  ready() {
    window.addEventListener('scroll',lazyload)
  },
  watch: {
    news(){
      lazyload()
    }
  }
}
</script>

<style lang='scss'>

</style>
