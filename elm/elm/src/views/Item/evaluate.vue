<template>
  <div class="evaluate">
      <div class="evaluateTop">
        <router-link tag="div" to="/item" class="close fa fa-reply">返回</router-link>
        <div class="gold">
          <p>金币</p>
          <p>0</p>
          <p>/8</p>
        </div>
        <div class="tiaoBox">
          <i class="tiao"></i>
        </div>
      </div>
      <div class="horseman">
          <div class="horsemanTop">
            <div class="peo">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3409927883,3729438078&fm=26&gp=0.jpg" alt="">
              <div class="nameBox">
                <p>
                  李洁宇
                  <span>蜂鸟快送</span>
                </p>
                <div>
                  <span>23.16送达（40分钟）</span>
                  <div class="fa fa-pencil-square-o"></div>
                </div>
              </div>
            </div>
            <p class="ni">已对骑手匿名</p>
          </div>
          <div class="emjBox">
            <h1>配送评价</h1>
            <div class="emj">
              <div class="emj1">
                <span class="jiaT chacolor" v-if="isJia">+2金币</span>
                <span :class="['fa','fa-frown-o',{chacolor:isShow}]" @click="show"></span>
                <p @click="show" :class="{chacolor:isShow}">非常差</p>
              </div>
              <div class="emj2">
                <span class="jiaT comcolor" v-if="isJia1">+2金币</span>
                <span :class="['fa','fa-meh-o',{comcolor:isShow1}]" @click="show1"></span>
                <p @click="show1" :class="{comcolor:isShow1}">一般</p>
              </div>
              <div class="emj3">
                <span class="jiaT goodcolor" v-if="isJia2">+2金币</span>
                <span :class="['fa','fa-smile-o',{goodcolor:isShow2}]" @click="show2"></span>
                <p @click="show2" :class="{goodcolor:isShow2}">超赞</p>
              </div>
            </div>
            <span class="baoqian" v-if="isShow">抱歉影响您的体验，平台将对骑手进行管束</span>
            <div>
              <div class="bad" v-if="isShow">
                <span v-for="i in smallBox" :key="i.id" @click="getColor(i)" :class="[i.isColor?classA1:classA]">{{i.txt}}</span>
                <span :class="['fa','fa-pencil','fa1']" @click="show3">文字评价</span>
              </div>
              <div class="common" v-if="isShow1">
                <span v-for="j in smallBox1" :key="j.id" @click="getColor1(j)" :class="[j.isColor?classB1:classB]">{{j.txt}}</span>
                <span :class="['fa','fa-pencil','fa1']" @click="show3">文字评价</span>
              </div>  
              <div class="good" v-if="isShow2">
                <span v-for="j in smallBox1" :key="j.id" @click="getColor1(j)" :class="[j.isColor?classC1:classC]">{{j.txt}}</span>
                <span :class="['fa','fa-pencil','fa1']" @click="show3">文字评价</span>
              </div>  
            </div>
            <div class="comment" v-if="isShow3">
              <textarea name="" id="" cols="30" rows="10" placeholder="说说哪里好，其他顾客想知道~"></textarea>
            </div>
          </div>
      </div>
      <div class="merchant">
        <div class="merchantTop">
          <div class="shang">
            <img width="40px" height="40px" src="http://img0.imgtn.bdimg.com/it/u=1870720664,4179128816&fm=26&gp=0.jpg" alt="">
            <span>川上川下麻辣香锅</span>
          </div>
          <p>
            <span class="fa fa-check-square-o"></span>
            <span>匿名评价</span>
          </p>
        </div>
        <div class="merchantBottom">
            <h2>商家评价</h2>
            <div class="starBox">
              <p class="fa fa-star-o"></p>
              <p class="fa fa-star-o"></p>
              <p class="fa fa-star-o"></p>
              <p class="fa fa-star-o"></p>
              <p class="fa fa-star-o"></p>
            </div>
            <div class="starTxt" position="relative">
              <p background="#fff">非常差</p>
              <p background="#fff">差</p>
              <p background="#fff">一般</p>
              <p background="#fff">满意</p>
              <p background="#fff">超赞</p>
            </div>
            <div class="isBad" >抱歉影响您的体验，平台将对商家进行管束</div>
            <div class="packBox" >
              <div class="pack">
                <span>包装</span>
                <div class="starBox1">
                  <p class="fa fa-star-o"></p>
                  <p class="fa fa-star-o"></p>
                  <p class="fa fa-star-o"></p>
                  <p class="fa fa-star-o"></p>
                  <p class="fa fa-star-o"></p>
                </div>
                <div class="starTxt1" position="relative">
                  <p background="#fff">非常差</p>
                  <p background="#fff">差</p>
                  <p background="#fff">一般</p>
                  <p background="#fff">满意</p>
                  <p background="#fff">超赞</p>
                </div>
              </div>
              <div class="quality">
                <span>质量</span>
                <div class="starBox2">
                  <p class="fa fa-star-o"></p>
                  <p class="fa fa-star-o"></p>
                  <p class="fa fa-star-o"></p>
                  <p class="fa fa-star-o"></p>
                  <p class="fa fa-star-o"></p>
                </div>
                <div class="starTxt2" position="relative">
                  <p background="#fff">非常差</p>
                  <p background="#fff">差</p>
                  <p background="#fff">一般</p>
                  <p background="#fff">满意</p>
                  <p background="#fff">超赞</p>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div class="evaluateFotter">
        <div class="fotter">
          <p>请对骑手服务做出评价</p>
          <p>请评价用餐满意度</p>
          <p>请评价包装/质量满意度</p>
          <p>提交评价</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  methods:{
    show(){
      this.isShow = true;
      this.isShow1 = false
      this.isShow2 = false
      this.isJia = true
      this.isJia1 = false
      this.isJia2 = false
    },
    show1(){
      this.isShow1 = true
      this.isShow = false
      this.isShow2 = false
      this.isJia = false
      this.isJia1 = true
      this.isJia2 = false
    },
    show2(){
      this.isShow2 = true
      this.isShow1 = false
      this.isShow = false
      this.isJia = false
      this.isJia1 = false
      this.isJia2 = true
    },
    show3(){
      this.isShow3 = !this.isShow3
    },
    getColor(i){
      i.isColor = !i.isColor
    },
    getColor1(j){
      j.isColor = !j.isColor
    },
  },
  data(){
    return{
      text:"提前点送达",
      isShow:false,
      isShow1:false,
      isShow2:false,
      isJia:false,
      isJia1:false,
      isJia2:false,
      isShow3:false,
      smallBox:[
        {id:1,txt:"提前点送达",isColor:false},
        {id:2,txt:"服务态度差",isColor:false},
        {id:3,txt:"额外索取费用",isColor:false},
        {id:4,txt:"餐品翻撒",isColor:false},
        {id:5,txt:"配送慢",isColor:false},
        {id:6,txt:"未穿制服",isColor:false},
        {id:7,txt:"食品凉了",isColor:false},
        {id:8,txt:"未带保温箱",isColor:false},
        {id:9,txt:"着装脏乱",isColor:false},
        {id:10,txt:"不送上楼",isColor:false},
      ],
      classA:"classA",
      classA1:"classA1",
      classB:"classB",
      classB1:"classB1",
      classC:"classC",
      classC1:"classC1",
      fa:"fa",
      fa1:"fa1",
      smallBox1:[
        {id:1,txt:"送餐快",isColor:false},
        {id:2,txt:"餐品完好",isColor:false},
        {id:3,txt:"服务态度好",isColor:false},
        {id:4,txt:"准时到达",isColor:false},
        {id:5,txt:"穿着专业",isColor:false},
        {id:6,txt:"衣着整洁",isColor:false},
      ]
    }
  }

}
</script>

<style lang="scss">
body{
  background:#f5f5f5;
    .evaluateTop{
      position:fixed;
      top:0;
      left:0;
      width:100%;
      height:40px;
      background:#f5f5f5;
      z-index: 3;
      .close{
        z-index: 4;
        position:fixed;
        top:3px;
        left:3px;
        padding:3px;
      }
      .gold{
        height:30px;
        justify-content: center;
        display:flex;
        align-items: center;
        p:first-child{
          margin-right:.4rem;
          font-size:15px;
          color:#ffaa0c;
          font-weight: 600;
        }
        p:nth-child(2){
          color:#ffaa0c;
          font-size: 14px;
          font-weight: 600;
        }
      }
      .tiaoBox{
        width:8rem;
        height:.3rem;
        border-radius: 3px;
        background:#e4e4e4;
        margin:auto;
      }
    }
  .horseman{
    margin-top:50px;
    padding:0 10px;
    .horsemanTop{
      display:flex;
      align-items: center;
      justify-content: space-between;
      .ni{
        color:#666;
        font-size:14px;
      }
      .peo{
        width:230px;
        height:40px;
        display:flex;
        img{
          width:40px;
          height:40px;
        }
        .nameBox{
            width:160px;
            margin-left:10px;
            div{
              line-height:14px;
              span{
                font-size:12px;
                color:#999;
              }
              .fa{
                margin-left:28px;
                font-size:12px;
                color:#999;
              }
            }
          p{
            font-size:14px;
            color:black;
            span{
              color:#fff;
              font-size:.24rem;
              background:#0085ff;
              border-radius: 3px;
            }
          }
        }
      }
    }
   .emjBox{
        width:100%;
        background:#fff;
        padding:24px 10px;
        margin-top:10px;
      h1{
          margin-bottom:20px;
          text-align: center;
          color:black;
          font-size:18px;
          font-weight:600;
        }
      .emj{
          margin:auto;
          width:220px;
          display:flex;
          justify-content: space-around;
          text-align: center;
          div{
            position:relative;
            .fa{
              font-size:46px;
              color:#999999;
            }
            .chacolor{
              color:#899fbc;
            }
            .comcolor{
              color:orange;
            }
            .goodcolor{
              color:red;
            }
            p{
              color:#999999;
            }
            .jiaT{
              font-weight: 600;
              display:block;
              position:absolute;
              top:-18px;
              left:-7px;
              width:130%;
            }
          }
        }
        .baoqian{
          display:flex;
          justify-content: center;
          font-size:12px;
          color:red;
          margin-top:6px;
        }
        div{
          .bad{
            padding:30px 0;
            text-align: center;
            .classA{
              font-size: 14px;
              display:inline-block;
              border:1px solid #eff2f5;
              border-radius:3px;
              color:#999999;
              padding:5px 6px;
              margin:3px;
            }
            .fa{
              font-size: 14px;
              display:inline-block;
              border:1px solid #ddd;
              border-radius:3px;
              padding:7px 6px;
              margin:3px;
              color:#0097ff;
            }
            .fa1{
              font-size: 14px;
              display:inline-block;
              border:1px solid #ddd;
              border-radius:3px;
              padding:7px 6px;
              margin:3px;
              color:#0097ff;

              background:#e5f4ff;
            }
            .classA1{
              font-size: 14px;
              display:inline-block;
              border:1px solid #eff2f5;
              border-radius:3px;
              padding:5px 6px;
              margin:3px;
              color:#899fbc;
              background-color: rgba(0,0,0,0.1)
            }
          }
          .common{
            padding:30px 0;
            text-align: center;
            .classB{
              font-size: 14px;
              display:inline-block;
              border:1px solid #eff2f5;
              border-radius:3px;
              color:#999999;
              padding:5px 6px;
              margin:3px;
            }
            .fa{
              font-size: 14px;
              display:inline-block;
              border:1px solid #ddd;
              border-radius:3px;
              padding:7px 6px;
              margin:3px;
              color:#0097ff;

            }
            .fa1{
              background:#e5f4ff;
              font-size: 14px;
              display:inline-block;
              border:1px solid #ddd;
              border-radius:3px;
              padding:7px 6px;
              margin:3px;
              color:#0097ff;
            }
            .classB1{
              font-size: 14px;
              display:inline-block;
              border:1px solid #eff2f5;
              border-radius:3px;
              color:#ffaa0c;
              background:rgb(255,246,230);
              padding:5px 6px;
              margin:3px;
            }
          }
          .good{
            padding:30px 0;
            text-align: center;
            .classC{
              font-size: 14px;
              display:inline-block;
              border:1px solid #eff2f5;
              border-radius:3px;
              color:#999999;
              padding:5px 6px;
              margin:3px;
            }
            .classC1{
              font-size: 14px;
              display:inline-block;
              border:1px solid #eff2f5;
              border-radius:3px;
              color:red;
              background:rgb(255,242,234);
              padding:5px 6px;
              margin:3px;
            }
            .fa{
              color:#0097ff;
              font-size: 14px;
              display:inline-block;
              border:1px solid #ddd;
              border-radius:3px;
              padding:7px 6px;
              margin:3px;
              color:#0097ff;
            }
            .fa1{
              background:#e5f4ff;
              font-size: 14px;
              display:inline-block;
              border:1px solid #ddd;
              border-radius:3px;
              padding:7px 6px;
              margin:3px;
              color:#0097ff;
            }
          }
        }
        .comment{
          width:100%;
          height:50px;
          background:#eff2f5;
          textarea{
            width:100%;
             height:30px;
             line-height: 30px;
             border:none;
             background:#eff2f5;
             color:#cccccc;
             
          }
        }
      }
  }
  .merchant{
    margin-top:15px;
    padding:0 10px;
    .merchantTop{
      display:flex;
      justify-content: space-between;
      .shang{
        display:flex;
        justify-content: space-between;
        align-items: center;
        span{
          margin-left:10px;
          color:black;
        }
      }
      p{
        display:flex;
        align-items: center;
        .fa{
          margin-right:4px;
        }
      }
    }
    .merchantBottom{
      display:flex;
      flex-direction:column;
      align-items: center;
      background:#fff;
      margin-top:20px;
      h2{
        color:black;
        font-size:16px;
        font-weight:600;
        margin-top:30px;
      }
      .starBox{
        display:flex;
        justify-content: space-around;
        height:60px;
        width:280px;
        margin-top:30px;
        .fa{
          font-size:40px;
          display:block;
        }
      }
      .starTxt{
        width:280px;
        p{
          width:280px;
          text-align: center;
          background: #fff;
          padding:10px 0;
          position: absolute;
        }
      }
      .isBad{
        margin-top:40px;
        color:red;
        font-size:14px;
      }
      .packBox{
        margin-left:-46px;
        .pack{
          height:34px;
          margin-top:10px;
          display:flex;
          span{
            margin-right:8px;
            font-size:16px;
            color:black;
          }
          .starBox1{
            .fa{
              font-size:24px;
              padding:0 8px;
            }
          }
          .starTxt1{
            position:relative;
            p{
              width:46px;
              position:absolute;
              background:#fff;
            }
          }
        }
        .quality{
          margin-top:10px;
          display: flex;
          height:34px;
          span{
            margin-right:8px;
            font-size:16px;
            color:black;
          }
          .starBox2{
              .fa{
                font-size:24px;
                padding:0 8px;
              }
            } 
          .starTxt2{
            position:relative;
            p{
              position:absolute;
              width:46px;
              background:#fff;
            }
          }       
        }
      }
    }
  }
  .evaluateFotter{
      height:50px;
      width:100%;
      position:fixed;
      bottom:0;
      color:#eb4359;
      display:flex;
      align-items: center;
      .fotter{
        height:50px;
          p{
            margin:0 auto;
            width:95%;
            height:50px;
            font-size:16px;
            font-weight:600;
            position: absolute;
            top:50%;
            left:50%;
            transform: translate(-50%,-50%);            
            background:#cccccc;
            text-align: center;
            line-height:50px;
          }
      }
  }
}
</style>