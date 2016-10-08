<template lang="jade">
router-link(:to="'new/' + item.id")
	div.new
		img(v-if="item.images",v-lazy="zhihuimg(item.images[0])")
		em(v-if="item.multipic") 多图
		em(v-if="item.display_date") {{item.display_date}}
		p {{ item.title }}
</template>
<script>
	import {zhihuimg} from '../../utils/filter'
	export default {
		props: { item: Object },
		methods:{
			zhihuimg
		}
	}
</script>