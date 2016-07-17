<template lang="jade">
div.float
	div.gotop#gotop(title="返回顶部")
		div.arrow
		div.stick
	div.gohome(v-if="$route.path!=='/list'",title="返回主页",onclick="javascript:history.back()")
		div.arrow
		div.stick
	div.gotopic(title="主题日报",v-else)
		div.container
			hr
			hr
			hr
</template>
<script>
	export default {
		ready() {
			var backTop = function (btnId){
				var btn = document.getElementById(btnId);
				var d = document.documentElement;
				var b = document.body;
				window.addEventListener('scroll',btnDisplay)
				btn.onclick = function (){
					btn.style.display = "none";
					//window.onscroll = null;
					this.timer = setInterval(function(){
						d.scrollTop -= Math.ceil((d.scrollTop+b.scrollTop)*0.2);
						b.scrollTop -= Math.ceil((d.scrollTop+b.scrollTop)*0.2);
						if((d.scrollTop + b.scrollTop) == 0)
							clearInterval(btn.timer);//window.onscroll = btnDisplay
					},10);
				};
				function btnDisplay(){
					btn.style.display=(d.scrollTop+b.scrollTop>200)?'block':"none";
				}
			};
			backTop('gotop');//返回顶部调用
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
	}
</style>