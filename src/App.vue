<template lang="jade">
    div.app
        div.head
            h1
                em
                a(v-link="{ path: '/list' }") 知乎日报
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
        loading: state => state.loading
      }
    },
    components: {
        float, load
    }
}
</script>

<style lang='scss'>

</style>
