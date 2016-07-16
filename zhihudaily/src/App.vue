<template>
    <div id="app">
    	<div class="head">
    		<h1>
    			<em></em>
    			<a v-link="{ path: '/list' }">知乎日报</a>
    		</h1>
    	</div>
    
      <router-view></router-view>
      <float></float>
    </div>

 </template>

<script>
import './css/root.scss'
import float from './components/general/float'

export default {
	ready() {
		this.$router.go({path: '/list'})
	},
    components: {
        float
    }
}

</script>

<style lang='scss'>

</style>
