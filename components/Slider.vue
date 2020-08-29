<template>
<div class="carousel">
  <slider  v-bind="settings">
    <div class="content-card">
      <div class="card-inner">
        <div class="img-card-inner"></div>
        <div class="text-card-inner">
          <h2>Neki title</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
    </div>
    <div class="content-card">
      <div class="card-inner">
        <div class="img-card-inner"></div>
        <div class="text-card-inner">
          <h2>Neki title</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
    </div>
    <div class="content-card" >
      <div class="card-inner">
        <div class="img-card-inner"></div>
        <div class="text-card-inner">
          <h2>Neki title</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
    </div>
  </slider>
</div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    components:{
      'slider':VueSlickCarousel
    },
    data(){
      return{
        settings: {
          arrows: true,
          dots: true,
          slidesToShow:2,
          slidesToScroll:2,
          autoplay:true,
          pauseOnFocus:true
        },
      }
    }
  }
</script>

<style lang="scss">
  .carousel{
    display: flex;
    margin-top: 30px;
    background-color: #7f828b;
    align-content: center !important;
    margin-bottom: 80px;
    & .content-card{
      margin: auto;
      width: 90% !important;
      max-width: 100%;
      display: flex !important;
      margin-top: 80px;
      border: none;
      max-height: none !important;
    }

  }
  .slick-slider{
    width: 100%;
  }
  .slick-dots{
    position: relative;
  }
</style>
