<template>
	<div class="homebox">
		<div class="top">
			<i class="fa fa-map"></i><span>锦绣前程</span>
		</div>
		<mt-search placeholder="搜索饿了么商家、商品名称"></mt-search>
		<Banner></Banner>
		<Nav></Nav>
		<div class="tou">
			<div class="tj">
				——  推荐商家  ——
			</div>
			<div class="box">
				<div>
					<p>综合排序</p><i class="fa fa-sort-desc"></i>
				</div>
				<div>
					<p>距离最近</p>
				</div>
				<div>
					<p>品质联盟</p>
				</div>
				<div>
					<p>筛选</p><i class="fa fa-filter"></i>
				</div>
			</div>
		</div>
		<Shop
			v-for="shop in shops"
			:key="shop.id"
			:shop="shop"
		></Shop>
		<Tabbar></Tabbar>
	</div>
</template>

<script>
<<<<<<< HEAD
// import Detail from "./Detail"

	export default {
		components:{
			// Detail
		}	
=======
import Tabbar from "@/components/Tabbar"
import Banner from "@/components/Banner"
import Nav from "./Nav"
import Shop from "./Shop"

	export default {
		 components:{
			Tabbar,Banner,Nav,Shop
		},
		data(){
			return {
				shops:[]
			}
		},
		created(){
			 this.$http.get('/api/elm/items')
        .then(res=>{
			this.shops = res.data.data.object_list
			console.log(res.data.data.object_list)
        })
		}
>>>>>>> 8ede350207d4db4a259960ac17d45dc1c789a78a
	}
</script>

<style lang="scss">
	.homebox{
		.top{
			height: 45px;
			width: 100%;
			background: #0085ff;
			color: #ffffff;
			font-size: 16px;
			display:flex;
			justify-content: flex-start;
			align-items: center;
			.fa{
				margin-left: 20px;
			};
			span{
				margin-left: 10px;
			}

		};
		.mint-search{
			height: 100%;
		};
		.tj{
			text-align: center;
			font-size: 16px;
			margin-top: 20px;
		};
		.box{
			display: flex;
			margin-top: 20px;
			justify-content: space-between;
			padding: 0 30px;
			align-items: center;
			div{
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
</style>
