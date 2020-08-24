<template>
  <div>
    <div class="img-container">
      <img class="hero-img" src="@/static/images/hero2.jpg" alt="hero" />
    </div>
  <v-container>
    <div class="two-card-grid">
      <content-card>
        <template #content>
          <div class="card-inner">
              <div class="img-card-inner"></div>
            <div class="text-card-inner">
              <h2>Neki title</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
        </template>
      </content-card>
      <content-card>
        <template #content>
          <div class="card-inner">
            <div style="width: 100%" class="text-card-inner">
              <h2>Neki title</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
        </template>
      </content-card>
    </div>
    <div class="main-content-container">
      <content-card>
        <template #content>
          <google-map></google-map>
        </template>
      </content-card>
      <content-card>
        <template #content>
          <div class="card-inner">
            <div style="width: 50%" class="text-card-inner">
              <h2>Kontakt?</h2>
              <p>Lorem Ipsum is simply dummy rinter took a galley of type and scrambled it to make a type specimen book.
             Lorem Ipsum is secimen book.
             Lorem Ipsum ian unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div style="width: 50%" class="text-card-inner">
              <h2>Kontakt?</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div style="width: 50%" class="text-card-inner">
              <h2>Kontakt?</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </template>
      </content-card>
    </div>
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
    </v-container>
  </div>
</template>

<script>
  import ContentCard from '@/components/layout/ContentCard'
  import GoogleMap from '@/components/GoogleMap'
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    components:{
      'content-card':ContentCard,
      'google-map': GoogleMap,
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
  .hero-img{
    height: 100%;
    width: 100%;
  }
  .card-inner{
    padding: 20px;
    display: flex;
    flex-direction: row;
  }
  .text-card-inner{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    padding: 20px;
    width: 60%;
    & h2 {
      padding-bottom: 20px;
    }
    & p {
      padding-bottom: 10px;
    }

  }
  .img-card-inner{
    display: flex;
    border:1px solid #0092C8;
    border-radius: 10px;
    height: 100%;
    width: 300px;
  }
  .two-card-grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap:40px;
  }
  .img-container{
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
  }
  .content-wrapper{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>
