<template>
  <div class="news" v-for="(index,item) in news">
    <h3 v-if="index">{{item.date | moment}}</h3>
    <!-- 顶部图片 -->
    <slider v-if="!index" :list="imglist"></slider>
    <!-- 列表子组件 -->
    <listitem v-for="new in item.stories" :new="new"></listitem>
  </div>
  <!-- 加载 -->
  <div class="more" @click="getNews" v-if="news.length">
    <loading :mask="false" v-if="loading"></loading>
    <span v-else>加载更多</span>
  </div>
 </template>

<script>
import api from '../api/index'
import moment from 'moment'
import listitem from './general/listitem'
import slider from './general/slider'
import loading from './general/loading'

export default {
  components: { listitem,slider,loading },
  data() {
    return {
      news: [],
      topics: [],
      loading: false
    }
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
    getNews() {
      this.loading= true
      let date= this.news[this.news.length-1].date
      //let date= moment(lastdate,'YYYYMMDD').add(-1, 'days').format('YYYYMMDD')
      api.getNewsByDate(date).then(res => {
        let news= JSON.parse(res.data)
        this.news.push(news)
        this.loading= false
      })
    }
  },
  watch: {
    news(val){
      var imgs = document.getElementsByTagName('img');
      // 获取视口高度与滚动条的偏移量
      function lazyload(){
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        var viewportSize = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        for(var i=0; i<imgs.length; i++) {
          var x =scrollTop+viewportSize-imgs[i].offsetTop
          var data=imgs[i].getAttribute('data')
          if(x>0 && data){
            imgs[i].src = data;
            imgs[i].setAttribute('data','')
          }
        }
      }
      setInterval(lazyload,1000)
    }
  },
  ready() {
    //获取当日热闻
    const cacheName= 'news'
    let cacheNews= localStorage.getItem(cacheName)
    if(cacheNews){
      let news= JSON.parse(cacheNews)
      if(news.date === moment().format('YYYYMMDD')){
        this.news.push(news)
      }
    }
    //更新缓存
    api.getNews().then(res => {
      if(res.ok){
        let news= JSON.parse(res.data)
        if(!this.news.length){
          this.news.push(news)
        }
        
        localStorage.setItem(cacheName,res.data)
      }else{
        console.error('新闻获取失败'+res.statusText)
      }
    })

    //主题日报缓存
    const cacheTopicName= 'topics'
    let cacheTopics= localStorage.getItem(cacheTopicName)
    if(cacheTopics){
      this.topics= JSON.parse(cacheTopics)
    }else{
      api.getTopics().then(res => {
        if(res.ok){
          let topics= JSON.parse(res.data)
          this.topics= topics.others
          localStorage.setItem(cacheTopicName,JSON.stringify(this.topics))
        }else {
          console.error('主题日报获取失败'+res.statusText)
        }
      })
    }
  }
}
</script>

<style lang='scss'>

</style>
