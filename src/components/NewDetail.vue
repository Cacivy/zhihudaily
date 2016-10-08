<template lang="jade">
div
  div.post
    img.postimage(:src="zhihuimg(post.image)")
    div(v-html="zhihulink(zhihuimg(post.body))")
  left(v-if="post.body",:popularity="post.popularity")
</template>

<script>
  import api from '../api/index'
  import loading from './general/loading'
  import left from './general/left'
  import {zhihuimg, zhihulink} from '../utils/filter'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    components:{
      loading, left
    },
    computed: {
      ...mapGetters([
        'posts'
      ]),
      post() {
        let id= this.$route.params.id
        let post= this.posts.find(p=>p.id == id) || {}
        return post
      }
    },
    methods:{
      ...mapActions([
        'getPost'
      ]),
      zhihuimg, zhihulink, 
    },
    mounted() {
        scroll(0, 0)
        let id= this.$route.params.id
        
        if(!this.post.body){
          this.getPost(id)
        }
    }
  }
</script>

<style>
  .post {
    position: relative;
  }
</style>