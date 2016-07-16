<template>
    <div class="app">
    	<div class="head">
    		<h1>
    			<em></em>
    			<a v-link="{ path: '/list' }">知乎日报</a>
    		</h1>
    	</div>
    
      <router-view keep-alive transition="fade" ></router-view>
      <float></float>
    </div>
 </template>

<script>
import float from 'components/general/float'

export default {
	ready() {
        //默认list页
		this.$router.go({path: '/list'})
	},
    components: {
        float
    }
}
</script>

<style lang='scss'>

</style>
