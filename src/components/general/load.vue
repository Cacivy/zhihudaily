<template>
	<div class="load" :class="{ 'load-width': load }" >
		
	</div>
</template>
<script>
	export default {
		props: [ 'load' ]
	}
</script>
<style lang='scss' scoped>
	.load {
		height: 4px;
		max-width: 640px;
		width: 0;
		background: #008BED;
		position: fixed;
		top: 0;
		transition: width 2s ease;
	}

	.load-width {
		width: 100%;
	}

	@-webkit-keyframes loading {
	  form { width: 0; }
	  to { width: 100%; }
	}
</style>