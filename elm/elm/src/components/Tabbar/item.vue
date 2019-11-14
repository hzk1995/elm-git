<template>
	<div class="tabbarItem" @click="change">
		<i :class="['fa',icon,isactive?'active':'']"></i>
		<p :class="(isactive?'active':'')">{{txt}}</p>
	</div>
</template>

<script>
	export default {
		computed:{
			isactive(){
				if(this.sel === this.mark){
					return true
				}
				return false
			}
		},
		props:["icon","txt","mark","sel","changesel"],
		methods:{
			change(){
				this.changesel(this.mark)
				this.$router.push("/" + this.mark)
			}
		}
	}
</script>

<style lang="scss">
	.tabbarItem{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		flex: 1;
		font-size: 16px;
		p{
			margin-top: 6px;
		};
		.fa{
			padding-top: 8px;
			font-size: 18px;
		};
		.active{
			color: darkcyan;
		}
	}
</style>
