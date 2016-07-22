<template lang='jade'>
div
	div.news(v-if="sectionlist.stories",v-for="item in sectionlist")
		listitem(v-for="new in sectionlist.stories",track-by="id",:new="new")
	loading(v-else)
</template>
<script>
import { getSection } from '../vuex/action'
import listitem from './general/listitem'
import loading from './general/loading'
export default {
	components: { listitem, loading },
	vuex: {
	  getters: {
	    sectionlist: state => state.sectionlist
	  },
	  actions: {
	    getSection
	  }
	},
	route: {
	  data() {
	  	scroll(0, 0)
	  	let sectionid= this.$route.params.id
	    this.getSection(sectionid)
	  },
	  waitForData: false
	}
}
</script>

<style lang='scss'>
	
</style>