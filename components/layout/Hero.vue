<template>
  <v-lazy
    v-model="isActive"
    :options="{
          threshold: .5
        }"
    transition="fade-transition">
    <hero-slider ref="slider1" :v-bind="props">
      <div v-for="i in cHero.images" :key="i.id">
        <div class="hero-image" :style="{ backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${i.img})` }">
          <div class="hero-text">
            <h1>
              {{i.text}}
            </h1>
          </div>
        </div>
      </div>
    </hero-slider>
<!--      <transition name="fade">-->
<!--        <div  v-for="ID in [currentID]" :key="ID">-->
<!--          <div-->
<!--            @mouseover="stopRotation"-->
<!--            @mouseleave="changeImage"-->
<!--            class="hero-image"-->
<!--            :style="{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + images[ currentID % images.length].img + ')'-->
<!--            ,transition:'0.5s ease-in'}" >-->
<!--          </div>-->
<!--        </div>-->
<!--      </transition>-->
<!--        <div class="hero-text">-->
<!--          <h1> {{images[currentID % images.length].text}}-->
<!--          </h1>-->
<!--        </div>-->


<!--      <div class="hero-image" :style="{ backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${h.img})` }">-->

    </v-lazy>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  export default {
    components:{
      'heroSlider':VueSlickCarousel
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
        timer:null,
        isActive:false,
        // images:[
        //   {
        //     text:'Tražite posao u inozemstvu? Naš tim stručnjaka omogućuje Vam siguran posao, smještaj, stimulativna primanja te mogućnosti napretka i daljnjeg usavršavanja.',
        //     img:'/images/hero/hero1.png',
        //     id:0
        //   } ,
        //   {
        //     text:'Nudimo Vam učinkovito i stručno zapošljavanje svih kadrova, od visoko obrazovanih do djelatnika srednje stručne spreme.',
        //     img:'/images/hero/hero2.jpg',
        //     id:1
        //   },
        //   {
        //     text:'Agencija smo koja pruža mnogobrojne mogućnosti. Obratite nam se s povjerenjem i ostvarite nove poslovne uspjehe!',
        //     img:'/images/hero/hero3.jpg',
        //     id:2
        //   }
        // ]
      }
    },
    methods: {
      //      changeImage(){
      //        this.timer = setInterval(this.next, 3000);
      //        },
      //     stopRotation(){
      //       clearTimeout(this.timer);
      //       this.timer = null;
      //     },
      //     next(){
      //        this.currentID+=1
      //     }
      //
      //    },
      //   mounted() {
      //     this.changeImage()
      //
      //   },
    },
    computed: {
      // currentImage: function() {
      //   return this.images[Math.abs(this.currentID) % this.images.length];
      // }
      cHero(){
        const locale = this.$i18n.locale
        const t = this.$t.bind(this)
        return{
          images:[
            {
              text:t(`hero.hero_1`, locale),
              img:'/images/hero/hero1.png',
              id:0
            } ,
            {
              text:t(`hero.hero_2`, locale),
              img:'/images/hero/hero2.jpg',
              id:1
            },
            {
              text:t(`hero.hero_3`, locale),
              img:'/images/hero/hero3.jpg',
              id:2
            }
          ]
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/mixins.scss";
  .hero-image {
    /*background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("~static/images/hero/hero2.jpg");*/
    height: 700px;

    background-position-y: 20%;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    transition: 0.2s ease-in-out;
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
  .fade-enter-active, .fade-leave-active {
    transition: all 0.2s ease;
    overflow: hidden;
    visibility: visible;
    opacity: 1;
    position: absolute;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
    visibility: hidden;
  }
</style>
