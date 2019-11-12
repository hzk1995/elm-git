<template>
	<div class="tabbar">
		<Item
			v-for="item in itemNavs"
			:key="item.id"
			:icon="item.icon"
			:txt="item.txt"
		>
		</Item>
	</div>
</template>

<script>
	import Item from "./item.vue"
	export default {
		components:{
			Item
		},
		data(){
			return {
				itemNavs:[
					{id:1,icon:fa-ravelry,txt:"首页"},
					{id:3,icon:fa-search-plus,txt:"发现"},
					{id:3,icon:fa- file-text-o,txt:"订单"},
					{id:4,icon:fa-user,txt:"我的"}
				]
			}
		}
	}
</script>

<style>
</style>
