<template lang='jade'>
	div.topic
		ul
			li(v-for="item in list", v-link="{ path: `/${type}/`+ item.id }", :title="item.name", @click="link(item.id)") {{ item.name }}
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
$color-text: #000;
	.topic {
		position: absolute;
		right: 0px;
		top: 65px;
		background: $color-bg;
		color: $color-text;
		z-index: 1001;
		font-size: 16px;

		ul {
			margin: 0;
			padding: 0;

			li {
				padding: 3px;
				line-height: 20px;
				// height: 60px;
				// width: 70px;
				cursor: pointer;
				// overflow: hidden;

				&:hover {
					background: #eee;
				}
			}
		}
	}
</style>