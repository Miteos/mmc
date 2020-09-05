<template>
<div class="carousel">
  <slider  v-bind="settings">
    <div class="content-card">
      <div class="card-inner">
        <div class="slider-img">
          <img src="@/static/images/landing/landing1.jpg">
        </div>
        <div class="slider-text">
          <h2>Pero Perić</h2>
          <p>Odlična usluga</p>
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
        slidesInfo:[
          {name:'Pero perić'}
        ]
      }
    }
  }
</script>

<style lang="scss">
  .carousel{
    display: flex;
    margin-top: 30px;
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
      & .slider-img{
        max-height: 150px;
       width: 50px;
      }
    }

  }
  .slick-slider{
    width: 100%;
  }
  .slick-dots{
    position: relative;
  }
</style>
