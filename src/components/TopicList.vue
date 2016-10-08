<template lang='jade'>
div
	div.topicimg
		img(:src="zhihuimg(topicPosts.image)")
		p {{topicPosts.description}}
	div.news
		listitem(v-if="topicPosts.stories",v-for="newItem in topicPosts.stories",track-by="id",:item="newItem")
	<!-- loading(v-if="!topicPosts.stories") -->
</template>
<script>
import listitem from './general/listitem'
import loading from './general/loading'
import { mapGetters, mapActions } from 'vuex'
import {zhihuimg} from '../utils/filter'
export default {
	components: { listitem, loading },
	computed: {
		...mapGetters(['topicPosts'])
	},
	methods: {
		...mapActions(['getTopicPosts']),
		zhihuimg
	},
	mounted() {
	  	scroll(0, 0)
	  	let topicid= this.$route.params.id
	    this.getTopicPosts(topicid)
	}
}
</script>

<style lang='scss'>
	.topicimg {
		position: relative;

		p {
			word-wrap: break-word;
			position: absolute;
			text-align: center;
			bottom: 10px;
			left: 5%;
			color: #fff;
			cursor: pointer;
		}
	}
</style>