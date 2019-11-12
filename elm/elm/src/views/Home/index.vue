<template>
	<div class="homebox">
		<div class="top">
			<i class="fa fa-map"></i><span>锦绣前程</span>
		</div>
		<Tabbar></Tabbar>
	</div>
</template>

<script>
import Tabbar from "@/components/Tabbar"
	export default {
		 components:{
			Tabbar
		},
	}
</script>

<style lang="scss">
	.homebox{
		.top{
			height: 60px;
			width: 100%;
			background: #0085ff;
			color: #ffffff;
			font-size: 16px;
			display:flex;
			justify-content: flex-start;
			align-items: center;
			.fa{
				margin-left: 10px;
			};
			span{
				margin-left: 5px;
			}

		}
	}
</style>
