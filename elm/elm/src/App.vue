<template>
  <div id="app">  
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<style lang="scss">


</style>

<script>

export default {
 
  created(){
    this.$router.push("/")
    this.$store.dispatch("initCars")
  }

}
</script>
