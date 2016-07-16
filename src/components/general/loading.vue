<template>
	  <div class="loading">
	    <div class="container">
	      <div></div>
	      <div></div>
	      <div></div>
	      <div></div>
	      <div></div>
	    </div>
	  </div>
	  <div v-if="mask" class="floating">
	  	
	  </div>
</template>
<script>
	export default {
		props: {
			mask: {
				type: Boolean,
				default: false
			}
		}
	}
</script>
<style lang="scss">
	.floating {
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		z-index: 10000;
		background: rgba(128, 128, 128, 0.6)
	}
	.loading {
	  width: 300px;
	  height: 100px;
	  z-index: 10001;

	  $width-div: 5px;
	  $width-border: 3px;
	  $height-div: 20px;
	  $animation-time: 1s;
	  .container {
	    width: ($width-div+$width-border)*5;
	    height: $height-div;
	    position: absolute;
	    left: 0;
	    right: 0;
	    bottom: 0;
	    top: 0;
	    margin: auto;


	    div {
	      height: $height-div;
	      width: $width-div;
	      float: left;
	      border-left: $width-border solid black;

	      -webkit-animation-name: load; /*动画名称*/
	      -webkit-animation-duration: $animation-time; /*动画持续时间*/
	      -webkit-animation-iteration-count: infinite; /*动画次数*/
	      -webkit-animation-timing-function: ease-in-out;
	    }

	    @for $i from 1 through 5 {
	      
	      div:nth-of-type(#{$i}) { 
	        -webkit-animation-delay: (0.5-$i*0.1)*-1s; /*延迟时间*/
	      }
	    }
	  }
	}


	@-webkit-keyframes load {
	  0%, 40%, 100% { -webkit-transform: scaleY(0.7) } 
	  20% { -webkit-transform: scaleY(1.3) }
	}
</style>