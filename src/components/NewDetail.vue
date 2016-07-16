<template>
  <div>
    <div class="post">
     <img class="postimage" :src="post.image | zhihuimg">
     {{{ post.body  | zhihuimg | zhihulink }}}
     <loading v-if="!post.body" :mask="false"></loading>
   </div>
   <left v-if="post.body" :popularity="post.popularity"></left>
 </div>
</template>

<script>
  import api from '../api/index'
  import { getPost } from '../vuex/action'
  import store from '../vuex/store'
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
    store: store,
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