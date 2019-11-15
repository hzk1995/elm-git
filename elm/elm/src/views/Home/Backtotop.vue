<template>
  <div class="back" @click="move" v-if="isfixed">
      <i class="fa fa-arrow-up"></i>
  </div>
</template>

<script>
export default {
    props:["isfixed"],
    methods:{
        move(){
            window.scrollTo(0,0)	
        }
    }
}
</script>

<style lang="scss">
    .back{
        width: 40px;
        height: 40px;
        background:rgba(0,0,0,0.5);
        border-radius: 50%;
        position: fixed;
        right: 30px;
        bottom: 50px;
        text-align:center;
        .fa{
            font-size: 20px;
            line-height: 40px;
            color: #ffffff;
        }
    }
</style>