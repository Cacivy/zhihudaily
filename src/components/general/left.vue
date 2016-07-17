<template lang="jade">
div.left
	div.agree
		button.up(itle="赞同")
			i.icon
			span.count {{ popularity }}
			span.sr-only
</template>

<script>
	export default {
		props: {
			popularity: {
				required: true
			}
		}
	}
</script>

<style lang="scss">
.left{
	position: fixed;
	left: 50%;
	top: 20%;
	margin-left: -360px;

	.agree {
		.icon {
			display: block;
			width: 0;
			height: 0;
			border: 6px solid transparent;
			border-bottom-color: #698ebf;
			margin: 0 auto;
		}
		.up {
			display: block;
			color: #698ebf;
			height: 45px;
			line-height: 24px;
			width: 38px;
			border-radius: 3px;
			border: 0;
			cursor: pointer;
			background: #eff6fa;
			font-size: 12px;
			text-align: center;
			position: relative;
			// padding-top: 18px;
		 //    height: 44px;
		 //    margin: 5px 0 0 0;

		 &:hover {
		 	background: #698ebf;
	 	    color: #fff;
	 	    .icon {
	 	    	border-bottom-color: #fff;
	 	    }
		 }
		}
		.sr-only {
			position: absolute;
			width: 1px;
			height: 1px;
			margin: -1px;
			padding: 0;
			overflow: hidden;
			clip: rect(0,0,0,0);
			border: 0;
		}
	}
}
	
</style>