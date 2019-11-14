<template>
  <div class="detail">
      <div class="Topbox"></div>
      <img class ="masterGraph"  src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=172425569,1210853800&fm=26&gp=0.jpg" alt="">
      <div class="ShopBrief">
          <p class="title">我想来份水果捞</p>
          <p class= "popularity">
            <span>评价4.9</span>
            <span class = "salesVolume">月售3857单</span>
            <span>蜂鸟快送约26分钟</span>
          </p>
      </div>
      <div class="navbox">
        <mt-navbar>
        <mt-tab-item id="1">点餐</mt-tab-item>
        <mt-tab-item id="2">评价</mt-tab-item>
        <mt-tab-item id="3">商家</mt-tab-item>
        </mt-navbar>
      </div>
      <div class= "content">
          <div class="option">
            <p v-for="i in 20" :key="i++">热销</p>
          </div>
          <div class="list">
            <div class="item" v-for="i in 10" :key="i++">
              <p class= "itemPhoto">
                <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=172425569,1210853800&fm=26&gp=0.jpg" alt="">
              </p>
              <div class="itembox">
                <p class="title">我想来份1000ml水果捞</p>
                <p class="synopsis">十余种应季新鲜水果外加秘制酸奶好吃到爆！主要原料：酸奶</p>
                <p class="appraise">
                  <span>月售1194份</span>
                  <span>好评率100%</span>
                </p>
                <span class="prace">￥38.8</span>
              </div>
            </div>
          </div>
      </div>
      <div class= "car">
        <p class="map"></p>
        <p class="word">点我结算</p>
      </div>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss">
    .detail{
      height: 100%;
      .Topbox{
        width: 100%;
        height:100px;
        background: #847a7a;
      }
      .content{
        margin-bottom: 60px;
        display: flex;
        width: 100%;
        height: 100%;
        .option{
          width: 20%;
          background: #eceaea;
          overflow: scroll;
          height: 600px;
          overflow-y: auto;
          p{
            height:50px;
            line-height: 50px;
            text-align: center;
          }
        }
        .list{
          overflow: scroll;
          height: 600px;
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
              .prace{
                font-size:16px;
                color: red;
              }
            }
          }
        }
      }
      .masterGraph{
        position: absolute;
          width: 80px;
          height: 80px;
          top: 12%;
          left:50%;
          -webkit-transform: translate(-50%,-50%);
          -moz-transform: translate(-50%,-50%);
          transform:translate(-50%,-50%);
      }
      .navbox{
        border-bottom: 1px solid #999;
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
        height: 60px;
        width: 100%;
        display: flex;
        .map{
          background:#6e6d6d;
          width: 70%;
        }
        .word{
          background: #38ca73;
          width: 30%;
          color:#fff;
          text-align: center;
          font-size: 20px;
          font-weight: 700;
          line-height:60px;
        }
      }
    }
</style>