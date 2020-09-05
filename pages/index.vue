<template>
  <div>
    <div class="img-container">
      <img class="hero-img" src="@/static/images/hero2.jpg" alt="hero" />
    </div>
  <v-container >
    <div class="four-box-grid">
      <v-card v-for="c in cards" class="cards-info" :key="cards.title" :style="{ backgroundImage: `url(${c.icon})` }">
        <div>
          <h1>{{c.title}}</h1>
        </div>
      </v-card>
    </div>
  </v-container>
    <div class="grey-background">
      <span>Tvrtke</span>
    </div>
    <v-container>
      <content-card>
        <template #content>
          <div class="card-inner">
              <div class="img-card-inner">
                <img src="@/static/images/landing/landing3.jpg">
              </div>
            <div class="text-card-inner">
              <p>Nudimo vam učinkovita rješenja za sva kadrovska pitanja i upravljanje kadrovima. Sa svojom stručnošću u medicinskom i skrbničkom sektoru , pioniri smo u svojoj industriji.</p>
              <p>Uz Certifikat Licece , mi smo prvi i za sada jedina agencija za zapošljavanje u Hrvatskoj sa službenom agencijskom licencom . </p>
               <p> Zahvaljujući sofisticiranim mrežama u cijeloj Europi,
                naša baza podataka trenutno sadrži preko 60000 odgovarajućih profila
                podnositelja zahtjeva za zdravstveni sektor, koji se mogu fleksibilno koristiti i odmah su dostupni .</p>
            </div>
          </div>
          <div class="text-center py-5" style="font-weight: 400">
            <h1>Nudimo vam:</h1>
          </div>
          <div class="grid-boxes pa-5">
            <v-card class="card-boxes cards-info pb-5" v-for="comp in companies" :key="comp.title">
              <v-icon class="pt-5" size="78" color="secondary"> {{comp.icon}}</v-icon>
              <p class="text-center px-5">{{comp.title}}</p>
            </v-card>
          </div>
        </template>
      </content-card>
    </v-container>
    <div class="grey-background">
      <span>Kandidati</span>
    </div>
    <v-container>
        <content-card>
          <template #content>
            <div class="d-flex">
              <div class="text-card-inner">
                <p>Tražite li novi izazov u Europi i želite profesionalnu podršku od samog početka?</p>
                <p>Od prvog razgovora za ići na uspješnom s posredovanja, naši stručnjaci su uvijek pri ruci. </p>
                  <p>Uz našu sveobuhvatnu podršku ,
                  pratimo vas na putu do posla iz snova u najpoznatijim klinikama i institucijama u Europi.</p>
                <p>Pozovite nas da stvorimo smislen profil s našim stručnjacima.</p>
              </div>
            <div class="card-inner">
              <div class="img-card-inner">
                <img src="@/static/images/landing/landing1.jpg">
              </div>
            </div>
            </div>
            <div class="text-center py-5" style="font-weight: 400">
              <h1>Nudimo vam:</h1>
            </div>
            <div class="grid-boxes pa-5">
              <v-card class="card-boxes cards-info pb-5" v-for="cand in candidates" :key="cand.title">
                <v-icon class="pt-5" size="78" color="primary"> {{cand.icon}}</v-icon>
                <p class="text-center px-5">{{cand.title}}</p>
              </v-card>
            </div>
          </template>
        </content-card>
    </v-container>
<!--    <div class="grey-background">-->
<!--      <span>Iskustva korisnika</span>-->
<!--    </div>-->
    <v-container>
<!--    <slider></slider>-->
    </v-container>
      <div class="grey-background">
        <span>Kontakt</span>
      </div>
      <v-container>
        <v-card class="rounded elevation-0">
          <div class="contact_info ">
            <v-list class="" >
              <v-list-item-title style="font-size: 24px" class="pt-5 pb-4">Kontakt</v-list-item-title>
              <v-list-item class="pt-5 pb-4"><span>Kontakt broj</span></v-list-item>
              <v-list-item>
                <v-btn large dark color="primary">
                  <v-icon class="pr-2">
                    perm_phone_msg
                  </v-icon>
                  032 524 119
                </v-btn>
              </v-list-item>
              <v-list-item class="pt-8 pb-4"><span>Kontakt e-mail</span></v-list-item>
              <v-list-item>
                <v-btn large dark color="primary">
                  <v-icon class="pr-2">
                    mail_outline
                  </v-icon>
                  <a style="color: white" href="mailto:info@mmc-group.hr">info@mmc-group.hr</a>
                </v-btn>
              </v-list-item>
            </v-list>
            <v-list class="">
              <v-list-item-title style="font-size: 24px" class="pt-5 pb-4">Adresa</v-list-item-title>
              <v-list class="">
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
            <v-list class="" style="width: 100%">
              <v-list-item>
                <google-map></google-map>
              </v-list-item>
            </v-list>
          </div>
        </v-card>
      </v-container>
    </div>
</template>

<script>
  import ContentCard from '@/components/layout/ContentCard'
  import GoogleMap from '@/components/GoogleMap'
  import Slider from '../components/Slider'
  import get from 'lodash/get'

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
        cards:[
          {title: 'Tvrtke', icon: '/images/landing/landing4.jpg'},
          {title: 'Kandidati', icon:'/images/landing/landing2.jpg'},
          {title: 'Iskustva', icon:'/images/landing/landing3.jpg'},
          {title: 'Kontakt', icon:'/images/landing/landing1.jpg'}
        ],
        candidates:[
          {title: 'Profiliranje', icon: 'mdi-account-search'},
          {title: 'Odabir radnog mjesta', icon:'mdi-briefcase'},
          {title: 'Pravne postupke', icon:'mdi-account-supervisor-outline'},
          {title: 'Registraciju', icon:'mdi-account-plus'},
          {title: 'Osiguravanje smještaja', icon:'mdi-home-city'},
          {title: 'Prijevoz', icon:'mdi-car-convertible'},
          {title: 'Cjelokupnu podršku tijekom boravka izvan matične države.', icon:'mdi-account-search'}
        ],
        companies:[
          {title: 'Posredovanje pri zapošljavanju', icon: 'mdi-handshake'},
          {title: 'Privremeno zapošljavanje', icon:'mdi-account-hard-hat'},
          {title: 'Projektni rad', icon:'mdi-alpha-p-box-outline'},
          {title: 'Savjetovanje.', icon:'mdi-account-question'},
        ]


      }
    }
  }
</script>

<style lang="scss">
  @import '@/assets/styles/colors.scss';

  .grid-boxes{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 30px;



  }
.card-boxes{
  display: flex;
  flex-direction: column;
  place-items: center;
  grid-gap: 30px;
  width: 100%;
  cursor: default !important;

}
  .four-box-grid{
    display: grid;
    width: 100%;
    grid-gap: 30px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    place-items: center;
  }
  .section-header{
    padding-top: 20px;
    margin-bottom: 10px;
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
    justify-content: center;
    padding: 20px;
    width: 60%;
    & h1 {
      padding-bottom: 20px;
    }
    & p {
      padding-bottom: 10px;
      text-align: left;
      padding-left: 50px;
      padding-right: 20px;
      width: 100%;
      font-size: 18px;
    }

  }
  .img-card-inner{
    display: flex;
    height: 325px;
    border-radius: 10px;
    & img{
      height: 325px;
      width: auto;
      border-radius: 10px;
    }
  }
  .two-card-grid{
    display: grid;
    grid-template-columns: 1fr;
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
  .cards-info{
    width: 100%;
    min-height: 200px;
    display: flex;
    justify-content: center;
    place-items: center;
    border-radius: 10px !important;
    border: 1px solid rgb(244 245 248) !important;
    background-size: cover;
    background-position: center;
    box-shadow: none !important;
    background-color: rgb(255 255 255);
    transition:  0.2s ease-in;
    & h1{
      padding: 20px;
    }
  }
  .cards-info:hover{
    box-shadow: 0 20px 80px 0 rgba(0,0,0,.05) !important;
    cursor: pointer;
  }
</style>
