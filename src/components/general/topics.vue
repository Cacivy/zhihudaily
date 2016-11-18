<template lang="jade">
div.topic
	ul
		li(v-for="item in list", :title="item.name", @click="link(item.id)")
			img(v-lazy="zhihuimg(item.thumbnail)", width="40", height ="40")
			{{ item.name }}
</template>
<script>
	import {zhihuimg} from '../../utils/filter'
	export default {
		props: ['list', 'type'],
		methods: {
			link(id) {
				this.$router.push(`/${this.type}/${id}`);
				this.$parent.type = '';
			},
			zhihuimg
		}
	}
</script>
<style lang="scss" scoped>
$color-bg: #fff;
$color-text: #AAA;
	.topic {
		position: absolute;
		right: 0px;
		top: 80px;
		background: $color-bg;
		color: $color-text;
		z-index: 1001;
		font-size: 1.6rem;
		padding: 2px;

		ul {
			margin: 0;
			padding: 0;

			li {
				padding: 3px;
				line-height: 20px;
				// height: 60px;
				// width: 70px;
				cursor: pointer;

				&:hover {
					background: #eee;
				}
			}
		}
	}
</style>