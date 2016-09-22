<template lang="jade">
    div.app
        v-header
        load(v-if="loading")
        router-view(keep-alive,transition="fade")
        float
 </template>

<script>
    import store from './vuex/store'
    import float from 'components/general/float'
    import load from 'components/general/loading'
    import vHeader from 'components/general/header'

    export default {
        store,
        vuex: {
            getters: {
                loading: state => state.loading
            }
        },
        components: {
            float,
            vHeader,
            load
        }
    }
</script>