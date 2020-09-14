<template>
  <div>
    <slider :v-bind="props">
      <div v-for="i in images" :key="i.id">
        <div class="hero-image" :style="{ backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${i.img})` }">
          <div class="hero-text">
            <h1>
              {{i.text}}
            </h1>
          </div>
        </div>
      </div>
    </slider>
<!--    <transition name="slide-fade">-->
<!--      <div>-->
<!--      <div class="hero-image" :style="{backgroundImage: 'url(' + images[currentID].img + ')'}" :key="currentID"></div>-->
<!--      <div class="hero-text">-->
<!--        <h1>-->
<!--        </h1>-->
<!--      </div>-->
<!--      </div>-->
<!--    </transition>-->
<!--      <div class="hero-image" :style="{ backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${h.img})` }">-->

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
        props: {
          arrows: false,
          dots: false,
          autoplay:true,
          slidesToShow:2,
          slidesToScroll:1,
          autoplaySpeed: 200,
          pauseOnFocus:true,
        },
        currentID:0,
        images:[
          {
            text:'Tražite posao u inozemstvu? Naš tim stručnjaka omogućuje Vam siguran posao, smještaj, stimulativna primanja te mogućnosti napretka i daljnjeg usavršavanja.',
            img:'/images/hero/hero1.png',
            id:1
          } ,
          {
            text:'Nudimo Vam učinkovito i stručno zapošljavanje svih kadrova, od visoko obrazovanih do djelatnika srednje stručne spreme.',
            img:'/images/hero/hero2.jpg',
            id:2
          },
          {
            text:'Agencija smo koja pruža mnogobrojne mogućnosti. Obratite nam se s povjerenjem i ostvarite nove poslovne uspjehe!',
            img:'/images/hero/hero3.jpg',
            id:3
          }
        ]
      }
    },
   //  methods:{
   //    changeImage(){
   //
   //       const interval = setInterval(() => this.currentID+=1 , 3000)
   //       interval
   //       if(this.currentID ===2){
   //         clearInterval(interval)
   //       }
   //       else {
   //       }
   //      }
   //  },
   // mounted(){
   //      this.changeImage()
   //   }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/mixins.scss";
  .hero-image {
    /*background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("~static/images/hero/hero2.jpg");*/
    height: 650px;
    background-position-y: 25%;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    @include phones{
      height: 575px;
      background-position: 75%;
      background-repeat: no-repeat;
    }
    @include smallphones{
      height: 400px;
    }
  }

  .hero-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    @include phones{
      width: 90% !important;
    }
    & h1 {
      @include phones {
        font-size: 20px;
      }
      @include smallphones {
        font-size: 19px;
      }
    }
  }
  .slide-fade-enter-active {
    opacity: 1;
    z-index: 10;
  }

  .slide-fade-leave-active {
    opacity: 1;
  }

  .slide-fade-enter,
  .slide-fade-leave-to {
    opacity: 0;
  }
</style>
