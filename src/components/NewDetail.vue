<template lang="jade">
div
  div.post
    img.postimage(:src="post.image | zhihuimg")
    {{{ post.body  | zhihuimg | zhihulink }}}
    loading(v-if="!post.body",:mask="false")
  left(v-if="post.body",:popularity="post.popularity")
</template>

<script>
  import api from '../api/index'
  import { getPost } from '../vuex/action'
  import loading from './general/loading'
  import left from './general/left'
  export default {
    components:{
      loading, left
    },
    data() {
      return {

      }
    },
    computed: {
      post() {
        let id= this.$route.params.id
        let post= this.posts.find(p=>p.id == id) || {}
        return post
      }
    },
    vuex: {
      getters: {
        posts: state => state.posts
      },
      actions: {
        getPost
      }
    },
    route: {
      data(transition) {
        scroll(0, 0)
        let id= this.$route.params.id
        
        if(!this.post.body){
          this.getPost(id)
        }
      },
      // 這邊就是等待數據取得後才渲染組件關鍵，開啟 true 的話就會等到上面 data 處理完才會開始渲染
      waitForData: false
    }
  }
</script>

<style>
  .post {
    position: relative;
  }
</style>