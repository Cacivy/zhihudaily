<template lang="jade">
div.head
	h1
		em
		router-link(tag="a", to="/") 知乎日报
		span(@click="type = type === 'topic' ? '' : 'topic'")  主题日报
		span(@click="type = type === 'section' ? '' : 'section'")  专栏总览
	topics(:list="list", :type="type", v-show="type", transition="fade")
</template>
<script>
	import topics from './topics';
	import { mapGetters } from 'vuex'

	export default {
		components: {topics},
		data() {
			return {
				type: ''
			}
		},
		computed: {
			...mapGetters(['topics', 'sections']),
			list() {
				return this.type ? (this.type === 'topic' ? this.topics : this.sections) : [];
			}
		}
	}
</script>