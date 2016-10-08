<template lang="jade">
    div.app
        v-header
        load(v-if="loading")
        router-view(keep-alive,transition="fade")
        float
 </template>

<script>
    import float from 'components/general/float'
    import load from 'components/general/loading'
    import vHeader from 'components/general/header'
    import { mapGetters } from 'vuex'
    
    export default {
        vuex: {
            getters: {
                loading: state => state.loading
            }
        },
        computed: {
          ...mapGetters([
            'loading'
          ])
        },
        components: {
            float,
            vHeader,
            load
        }
    }
</script>