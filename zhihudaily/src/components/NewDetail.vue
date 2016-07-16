<template>
  <div class="detail">
     <img class="postimage" :src="detail.image | zhihuimg">
     {{{ detail.body  | zhihuimg | zhihulink }}}
  </div>
  <loading v-if="loading" :mask="true"></loading>
</template>

<script>
import api from '../api/index'
import '../css/zhihu.css'
import loading from './general/loading'
export default {
  components:{
    loading
  },
  data() {
    return {
      detail: {},
      loading: false
    }
  },
  ready() {
    let id= this.$route.params.id
    this.loading=true
    api.getNewsById(id).then(res => {
      this.detail= JSON.parse(res.data)
      this.loading= false
    })
  }
}
</script>

<style>
  .detail {
    position: relative;
  }
</style>