<template lang="jade">
div.float
	div.gotop#gotop(title="返回顶部")
		div.arrow
		div.stick
	div.gohome(v-if="$route.path!=='/list'",title="返回主页",v-link="{ path: '/list'}")
		div.arrow
		div.stick
	div.gotopic(title="主题日报",@click="toggle(0)")
		div.container
			hr
			hr
			hr
	ul.topics.animated
		li(v-for="item in topics")
			a(v-link="{ path: '/topic/'+ item.id }",@click="toggle(0)") {{ item.name }}
			dl
				dt
					img(src="../../assets/loading.gif",:data="item.thumbnail | zhihuimg")
				dd
					span {{ item.description }}
</template>
<script>
import store from '../../vuex/store'
import backTop from '../../utils/backtop'
export default {
	ready() {
		backTop('gotop');//返回顶部调用
	},
	store: store,
	vuex: {
	  getters: {
	    topics: state => state.topics,
	    sections: state => state.sections
	  }
	},
	methods: {
		toggle(type) {
			let classname= type? '': 'topics'
			let state= document.getElementsByClassName(classname)[0]
			state.style.display= 'block'
			if(state.classList.contains('flipInY')){
				state.classList.remove('flipInY')
				state.classList.add('flipOutY')
			}else{
				state.classList.remove('flipOutY')
				state.classList.add('flipInY')
			}
		}
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

		.gotopic {
			@include float-div;

			&:hover .container>hr{
				background: $color-blue;
				opacity: .7;
			}

			.container {
				width: $width-top - 10px;
				height: 26px;
				position: absolute;
				left: 0;
				right: 0;
				bottom: 0;
				top: 0;
				margin: auto;

				hr {
					display: block;
					height: 2px;
					width: $width-top - 10px;
					background: black;
					margin-top:5px;
				}
			}
		}

		.topics {
			position: absolute;
			left: $width-top + 7px;
			bottom: 35px;
			width: 100px;
			padding: 5px;
			margin: 0;
			color: $color-topicon;
			display: none;
			background-color: $color-light;
			text-align: center;
			border-radius: 3px;

			li {
				width: auto;
				height: 24px;
				cursor: pointer;

				&:hover {
					color: $color-blue;

					dl {
						display: block;
						/* color: $color-blue; */
					}
				}

				dl {
					display: none;
					margin: -50px 111px 0;
					height: auto;
					width: 100px;
					padding: 5px;
					background-color: $color-light;
					color: $color-topicon;
					border-radius: 3px;

					dt {
						
						img {
							width: 100px;
							height: 100px;
							border-radius: 3px;
						}
					}

					dd {
						width: 100px;
						margin: 0;
						text-align: left;
					}
				}
			}
		}
	}
</style>