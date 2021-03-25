<template>
  <v-container>
<div class="carousel">
  <slider  v-bind="settings" :responsive="settings.responsive">
    <div v-for="items in cSlidesInfo.slidesInfo" class="content-card" :key="items.comment">
      <div class="card-inner elevation-2">
        <div class="slider-img">
          <img :src="items.image">
        </div>
        <div class="slider-text">
          <p>{{items.comment}}</p>
          <p style="text-align:right !important;margin-left: auto">{{items.name}}</p>
        </div>
      </div>
    </div>
  </slider>
</div>
  </v-container>
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
          arrows: false,
          dots: true,
          slidesToShow:2,
          slidesToScroll:2,
          autoplay:true,
          pauseOnFocus:true,
          responsive:[
            {
              breakpoint:820,
              settings:{
                slidesToShow:1,
                slidesToScroll:1,
              }
            }
          ]
        },
      }
    },
    computed:{
      cSlidesInfo(){
        const locale = this.$i18n.locale
        const t = this.$t.bind(this)
        return{
          slidesInfo:[
            {name:'Natalija D.',image:'/images/reviews/user2.jpg', comment:t('comment_1',locale) },
            {name:'Ljubica B.',image:'/images/reviews/user4.jpg', comment: t('comment_2',locale) },
            {name:'Antonio J.',image:'/images/reviews/user3.jpg', comment: t('comment_3',locale) },
            {name:'Marko F.',image:'/images/reviews/user1.jpg', comment: t('comment_4',locale) },
            {name:'Maja I.',image:'/images/reviews/user5.jpg', comment:t('comment_5',locale)}
          ]
        }
      }
  }
  }
</script>

<style lang="scss">
  @import '@/assets/styles/colors.scss';
  @import "@/assets/styles/mixins.scss";

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
      margin-bottom: 80px;
      border-radius: 10px;
      border: none;
      max-height: none !important;
      @include phones{
        width: 100% !important;
        min-height:350px
      }
      & .card-inner {
        display: flex;
        @include phones{
          width: 100% !important;
          min-height:350px
        }
      }
      & .slider-img img{
        position: relative;
        background-repeat: no-repeat;
        max-height: 180px;
        background-size: cover;
        background-position: 100%;
        border-radius: 10px;
        @include phones{
          margin:15px;
        }
      }
    }
  }
  .slider-text{
    padding: 0 0 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & p {
      font-style: italic;
      margin: auto;
    }
    & p:last-child{
    text-align: right;
      width: 100%;
      margin: 0;
  }
    @include phones{
      padding:10px;
      font-size: 16px;
    }
  }
  .slick-slide {
    &:focus, a {
      outline: none !important;
    }
  }
  .slick-slide div {
    outline: none !important;
  }
  .slick-slider{
    width: 100%;
  }
  .slick-dots{
    position: relative;
    font-size: 15px;
    padding: 0 !important;
  }
  .slick-dots li button:before{
    font-size: 15px !important;
    transition: 0.2s ease-in;
  }
  .slick-dots li.slick-active button:before{
    color: $mainColor;
  }
</style>
