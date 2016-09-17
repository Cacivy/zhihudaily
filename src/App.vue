<template lang="jade">
    div.app
        div.head
            h1
                em
                a(v-link="{ path: '/' }") 知乎日报
        load(v-if="loading")
        router-view(keep-alive,transition="fade")
        float
 </template>

<script>
import store from './vuex/store'
import float from 'components/general/float'
import load from 'components/general/loading'

export default {
    store,
	ready() {
        //默认list页
		// this.$router.go({path: '/list'})
	},
    vuex: {
      getters: {
        loading: state => state.loading,
        news: state => state.news
      }
    },
    computed: {
        loadingok() {
            if(this.$route.path !== '/') {
                return true;
            }else if(!this.news.length) {
                return true;
            }
            return false;
        }
    },
    components: {
        float, load
    }
}
</script>
