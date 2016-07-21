<template lang='jade'>
div
	div.topicimg
		img(:src="topicPosts.image | zhihuimg")
		p {{topicPosts.description}}
	div.news
		listitem(v-if="topicPosts.stories",v-for="new in topicPosts.stories",track-by="id",:new="new")
	loading(v-if="!topicPosts.stories")
</template>
<script>
import { getTopicPosts } from '../vuex/action'
import listitem from './general/listitem'
import loading from './general/loading'
export default {
	components: { listitem, loading },
	vuex: {
	  getters: {
	    topicPosts: state => state.topicPosts
	  },
	  actions: {
	    getTopicPosts
	  }
	},
	route: {
	  data() {
	  	scroll(0, 0)
	  	let topicid= this.$route.params.id
	    this.getTopicPosts(topicid)
	  },
	  waitForData: false
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