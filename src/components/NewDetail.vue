<template lang="jade">
div
  div.post
    img.postimage(:src="zhihuimg(post.image)")
    div(v-html="zhihulink(zhihuimg(post.body))")
    //- div.view-more(v-if="post.id")
    //-   a.cursor(href="javascript:void(0)", @click="comment") {{commentText}}
    //-     span.dadged ({{post.comments}})
    div.comments(v-show="showComments", v-show="post.body")
      div.comment(v-for="item in comments")
        img(:src="zhihuimg(item.avatar)")
        div.content
          span.author {{item.author}}
          span.time {{item.time | commentDate}}
          div {{item.content}}
  left(v-if="post.body", :popularity="post.popularity")
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
    data() {
      return {
        lComments: [],
        sComments: [],
        showComments: false
      }
    },
    computed: {
      ...mapGetters([
        'posts'
      ]),
      post() {
        let id= this.$route.params.id
        let post= this.posts.find(p=>p.id == id) || {}
        return post
      },
      comments() {
        let arr = []
        arr = arr.concat(this.lComments, this.sComments)
        arr.sort((a, b) => {
          return a.time > b.time
        })
        return arr
      },
      commentText() {
        let text = "查看评论"
        let count = parseInt(this.post.comments)
        if (count) {
          // if (this.showComments) {
          //   text = "收起"
          // }
        } else {
          text = "暂无评论"
        }
        return text
      }
    },
    methods:{
      ...mapActions([
        'getPost'
      ]),
      zhihuimg,
      zhihulink,
      comment() {
        // let count = parseInt(this.post.comments)
        this.showComments = !this.showComments
        if (!this.comments.length){
          let id= this.$route.params.id
          api.getLongComments(id).then(res => {
            return res.json()
          }).then(res => {
            this.lComments = res.comments
          })
          api.getShortComments(id).then(res => {
            return res.json()
          }).then(res => {
            this.sComments = res.comments
          })
        }
      }
    },
    beforeRouteEnter(to, from, next) {
      next((vm) => {
        scroll(0, 0)
        let id= vm.$route.params.id
        if(!vm.post.body){
          vm.getPost(id)
        }
        vm.comment()
      })
    }
  }
</script>

<style lang="scss">
  .post {
    position: relative;
  }
  .comments {

    .comment {
      border-bottom: 2px solid #eee;
      img {
        width: 48px;
        height: 48px;
        border-radius: 100%;
        margin: 0 10px;
        float: left;
      }
      .content {
        margin-left: 88px;
        .author {
          color: #444;
          font-weight: 700;
        }
        .time {
          font-size: 1.6rem;
          margin-left: 10px;
        }
      }
    }
  }
</style>