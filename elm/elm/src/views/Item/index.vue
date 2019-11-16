<template>
	<div class="item box">
		<div class="order" v-for="i in 10"
		:key="i++">
			<div class="orderTop">
				<router-link tag="p" to="/Home/detail/:id">
					<img src="http://img1.imgtn.bdimg.com/it/u=2983577680,1763108233&fm=26&gp=0.jpg" alt="">
				</router-link>
				<aside>
					<div>
						<p>我想来份水果捞></p>
						<p>2小时25分钟前</p>
					</div>
					<p class="ding">订单已送达</p>
				</aside>
			</div>
			<div class="orderMiddle">
				<p>1000仙草水果捞</p>
				<p>￥15.80</p>
			</div>
			<div class="orderBottom">
				<router-link tag="p" to="/Home/detail/:id">再来一单</router-link>
				<router-link tag="p" to="/evaluate">评价得金币</router-link>
			</div>
		</div>
		<Tabbar></Tabbar>
	</div>
</template>

<script>
import Tabbar from "@/components/Tabbar"
	export default {
		data(){
			return {
				orderCard:"order*12"
			}
		},
		// created(){
		// 	this.$http.get("",{

		// 	}).then(rs=>{

		// 	})
		// }
		 components:{
			Tabbar
		},
	}
</script>

<style lang="scss">
	body{
		background:#f5f5f5;
		height:1200px;
		.item{
			margin-bottom:60px;
		}
		.order{
			height:11.4rem;
			width:100%;
			background:#fff;
			margin-top:10px;
			padding:1.2rem 0 0 1.5rem;
			.orderTop{
				display:flex;
				justify-content: space-between;
				img{
				width:2.2rem;
				height:2.2rem;
				}
				aside{
					width:305px;
					display:flex;
					justify-content: space-between;
					padding-bottom:10px;
					border-bottom:1px solid #f5f5f5;
					div{
						margin-left:0px;
						p:first-child{
							font-size: 16px;
							color:black;
							line-height:24px;
						}
						p:last-child{
							font-size:12px;
							color:#999999;
						}
					}
					.ding{
						margin-right:10px;
					}
				}
				

			}
			.orderMiddle{
				display:flex;
				justify-content: space-between;
				border-bottom:1px solid #f5f5f5;
				padding:17px 0;
				p:first-child{
					margin-left:44px;
					font-size: 14px;
					color:#666;
				}
				p:last-child{
					margin-right:10px;
					font-weight:600;
					font-size: 14px;
					color:black;
				}

			}
			.orderBottom{
				width:351px;
				display:flex;
				justify-content: flex-end;
				padding:14px 0;
				p:first-child{
					border:1px solid #2395ff;
					border-radius: 3px;
					color:#2395ff;
					padding:5px 7px;
					margin-right:10px;
				}
				p:last-child{
					border:1px solid #ff5339;
					border-radius: 3px;
					color:#ff5339;
					padding:5px 7px;
					margin-right:10px;
				}
			}
		}
	}
</style>
