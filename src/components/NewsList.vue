<template lang="jade">
  div
    div.news(v-for="(index,item) in showlist")
      h3(v-if="index") {{item.date | moment}}
      //- 顶部图片
      slider(v-if="!index",:list="imglist")
      //- 列表子组件
      listitem(v-for="new in item.stories",track-by="id",:new="new")
    //- 加载更多
    more(:show="news.length",:loading="loading",:fun="getLastNews")
 </template>

<script>
import api from '../api/index'
import moment from 'moment'
import { getNews, getTopics, ADD_NEWSCounter, getSections, addIndex } from '../vuex/action'
import listitem from './general/listitem'
import slider from './general/slider'
import more from './general/more'

export default {
  components: { listitem, slider, more },
  data() {
    return {
      loading: false
    }
  },
  vuex: {
    getters: {
      news: state => state.news,
      topics: state => state.topics,
      sections: state => state.sections,
      index: state => state.index
    },
    actions: {
      getNews, getTopics, ADD_NEWSCounter, getSections, addIndex
    }
  },
  ready() {
    if(!this.news.length) {
      this.getNews()
    } else {
      // setTimeout(() => {
        this.getNews()
      // }, 1000); 
    }
    
    //数据缓存
    if(!this.topics.length){
      this.getTopics()
    }
    if(!this.sections.length){
      this.getSections()
    }
  },
  route: {
    data(transition) {
      
    },
    // 這邊就是等待數據取得後才渲染組件關鍵，開啟 true 的話就會等到上面 data 處理完才會開始渲染
    waitForData: false
  },
  computed: {
    showlist() {
      let arr = [];
      if (this.news.length) {
        arr = this.news.filter((x, index) => {
          return index <= this.index;
        })
      }
      return arr
    },
    imglist() {
      let arr= []
      if(this.news.length && this.news[0].top_stories){
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
      this.addIndex();
      if (this.news.length - 1 > this.index) {
        this.$nextTick(() => {
          this.loading = false
        })
        return false
      }
      let date= this.news[this.news.length-1].date
      //let date= moment(lastdate,'YYYYMMDD').add(-1, 'days').format('YYYYMMDD')
      api.getNewsByDate(date).then(res => {
        let news= JSON.parse(res.data)
        //this.news.push(news)
        this.ADD_NEWSCounter(news)
        this.$nextTick(() => {
          this.loading = false
        })
      })
    }
  }
}
</script>

<style lang='scss'>

</style>
