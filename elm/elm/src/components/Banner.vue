<template>
<div class="banner">
        <div class="swiper-container">
        <div class="swiper-wrapper">
            <div 
                class="swiper-slide"
                v-for="banner in bannners"
                :key="banner.id"
            >
                <img src="" alt="">
            </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination swiper-pagination-white"></div>
        <!-- Add Arrows -->
        <div class="swiper-button-next swiper-button-white"></div>
        <div class="swiper-button-prev swiper-button-white"></div>
    </div>

</div>
</template>

<script>
import Swiper from "swiper"
export default {
    data(){
        return {
            banners:[]
        }
    },
    created(){
        new Swiper(".banner",{
            loop:true
        })
    }
}
</script>

<style>

</style>