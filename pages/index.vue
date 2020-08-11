<template>
    <div class="main-content-container">

          <div class="img-container">
            <img class="hero-img" src="@/static/images/hero.jpg" alt="hero" />
          </div>
      <content-card>
        <template #content>
          <google-map></google-map>
        </template>
      </content-card>
    </div>
</template>

<script>
  import ContentCard from '@/components/layout/ContentCard'
  import GoogleMap from '@/components/GoogleMap'

  export default {
    components:{
      'content-card':ContentCard,
      'google-map': GoogleMap
    }
  }
</script>

<style lang="scss">
  .main-content-container{
    width: 90%;
    display: flex;
    flex-direction: column;
  }
  .hero-img{
    height: 100%;
    width: 100%;
  }
  .img-container{
    padding: 20px;
  }
</style>
