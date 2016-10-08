<template lang="jade">
div.swiper-container
	div.swiper-wrapper
		div.swiper-slide(v-for="(item, index) in list")
			router-link(:to="item.url")
				img(:src="zhihuimg(item.image)")
				p() {{item.title}}
	div.swiper-pagination
</template>
<script>
import '../../../node_modules/swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'
import {zhihuimg} from '../../utils/filter'
export default {
	props: {
		list: Array
	},
	mounted() {
	  this.$nextTick(() => {
	  	var mySwiper = new Swiper('.swiper-container', {
		  direction: 'horizontal',//vertical
		  loop: true,
		  autoplay: 2000,
		  pagination: '.swiper-pagination',
		})
	  })
	},
	methods:{
		zhihuimg
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