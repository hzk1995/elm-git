<template>
  <div class="shop">
      <div class="shopimg">
        <img :src="changeImg(shop.restaurant.image_path)" alt="">
      </div>
      <div class="shopcon">
        <p class="name">{{shop.restaurant.name}}</p>
        <div>
          <p>{{shop.restaurant.rating}}</p> |
          <p>{{JSON.parse(shop.restaurant.business_info).recent_order_num_display}}</p>
        </div>
        <div>
          <p>￥{{shop.restaurant.piecewise_agent_fee.extra_fee}}元起送</p> |
          <p>{{shop.restaurant.piecewise_agent_fee.tips}}</p>
        </div>
        <div class="yhbox">
          <h6 
          class="free"
          v-for="yh in filteredItems"
          :key="yh.id"
          ><p :style="'background'+ ':' + '#' + yh.icon_color">{{yh.icon_name}}</p>{{yh.description}}</h6>
        </div>
      </div>
      <div class="shoplang">
        <i class="fa fa-reorder" @click="ismore=!ismore"></i>
        <p class="blue">蜂鸟专送</p>
        <p>3.14KM | 30分钟</p>
      </div>
  </div>
</template>

<script>
export default {
  props:["shop"],
  computed: {
    filteredItems(){
      if(this.ismore){
         return this.shop.restaurant.activities.slice(0, 2)
      }
      return this.shop.restaurant.activities
     
    }
  },
  data(){
    return {
      ismore:true
    }
  },
  methods:{
    changeImg(url){
			var aaa	= url.replace(/png/g,"png.png")
			var arr = aaa.split("")
			arr.splice(3,0,"/")
			arr.splice(1,0,"/")
			var obj = arr.join("")
			obj = "https://cube.elemecdn.com/" + obj + "?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed"
			return obj
		}

  }
}
</script>

<style lang="scss">
  .shop{
    margin: 20px 10px 20px;
    display:flex;
    justify-content: space-around;
    
    .shopimg{
      width: 65px;
      height: 65px;
      img{
        width: 100%;
        height: 100%;
      }
    };
    .shopcon{
      width: 220px;
      display: flex;
      flex-direction: column;
      padding: 0 10px;
      // justify-content: center;
      // align-items: center;
      div{
        display: flex;
      };
      .yhbox{
        display:flex;
        flex-direction: column;
      }
      .name{
        font-size: 18px;
        font-weight: 800;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      };
      div{
        margin-top: 5px;
      };
      .fa{
        cursor: pointer;
      }
      .free{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-top: 10px;
        p{
          display: inline-block;
          width: 18px;
          height: 18px;
          border-radius: 5px;
          color: #ffffff;
          text-align: center;
          margin-right: 8px;
          line-height: 18px;
        }
      }
    };
    .shoplang{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        p{
          margin-right: 4px;
          white-space: nowrap;
        };
        i{
          margin-right: 4px;
        }
        .blue{
          width: 70px;
          height: 20px;
          background:skyblue;
          color: #ffffff;
          text-align: center;
          border-radius: 5px;
          margin: 10px 4px 8px 0;
        }
      }
  }
</style>