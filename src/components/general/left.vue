<template>
	<div class="left">
		<div class="agree">
			<button class="up" aria-pressed="false" title="赞同">
			<i class="icon vote-arrow"></i>
			<span class="count">{{ popularity }}</span>
			<span class="label sr-only">赞同</span>
			</button>
		</div>
	</div>
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
		.up {
			display: block;
			color: #698ebf;
			height: 24px;
			line-height: 24px;
			width: 38px;
			border-radius: 3px;
			border: 0;
			cursor: pointer;
			background: #eff6fa;
			font-weight: 700;
			font-weight: 500;
			text-align: center;
			position: relative;
			// padding-top: 18px;
		 //    height: 44px;
		 //    margin: 5px 0 0 0;

		 &:hover {
		 	background: #698ebf;
	 	    color: #fff;
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