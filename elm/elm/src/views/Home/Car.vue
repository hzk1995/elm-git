<template>
  <div class="car">
      <div class="selectedCommodities">已选商品</div>
      <div class="list">
        <div class="item" v-for="item in items" :key="item.vfood_id">
            <!-- <p class= "itemPhoto">
            <img :src="changeImg(item.image_path)" alt="">
            </p> -->
            <div class="itembox">
            <p class="title">{{item.name}}</p>
            <p class="synopsis">{{item.description}}</p>
            </div>
            <div class="praceBigBox">
              <p class="praceBox">
                <span class="symbol">￥</span>
                <span class="prace">{{item.lowest_price}}</span>
              </p>
            </div>
            <div class="addSub">
              <button class="sub" @click="reduceGoodInCar(item)">-</button>
              <span class="num">{{item.num}}</span>
              <button class="add" @click="addGoodInCar(item)">+</button>
            </div>
        </div>
    </div>
    <div class="zong">
      <div class="shu">
        <p>总价：{{computeTotal.price}}元</p>
        <p>总数：{{computeTotal.num}}件</p>
      </div>
      <router-link to="/item" tag="div" class="jiesuan">
        去订单页
      </router-link>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from "vuex"

export default {
    computed:{
        ...mapState({
            items:state=>state.myCar.cars
        }),
        ...mapGetters(["computeTotal"])
    },
    methods:{
        ...mapActions(["addGoodInCar","reduceGoodInCar"]),
        changeImg(url){
      var aaa = url.replace(/jpeg/g,"jpeg.jpeg")
      aaa	= aaa.replace(/png/g,"png.png")
			var arr = aaa.split("")
			arr.splice(3,0,"/")
			arr.splice(1,0,"/")
			var obj = arr.join("")
			obj = "https://cube.elemecdn.com/" + obj + "?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed"
			return obj
      },
    },
}
</script>

<style lang="scss">
    .car{
      .selectedCommodities{
        font-size: 16px;
        height: 50px;
        line-height: 50px;
        background: rgb(160, 158, 158);
        color: #666;
        padding: 0 10px;
      }
      .zong{
        height: 60px;
        width: 100%;
        background: rgb(192, 186, 186);
        display: flex;
        justify-content: space-between;
        .shu{
          p{
            font-size: 24px;
            color: #666;
          }
        }
        .jiesuan{
            width: 30%;
            height: 60px;
            line-height: 60px;
            font-size: 26px;
            color: #fff;
            font-weight: 600;
            background: rgb(35, 149, 255);
            text-align: center;
        }
      }
        .list{
          overflow: scroll;
          height: 620px;
          overflow-y: auto;
          width: 80%;
          .item{
            margin: 10px 10px;
            display: flex;
            justify-content: space-around;
            .addSub{
              button{
                width: 30px;
                height: 30px;
                border-radius: 50%;
                font-size: 16px;
                border: none;
              }
              .sub{
                background: #fff;
                color: rgb(35, 149, 255);
                border: 1px solid rgb(35, 149, 255);
              }
              .add{
                background: rgb(35, 149, 255);
                color: #fff;
              }
              .num{
                font-size: 16px;
                width: 15px;
                display: inline-block;
                margin:0 10px;
              }
            }
            .praceBigBox{
              .praceBox{
                color: red;
                .symbol{
                  font-size: 12px;
                }
                .prace{
                  font-size: 18px;
                }
              }
            }
            .itembox{
              p{
                margin-bottom: 5px;
              }
              .title{
                width:160px;
                font-size:16px;
                font-weight: 700;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
                color: black;
              }
              .synopsis{
                width:160px;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
                font-size: 12px;
              }
            }
          }
        }
    }
</style>