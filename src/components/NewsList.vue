<template lang="jade">
  div
    div.news(v-for="(item, index) in showlist")
      h3(v-if="index") {{item.date | moment}}
      //- 顶部图片
      slider(v-if="!index",:list="imglist")
      //- 列表子组件
      listitem(v-for="newItem in item.stories",track-by="id",:item="newItem")
    //- 加载更多
    more(:show="news.length",:loading="loading",:fun="getLastNews")
 </template>

<script>
import api from '../api/index'
import listitem from './general/listitem'
import slider from './general/slider'
import more from './general/more'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: { listitem, slider, more },
  data() {
    return {
      loading: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.getNews()
      
      //数据缓存
      if(!this.topics.length){
        this.getTopics()
      }
      if(!this.sections.length){
        this.getSections()
      }
    })
  },
  computed: {
    ...mapGetters([
      'news', 'topics', 'sections', 'index'
    ]),
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
    ...mapActions([
      'getNews', 'getTopics', 'ADD_NEWSCounter', 'getSections', 'addIndex'
    ]),
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
