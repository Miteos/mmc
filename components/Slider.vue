<template>
  <v-container>
<div class="carousel">
  <slider  v-bind="settings">
    <div v-for="items in slidesInfo" class="content-card">
      <div class="card-inner elevation-2">
        <div class="slider-img">
          <img :src="items.image">
        </div>
        <div class="slider-text">
          <h2>{{items.name}}</h2>
          <p>{{items.comment}}</p>
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
          arrows: true,
          dots: true,
          slidesToShow:2,
          slidesToScroll:2,
          autoplay:true,
          pauseOnFocus:true
        },
        slidesInfo:[
          {name:'Natalija D.',image:'/images/reviews/user2.jpg', comment:'"Tim me oduševio svojom ljubaznošću i susretljivošću. Sve preporuke!"' },
          {name:'Ljubica B.',image:'/images/reviews/user4.jpg', comment: '"Zahvalna sam MMC GROUP d.o.o., koja mi je svojom profesionalnošću i odgovornošću pomogla da imam odličan posao u inozemstvu te skladan i dostojan život."' },
          {name:'Antonio J.',image:'/images/reviews/user3.jpg', comment: '"Agencija nudi širok raspon mogućnosti te sam uz njezinu pomoć napokon pronašao smještaj i stalan posao u Njemačkoj s kojim sam i više nego zadovoljan."' },
          {name:'Marko F.',image:'/images/reviews/user1.jpg', comment: '"Iz razloga što se cijeli tim svojim velikim zalaganjem trudi odgovoriti na sva Vaša pitanja i savjetovati o najboljem odabiru posla, preporučio bih agenciju svima onima koji se još uvijek dvoume oko odlaska u inozemstvo."' },
          {name:'Maja I.',image:'/images/reviews/user5.jpg', comment: '"Brzo i jednostavno zaposlenje uz veliku potporu!"' }
        ]
      }
    }
  }
</script>

<style lang="scss">
  @import '@/assets/styles/colors.scss';
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
      & .slider-img img{
        position: relative;
        background-repeat: no-repeat;
        max-height: 180px;
        background-size: cover;
        background-position: 100%;
        border-radius: 10px;
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
      text-align: justify;
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
