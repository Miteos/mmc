<template>
  <div>
    <div class="img-container">
      <img class="hero-img" src="@/static/images/hero2.jpg" alt="hero" />
    </div>
  <v-container >
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
    <slider></slider>
    <div class="d-flex justify-center">
      <h1 class="section-header">
        Kontaktirajte nas:
      </h1>
    </div>
    <v-card class="contact_info rounded">
      <v-list >
        <v-list-item-title style="font-size: 24px" class="pt-5 pb-4">Kontakt</v-list-item-title>
        <v-list-item class="pt-5 pb-4"><span>Kontakt broj</span></v-list-item>
        <v-list-item>
          <v-btn large dark color="secondary">
            <v-icon class="pr-2">
              perm_phone_msg
            </v-icon>
            032 524 119
          </v-btn>
        </v-list-item>
        <v-list-item class="pt-8 pb-4"><span>Kontakt e-mail</span></v-list-item>
        <v-list-item>
          <v-btn large dark color="secondary">
            <v-icon class="pr-2">
              mail_outline
            </v-icon>             mail@randommail.com
          </v-btn>
        </v-list-item>
     </v-list>
      <v-list>
          <v-list-item-title style="font-size: 24px" class="pt-5 pb-4">Adresa</v-list-item-title>
          <v-list>
            <v-list-item class="pt-4 ">
              <span>Ul.Josipa Jurja Strossmayera 21 </span>
            </v-list-item>
            <v-list-item>
              <span>32000, Vukovar </span>
            </v-list-item>
            <v-list-item>
              <span>Hrvatska </span>
            </v-list-item>
          </v-list>
      </v-list>
      <v-list style="width: 100%">
        <v-list-item>
          <google-map></google-map>
        </v-list-item>
      </v-list>
    </v-card>
    </v-container>
  </div>
</template>

<script>
  import ContentCard from '@/components/layout/ContentCard'
  import GoogleMap from '@/components/GoogleMap'
  import Slider from '../components/Slider'

  export default {
    components:{
      'content-card':ContentCard,
      'google-map': GoogleMap,
     Slider
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
  @import '@/assets/styles/colors.scss';

  .section-header{
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid black;
    margin-bottom: 50px;
  }
  .contact_info{
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr  3fr;
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
