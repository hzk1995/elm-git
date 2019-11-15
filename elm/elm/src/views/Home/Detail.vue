<template>
  <div class="detail">
      <div class="Topbox">
        <img class ="masterGraph"  src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=172425569,1210853800&fm=26&gp=0.jpg" alt="">
      </div>
      <div class="ShopBrief">
          <p class="title">我想来份水果捞</p>
          <p class= "popularity">
            <span>评价4.9</span>
            <span class = "salesVolume">月售3857单</span>
            <span>蜂鸟快送约26分钟</span>
          </p>
      </div>
      <div :class="['navbox',{navfixe:isFixed}]">
        <mt-navbar>
        <mt-tab-item id="1">点餐</mt-tab-item>
        <mt-tab-item id="2">评价</mt-tab-item>
        <mt-tab-item id="3">商家</mt-tab-item>
        </mt-navbar>
      </div>
      <div :class= "['content', {marginContent:isFixed}]">
          <div class="option">
            <p
              :class="{color:(colorTitle == good.name)}"
              v-for="good in goods" 
              :key="good.id"
              @click="select(good.name)"
              >{{good.name}}
            </p>
          </div>
          <div class="list">
            <div class="item" v-for="item in items" :key="item.vfood_id">
              <p class= "itemPhoto">
                <img :src="changeImg(item.image_path)" alt="">
              </p>
              <div class="itembox">
                <p class="title">{{item.name}}</p>
                <p class="synopsis">{{item.description}}</p>
                <p class="appraise">
                  <span>月售{{item.month_sales}}份</span>
                  <span>好评率100%</span>
                </p>
                <p class="addition">
                  <span class="prace">￥{{prace}}</span>
                  <span class="addSubtract">
                    <span  @click="subtractCommodity(item.item_id)" class="subtract">-</span>
                    <span  class="num">{{item.num}}</span>
                    <span @click="addGoodInCar(item)" class="add">+</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
      </div>
      <div class= "car">
        <p class="map">
          <span class="fa fa-shopping-cart blueShopping"></span>
          <span class="totalPraces">总量：{{num1}}</span>
        </p>
        <p class="word">去结算</p>
      </div>
  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
  methods:{
    ...mapActions(["addGoodInCar"]),
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
    select(val){
        this.colorTitle = val
    },
  }, 
  // methods:{
  //   isShow(val){
  //     if(val > 0){
  //       return true
  //     }else{
  //       return false
  //     }
  //   },
    // addCommodity(val){
    //   for(var i =0;i<this.items.length;i++){
    //     if(this.items[i].item_id == val){
    //         this.items[i].num++
    //         alert(this.items[i].num)
    //     }
    //     if(this.items[i].num > 0){
    //         this.items[i].isShow = true  
    //     }else{
    //       this.items[i].isShow = false
    //     }
        
    //   }
      // console.log(val)
      // console.log(this.addId)
    // },
    // add(val){
    //   for(var i = 0;i<this.items.length;i++){
    //     if(this.items[i].item_id == val){
    //       this.items[i].num++
    //     }
    //     this.num1+=this.items[i].num
    //   }
      
    // },
    // subtractCommodity(val){
    //   this.addId == val
    //   // if(this.addId = val){
    //   //   this.num--
    //   // }
    // },
    
  // },
  computed:{
    // isShow(){
    //     for(var i = 0; i< this.items.length;i++){
    //       if(this.items[i].num > 0){
    //         this.items[i].isShow == true
    //       }else{
    //         this.items[i].isShow == false
    //       }
    //       return this.items[i].isShow
    //     }
    // },
    // return totalPrace += this.singleTotalPrace
  },
  data(){
    return{
      num1:1,
      addId:null,
      colorTitle:"热销",
      isColor:false,
      isFixed:false,
      prace:38.8,
      goods:[],
      items:[],
      col:false,
      // 
    }
  },
  watch:{
    items(val){

    }
  },
  created(){
    this.$http.get("./list.json").then(res=>{
      // console.log(res.data.JSON.menu)
      this.goods = res.data.JSON.menu
      this.items = res.data.JSON.menu[0].foods
      for(var i=0;i<this.items.length;i++){
        this.items[i].num = 1
        this.items[i].isShow = false
      }
      // console.log(this.items)
    })
    window.addEventListener("scroll",e=>{
      let sTop = document.documentElement.scrollTop || document.body.scrollTop;
      if(sTop>=145){
        this.isFixed = true
      }else{
        this.isFixed = false
      }
    })
  },
  updated(){
    console.log(this.items[1].num)
  }
}
</script>

<style lang="scss">
    .detail{
      height: 100%;
      .Topbox{
        width: 100%;
        height:100px;
        background: #847a7a;
        .masterGraph{
        position: absolute;
          width: 80px;
          height: 80px;
          top: 10%;
          left:50%;
          -webkit-transform: translate(-50%,-50%);
          -moz-transform: translate(-50%,-50%);
          transform:translate(-50%,-50%);
      }
      }
      .marginContent{
        margin-top: 15px;
      }
      .content{
        margin-bottom: 40px;
        display: flex;
        width: 100%;
        height: 100%;
        .option{
          width: 20%;
          background: #eceaea;
          overflow: scroll;
          height: 620px;
          overflow-y: auto;
          p{
            // height:50px;
            // line-height: 50px;
            // text-align: center;
            font-size: 12px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            padding: 20px 8px;
          }
          .color{
            background: #fff;
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
            .itemPhoto{
              margin-right:10px;
              img{
                height:100px;
                width:100px;
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
              .appraise{
                font-size: 12px;
                margin-bottom: 15px;
              }
              .addition{
                display: flex;
                justify-content: space-between;
                .prace{
                  font-size:16px;
                  color: red;
                }
                .addSubtract{
                  // float: right;
                  display: inline-block;
                  .subtract{
                    color: rgb(35, 149, 255);
                    background: #fff;
                    border: 1px solid rgb(35, 149, 255);
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    text-align: center;
                    line-height: 18px;
                    font-size: 18px;
                    cursor: pointer;
                  }
                  .num{
                    margin:0 10px;
                  }
                  .add{
                    color: #fff;
                    background: rgb(35, 149, 255);
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    text-align: center;
                    line-height: 18px;
                    font-size: 18px;
                    cursor: pointer;
                  }
                }
              }
            }
          }
        }
      }
      .navbox{
        border-bottom: 1px solid #999;
      }
      .navfixe{
        position: fixed;
        top:0;
        left: 0;
        width:100%;
      }
      .ShopBrief{
        width: 100%;
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .title{
          margin: auto;
          font-size: 20px;
          font-weight: 900;
          color: black;
        }
        .popularity{
          margin-top:5px;
          span{
            font-size: 12px;
          }
          .salesVolume{
            margin-left: 10px;
            margin-right: 10px;
          }
        }
      }
      .car{
        position: fixed;
        bottom: 0;
        left: 0;
        height: 50px;
        width: 100%;
        display: flex;
        .map{
          background:rgba(61,61,63,.9);
          width: 70%;
          position: relative;
          .fa-shopping-cart{
            display: inline-block;
            font-size: 30px;
            width: 50px;
            height: 50px;
            position: absolute;
            left: 10px;
            top: -10px;
            border: 5px solid rgba(61,61,63,.9);
            border-radius: 50%;
            text-align: center;
            line-height: 40px;
            background: #363636;
          }
          .blueShopping{
            background: rgb(35, 149, 255);
            color: #fff;
          }
        }
        .word{
          background: #38ca73;
          width: 30%;
          color:#fff;
          text-align: center;
          font-size: 14px;
          font-weight: 700;
          line-height:50px;
        }
      }
    }
</style>