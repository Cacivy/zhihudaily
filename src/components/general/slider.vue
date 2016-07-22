<template lang="jade">
div.swiper-container
	div.swiper-wrapper
		div.swiper-slide(v-for="(index,item) in list")
			img(v-if="index>1",v-lazy="item.image | zhihuimg")
			img(v-else,:src="item.image | zhihuimg")
			p(v-link="{ path: item.url}") {{item.title}}
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