<template lang="jade">
div
	div.gotopics(:title="title",@click="toggle()")
		div.container
			hr
			hr
			hr
	ul.topics.animated
		li(v-for="item in list")
			rout-link(tag="a", :to="`/${path}/${item.id}`",@click="toggle(0)",:title="item.name") {{ item.name }}
			dl
				dt
					img(v-lazy="item.thumbnail | zhihuimg")
				dd
					span {{ item.description }}
</template>

<script>
	export default {
		props: {
			list: {
				type: Array
			},
			path: {
				type: String
			},
			title: {
				type: String
			},
			index: {
				type: Number
			}
		},
		data() {
			return {
				animateclass: ''
			}
		},
		methods: {
			toggle() {
				let state= document.getElementsByClassName('topics')[this.index]
				let gotopics= document.getElementsByClassName('gotopics')[this.index]
				state.style.display= 'block'
				if(state.classList.contains('flipInY')){
					state.classList.remove('flipInY')
					state.classList.add('flipOutY')
					gotopics.classList.remove('checked')
				}else{
					state.classList.remove('flipOutY')
					state.classList.add('flipInY')
					gotopics.classList.add('checked')
				}
			}
		}
	}
</script>

<style lang='scss'>

	$color-light: #F9F9F9;
	$color-topicon: #AAA;
	$color-blue: #008BED;
	$width-top: 38px;

	@mixin float-div {
		width: $width-top;
		height: $width-top;
		background-color: $color-light;
		border-radius: 3px;
		position: relative;
		cursor: pointer;
		margin: 5px 0;
	}
	.checked {
		.container>hr{
			background: $color-blue !important;
		}
	}
	.gotopics {
		@include float-div;

		&:hover .container>hr{
			background: $color-blue;
			opacity: .7;
		}

		.container {
			width: $width-top - 10px;
			height: 26px;
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			top: 0;
			margin: auto;

			hr {
				display: block;
				height: 2px;
				width: $width-top - 10px;
				background: black;
				margin-top:5px;
			}
		}
	}

	.topics {
		position: absolute;
		left: $width-top + 7px;
		bottom: 35px;
		width: 100px;
		padding: 5px;
		margin: 0;
		color: $color-topicon;
		display: none;
		background-color: $color-light;
		text-align: center;
		border-radius: 3px;

		li {
			width: auto;
			height: 20px;
			cursor: pointer;

			a{
				display: inline-block;
				height: 20px;
				text-overflow: ellipsis;
				overflow: hidden;
			}

			&:hover {
				color: $color-blue;

				dl {
					display: block;
					/* color: $color-blue; */
				}
			}

			dl {
				display: none;
				margin: -50px 111px 0;
				height: auto;
				width: 100px;
				padding: 5px;
				background-color: $color-light;
				color: $color-topicon;
				border-radius: 3px;

				dt {
					
					img {
						width: 100px;
						height: 100px;
						border-radius: 3px;
					}
				}

				dd {
					width: 100px;
					margin: 0;
					text-align: left;
				}
			}
		}
	}
</style>