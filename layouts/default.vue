<template>
  <v-app>
    <v-main class="background-image">
      <navbar/>
       <Nuxt />
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

  export default {
  components:{
    'navbar': NavBar,
    Footer
  }

}
</script>

<style lang="scss" scoped>
  .main-background{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .background-image{
    width: 100%;
    background-color:white;
    /*background-image: url("~static/images/dust.png");*/
    /*background-size: cover;*/
    /*background-size: 100% 20%;*/
    /*background-position: center;*/
    /*background-repeat: repeat;*/
  }
</style>
