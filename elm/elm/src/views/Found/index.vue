<template>
	<div class="found-box">
		<Tabbar></Tabbar>
		<div class="header">
			<div class="left">
				<p class="title l1">金币商城</p>
				<p class="world">0元好屋在这里</p>
				<img loading="" class="icon" src="https://cube.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?x-oss-process=image/format,webp">
			</div>
			<div class="right">
				<div class="top">
					<p class="title t1">推荐有奖</p>
					<p class="world w1">20元现金拿不停</p>
					<img loading="" class="icon" src="https://cube.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg?x-oss-process=image/format,webp">
				</div>
				<div class="bottom">
					<p class="title b1">周边优惠</p>
					<p class="world">领取口碑好卷</p>
					<img loading="" class="icon" src="https://cube.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?x-oss-process=image/format,webp">
				</div>
			</div>
		</div>

		<div class="content">
			<div class="content-top">
				<h2>为你推荐</h2>
				<p class="c1">你的口味，我都懂得</p>				
			</div>
			<div class="main">
				<div class="main-list" 
					v-for="product in products"
					:key="product.id"
				>
					<img class="recommend-2Mcp6" src="https://cube.elemecdn.com/e/03/c1035cbd895fcd2d49f93bb57ddeejpeg.jpeg?x-oss-process=image/format,webp/resize,w_345,h_345,m_fixed">
					<p class="main-title">劲脆鸡腿堡</p>
					<p class="main-num">月售1247份，好评率97%</p>
					<p class="main-price">￥13</p>
					<span class="main-activity">满25减14</span>
					<p class="main-address">阿堡仔炸鸡汉堡</p>
				</div>				
			</div>
		</div>
		
		

		
	</div>
</template>

<script>
import Tabbar from "@/components/Tabbar"
	export default {
		components:{
			Tabbar
		},
		data(){
			return{
				products:[]
			}
		},
		created(){
			this.$http.get("/api/elm/items").then(res=>{
				this.products = res.data.data.object_list
			})

		}
	}
</script>

<style lang="scss" scoped>
	.found-box{

		background: #ddd;
		height:100vh;
		
		.header{
			background:#fff;
			height:180px;
			display: flex;
			justify-content:space-between;
			.title{
				font-size:18px;
				margin:20px 0 0 10px;
			}
			.world{
				font-size: 14px;
				color:#999;
				margin-left:10px;
			}
			.left{
				width:50%;
				position: relative;
				border-right:1px solid #ddd;
				img{
					position: absolute;
					bottom:0;
					right: 0;
					height:100px;
					width:100px;
				}
				.l1{
					color:rgb(255, 153, 0);
					
				}
				
				
			}
			.right{
				width:50%;
				display: flex;
				flex-direction: column;
				.top{
					position: relative;
					height:90px;
					border-bottom: 1px solid #ddd;
					img{
						position: absolute;
						right:5px;
						top:20px;
						height:50px;
						width:50px;
					}
					.t1{
						color:rgb(27, 169, 225);
					}

				}
				.bottom{
					position: relative;
					height:90px;
					img{
						position: absolute;
						right:5px;
						top:20px;
						height:50px;
						width:50px;
					}
					.b1{
						color:rgb(237, 102, 96);
					}
				}
			}
			
			
		}

		// 详情页
		.content{
			background:#fff;
			margin-top:10px;
			.content-top{
				display: flex;
				justify-content: center;
				flex-direction:column;
				align-items: center;
				h2{
					padding-top:10px;
					font-size: 18px;
					font-weight: 700;					
				}
				.c1{
					font-size: 14px;
					color:#ddd;
				}
			}
			.main{
				display: flex;
				flex-wrap: wrap;
				
				.main-list{
					margin:5px 0 0 5px;
					height:280px;
					width:48%;
					border:1px solid #ddd;
					img{
						height:180px;
						width:100%;
					}
					.main-title{
						font-size: 18px;
						font-weight: 700;
					}
					.main-num{
						font-size: 12px;
						color:#999;
					}
					.main-price{
						display: inline-block;
						color:red;
						font-size: 18px;
					}
					.main-activity{
						margin-left:5px;
						display: inline-block;
						font-size: 12px;
						border:1px solid red;
						color:red;

					}
					.main-address{
						color:#ddd;
						border-top:1px dashed #ddd;
						font-size:12px;
					}
					

				}

			}
		}

	}
</style>
