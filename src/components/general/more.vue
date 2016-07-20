<template lang='jade'>
	//- 加载
	div.more(@click="fun")
	  loading(:mask="false",v-if="loading")
	  span(v-else) 加载更多
</template>
<script>
import loading from '../general/loading'
	export default {
		components: { loading },
		props: {
			loading: {
				type: Boolean
			},
			fun: {
				type: Function
			},
			show: {
				
			}
		}
	}
</script>

<style lang='scss'>
$color-light: #F9F9F9;
	.more {
		height: 30px;
		line-height: 30px;
		text-align: center;
		margin: 20px;
		background-color: $color-light;
		border-radius: 5px;
		cursor: pointer;
		position: relative;
	}
</style>