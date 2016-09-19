<template lang='jade'>
	div.head
		h1
			em
			a(v-link="{ path: '/' }") 知乎日报
			span(@click="type = type === 'topic' ? '' : 'topic'")  主题日报
			span(@click="type = type === 'section' ? '' : 'section'")  专栏总览
		topics(:list="list", :type.sync="type", v-show="type", transition="fade")
</template>
<script>
	import topics from './topics';

	export default {
		components: {topics},
		data() {
			return {
				type: ''
			}
		},
		vuex: {
		  getters: {
		    topics: state => state.topics,
		    sections: state => state.sections
		  }
		},
		computed: {
			list() {
				return this.type ? (this.type === 'topic' ? this.topics : this.sections) : [];
			}
		}
	}
</script>