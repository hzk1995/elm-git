<template>
  <div id="app">  
    
	  <router-view></router-view>
  </div>
</template>

<style lang="scss">


</style>

<script>

export default {
 
  created(){
    this.$router.push("/")
  }

}
</script>
