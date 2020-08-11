<template>
  <div class="main-background">
    <navbar/>
    <Nuxt />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

  export default {
  components:{
    'navbar': NavBar
  }

}
</script>

<style lang="scss" scoped>
  .main-background{
    background-color:#0092C8;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
