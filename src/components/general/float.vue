<template lang="jade">
div.float
	div.gotop#gotop(title="返回顶部")
		div.arrow
		div.stick
	router-link(to="/")
		div.gohome(v-if="$route.path!=='/'",title="返回主页")
			div.arrow
			div.stick
	//- listshow(:list="topics",path="topic",title="主题日报",:index="0")
	//- listshow(:list="sections",path="section",title="栏目总览",:index="1")
</template>
<script>
import backTop from '../../utils/backtop'
import listshow from './listshow'
import { mapGetters } from 'vuex'
export default {
	components: { listshow },
	computed: {
		...mapGetters(['topics', 'sections'])
	},
	mounted() {
	  this.$nextTick(() => {
	  	backTop('gotop');//返回顶部调用
	  })
	}
}
</script>
<style lang='scss' scope>
	.float {
		position: fixed;
		left: 50%;
		top: 80%;
		margin-left: 400px;
		
		$color-light: #F9F9F9;
		$color-topicon: #AAA;
		$color-blue: #008BED;
		$width-top: 38px;

		@mixin float-div {
			width: $width-top;
			height: $width-top;
			background-color: $color-light;
			border-radius: 3px;
			position: relative;
			cursor: pointer;
			margin: 5px 0;
		}

		@mixin arrow($width,$top,$left) {
			border: $width solid transparent;
			border-bottom-color: $color-topicon;
			position: absolute;
			top: $top;
			left: $left;
		}

		.gotop {
			@include float-div;

			.arrow {
				@include arrow(9px,0,10px);
			}
			.stick {
				width: 9px;
				height: 15px;
				background-color: $color-topicon;
				position: absolute;
				top: 16px;
				left: 15px;
			}

			&:hover {
				opacity: .7;
			}
		}

		.gohome {
			@include float-div;

			.arrow {
				@include arrow(12px,-7px,8px);
			}

			.stick {
				width: 4px;
				height: 12px;
				border-left: 7px solid $color-topicon;
				border-right: 7px solid $color-topicon;
				/* background-color: $color-topicon; */
				position: absolute;
				top: 16px;
				left: 11px;
			}

			&:hover {
				opacity: .7;
			}
		}

	}
</style>