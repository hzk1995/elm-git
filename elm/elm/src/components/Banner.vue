<template>

    <div class="banner swiper-container">
        <div class="swiper-wrapper">
            <div 
                class="swiper-slide"
                v-for="banner in banners"
                :key="banner.id"
            >
                <img :src="banner.img" alt="">
            </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <!-- Add Arrows -->
        <!-- <div class="swiper-button-next swiper-button-white"></div>
        <div class="swiper-button-prev swiper-button-white"></div> -->
    </div>


</template>

<script>
import Swiper from "swiper"
export default {
    data(){
        return {
            banners:[
                {id:1,img:"http://img3.imgtn.bdimg.com/it/u=568393000,4080851043&fm=26&gp=0.jpg"},
                {id:2,img:"http://img5.imgtn.bdimg.com/it/u=3349823756,2154160771&fm=26&gp=0.jpg"},
                {id:3,img:"http://img3.imgtn.bdimg.com/it/u=1632270366,1989614967&fm=26&gp=0.jpg"},
            ]
        }
    },
    created(){
        this.$nextTick(()=>{
                new Swiper(".banner",{
                    loop:true,
                    autoplay:true,
                    pagination:{
                        el:".swiper-pagination"
                    }

                })
            })
    }
}
</script>

<style lang="scss">
    .swiper-slide{
        width: 100%;
        height: 200px;
        img{
            width: 100%;
            height: 100%;
        }
    }
</style>