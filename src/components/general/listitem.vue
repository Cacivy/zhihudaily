<template lang="jade">
div.new(v-link="{ path: '/new/'+ new.id }")
	img(v-if="new.images && new.images.length",src="../../assets/loading.gif",:data="new.images[0] | zhihuimg")
	em(v-if="new.multipic") 多图
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
