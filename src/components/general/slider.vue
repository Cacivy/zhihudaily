<template lang="jade">
div.swiper-container
	div.swiper-wrapper
		div.swiper-slide(v-for="(index,item) in list", v-link="{ path: item.url}")
			img(v-if="index>1",:src="item.image | zhihuimg")
			img(v-else,:src="item.image | zhihuimg")
			p() {{item.title}}
	div.swiper-pagination
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
    max-width: 640px;
    height: 640px;
}  

.swiper-slide {
	position: relative;
	cursor: pointer;

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