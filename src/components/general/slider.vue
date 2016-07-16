<template>
	<div class="swiper-container">
	    <div class="swiper-wrapper" >
	        <div class="swiper-slide" v-for="item in list">
	        	<img :src="item.image | zhihuimg">
	        	<p v-link="{ path: item.url}"> {{item.title}} </p>
	        </div>
	    </div>
	    <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import '../../../node_modules/swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'
export default {
	props: {
		list: []
	},
	data() {
		return {
			
		}
	},
	computed: {

	},
	ready() {
		var mySwiper = new Swiper ('.swiper-container', {
		  direction: 'horizontal',//vertical
		  loop: true,
		  autoplay: 2000,
		  pagination: '.swiper-pagination',
		})        
	}
}
</script>
	
<style lang="scss" scope>
.swiper-container {
    width: 640px;
    height: 640px;
}  

.swiper-slide {
	position: relative;

	p {
		width: 70%;
		word-wrap: break-word;
		position: absolute;
		text-align: center;
		bottom: 10px;
		left: 15%;
		color: #fff;
		cursor: pointer;
	}
}

</style>