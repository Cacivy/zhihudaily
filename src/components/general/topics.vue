<template lang='jade'>
	div.topic
		ul
			li(v-for="item in list", v-link="{ path: `/${type}/`+ item.id }", :title="item.name", @click="link(item.id)") 
				img(v-lazy="item.thumbnail | zhihuimg", width="40", height ="40")
				{{ item.name }}
</template>
<script>
	export default {
		props: ['list', 'type'],
		methods: {
			link(id) {
				this.$router.go({path: `/${this.type}/`+ id});
				this.type = '';
			}
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
		font-size: 16px;
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