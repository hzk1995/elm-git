<template>
  <div class="nav">
      <ul>
          <li 
             v-for="nav in navs"
             :key="nav.id"
          >
              <a href="#">
                  <img :src="nav.img" alt="">
                  <p>{{nav.title}}</p>
              </a>
          </li>
      </ul>
      <div class="super">
          <div class="left">
              <img src="https://cube.elemecdn.com/8/0e/4dd212d831becab6e3ebd484c0941jpeg.jpeg?x-oss-process=image/format,webp/resize,w_34" alt="">
              <p class="big">超级会员</p>
              <p>·</p>
              <p>每月领20元红包</p>
          </div>
          <div class="right">
              <a href="">立即开通 ></a>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            navs:[
                {id:1,img:"https://cube.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed",title:"美食"},
                {id:3,img:"https://cube.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed",title:"大牌惠吃"},
                {id:4,img:"https://cube.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed",title:"商超便利"},
                {id:5,img:"https://cube.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed",title:"水果"},
                {id:6,img:"https://cube.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed",title:"医药健康"},
                {id:7,img:"https://cube.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed",title:"浪漫鲜花"},
                {id:8,img:"https://cube.elemecdn.com/e/58/bceb19258e3264e64fb856722c3c1jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed",title:"跑腿代购"},
                {id:9,img:"https://cube.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed",title:"汉堡披萨"},
                {id:10,img:"https://cube.elemecdn.com/c/21/e42997b86b232161a5a16ab813ae8jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed",title:"厨房生鲜"},
                {id:2,img:"https://cube.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed",title:"甜品饮品"}
            ]
        }
    }
}
</script>

<style lang="scss">
    .nav{
        width: 100%;
        background: #fff;
        ul{
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-wrap:wrap;
            li{
                width: 18%;
                margin:10px 0;
                a{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    img{
                        width: 40px;
                        height: 40px;
                    };
                    p{
                        font-size: 14px;
                        margin-top: 5px;
                    };
                }
            }
        };
        .super{
            display: flex;
            justify-content: space-between;
            padding: 12px 10px;
            background: #f3dda0;
            margin:10px;
            border-radius: 5px;
            .left{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                img{
                    width: 20px;
                    height: 20px;
                };
                 .big{
                    font-weight: 900;
                    font-size: 16px;
                };
                p{
                    margin-left: 10px;
                    color: #644f1b;
                }

            };
            .right{
                display: flex;
                justify-content: flex-end;
                padding-right: 10px;
                align-items: center;
                a{
                    color: #644f1b;
                }
            }
        }
    }
</style>