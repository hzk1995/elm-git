<template>
	<div class="mine-box">

		<!-- header -->
		<div class="top">
			<div class="topImg">
				<img src="@/assets/logo1.jpeg" alt="">
			</div>			
			<router-link to="/mine/login" class="login">
				<h1>登录/注册</h1>
				<p>登录后享受更多特权</p>
			</router-link>
			<div class="icon">
				<i class="fa fa-angle-right"></i>
			</div>
		</div>

		<!-- content -->
		<div class="content">
			<div class="left">
				<div class="packet">
					<i class="fa fa-envelope"></i>
				</div>				
				<p>红包</p>
			</div>
			<div class="right">
				<div class="money">
					<i class="fa fa-money"></i>
				</div>				
				<p>金币</p>
			</div>
		</div>

		<div class="listbox">
			<div class="list-1">
				<mt-cell title="我的地址">
					<i class="fa fa-location-arrow"></i>
					<i class="fa fa-angle-right"></i>			
				</mt-cell>
			</div>
			
			<div class="list-2">
				<mt-cell title="金币商城"  class="list-2">
					<i class="fa fa-shopping-cart al"></i>
					<i class="fa fa-angle-right"></i>			
				</mt-cell>
				<mt-cell title="分享拿20元现金"  class="list-2">
					<i class="fa fa-gift al"></i>
					<i class="fa fa-angle-right"></i>			
				</mt-cell>				
			</div>

			<div class="list-3">
				<mt-cell title="我的客服"  >
					<i class="fa fa-whatsapp al-3"></i>
					<i class="fa fa-angle-right"></i>			
				</mt-cell>
				<mt-cell title="下载饿了么app" >
					<i class="fa fa-edge al-3"></i>
					<i class="fa fa-angle-right"></i>			
				</mt-cell>
				<mt-cell title="规则中心"  >
					<i class="fa  fa-file al-3"></i>
					<i class="fa fa-angle-right"></i>			
				</mt-cell>				
			</div>

			<div class="text">
				<span>隐私政策</span>
			</div>
			
		</div>
		
	
		<Tabbar></Tabbar>
	</div>
	
</template> 

<script>
import Tabbar from "@/components/Tabbar"

	export default {
		components:{
			Tabbar
		}
		
		
	}
</script>

<style lang="scss">
	.mine-box{
		height:667px;
		background:#eee;
		
		//header
		.top{
			height:120px;
			background-image: linear-gradient(90deg,#0af,#0085ff);
			display: flex;
			.topImg{
				margin:20px 0 0 20px;
				height:80px;
				width:80px;
				overflow: hidden;
				border-radius: 50%;
				img{
					
					height:80px;
					width:80px;
				}
			}
			.login{
				margin-left:10px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				color:#fff;
				h1{
					font-size: 20px;
				}
				p{
					font-size: 12px;	
				}	
			}
			.icon{
				position: absolute;
				right:20px;
				top:50px;
				.fa-angle-right{
					color:#fff;
					font-size:20px;
					
				}
	
			}
		}
		.content{
			display: flex;
			height:100px;
			justify-content: space-around;
			text-align: center;
			align-items: center;
			background:#fff;
			.packet{
				height:25px;
				line-height: 25px;
				width:25px;
				border-radius: 50%;
				background:rgb(255, 95, 62);
				.fa-envelope{
					color:#fff;
				}

				
			}
			.money{
				line-height: 25px;
				height:25px;
				width:25px;
				border-radius: 50%;
				background:rgb(106, 194, 11);
				.fa-money{
					color:#fff;
				}				
			}
			p{
				font-size:12px;
				margin-top:5px;
			}
			
		}
		.listbox{
			.fa{
				font-size:18px;
			}			
			.list-1{
				margin:12px 0;
				.fa-location-arrow{
					position:absolute;
					left:10px;
					color:#0af;
				}
				.mint-cell-text{
					padding-left:25px;

				}
			}
			.list-2{
				.fa-shopping-cart{
					position:absolute;
					left:10px;
					color:rgb(252, 123, 83);
				}
				.fa-gift{
					position:absolute;
					left:10px;
					color:rgb(148, 217, 74);
				}
				.mint-cell-text{
					padding-left:25px;
				}
			}
			.list-3{
				margin-top:15px;
				.al-3{
					position:absolute;
					left:10px;
					color:#0af;

				}
				.mint-cell-text{
					padding-left:25px;
				}
			}
			.text{
				font-size: 16px;
				color:#0af;
				width:100%;
				text-align:center;
				margin-top:20px;
			}
			
		}
		
	}
</style>
