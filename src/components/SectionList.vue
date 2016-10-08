<template lang='jade'>
div
	div.news(v-if="sectionlist.stories",v-for="item in sectionlist")
		listitem(v-for="newItem in sectionlist.stories",track-by="id",:item="newItem")
	<!-- loading(v-else) -->
</template>
<script>
import listitem from './general/listitem'
import loading from './general/loading'
import { mapGetters, mapActions } from 'vuex'
export default {
	components: { listitem, loading },
	computed: {
		...mapGetters(['sectionlist'])
	},
	methods: {
		...mapActions(['getSection'])
	},
	mounted() {
	  	scroll(0, 0)
	  	let sectionid= this.$route.params.id
	    this.getSection(sectionid)
	}
}
</script>

<style lang='scss'>
	
</style>