<template>
	<div class="tabbar">
		<Item
			v-for="item in itemNavs"
			:key="item.id"
			:icon="item.icon"
			:txt="item.txt"
			:mark="item.mark"
			:sel="sel"
			:changesel="changesel"
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
					{id:1,icon:'fa-ravelry',txt:"首页",mark:'home'},
					{id:2,icon:'fa-search-plus',txt:"发现",mark:'found'},
					{id:3,icon:'fa-file-text-o',txt:"订单",mark:'item'},
					{id:4,icon:'fa-user',txt:"我的",mark:'mine'}
				],
				sel:this.$route.name
			}
		},
		methods:{
			changesel(val){
				this.sel = val
			}
		}
	}
</script>

<style lang="scss">
	.tabbar{
		
		display: flex;
		justify-content: space-around;
		background: #ffffff;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 50px;
		align-items: center;
		border-top: 1px solid #ccc;
	}
</style>
