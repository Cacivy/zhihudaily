<template lang="jade">
div.new(v-link="{ path: '/new/'+ new.id }")
	img(v-if="new.images && new.images.length",v-lazy="new.images[0] | zhihuimg")
	em(v-if="new.multipic") 多图
	em(v-if="new.display_date") {{new.display_date}}
	p {{ new.title }}
</template>

<script>
	export default {
		props: {
			new: {
				type: Object,
				required: true
			}
		}
	}
</script>
