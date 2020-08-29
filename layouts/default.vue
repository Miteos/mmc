<template>
  <v-app>
    <v-main>
    <navbar/>
    <Nuxt />
    </v-main>
  </v-app>
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
    /*background-color:#0092C8;*/
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
