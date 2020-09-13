<template>
  <div>
<!--    <div class="img-container">-->
<!--      <img class="hero-img" src="@/static/images/hero2.jpg" alt="hero" />-->
<!--    </div>-->
    <hero></hero>
  <v-container >
    <div class="four-box-grid">
      <v-card v-for="c in cards" class="cards-info" :key="cards.title" @click="scrollOnClick(c.id)" >
<!--        :style="{ backgroundImage: `url(${c.icon})` }"-->
        <div>
          <h1>{{c.title}}</h1>
        </div>
      </v-card>
    </div>
  </v-container>
    <div id="tab_1" class="grey-background">
      <span>Tvrtke</span>
    </div>
    <v-container>
      <content-card>
        <template #content>
          <div class="card-inner">
              <div class="img-card-inner">
                <img src="@/static/images/landing/landing3.jpg">
              </div>
            <div class="text-card-inner" style="padding-left: 50px">
              <p>Nudimo Vam učinkovite odgovore i rješenja za sva kadrovska pitanja i upravljanje kadrovima, Zahvaljujući našoj stručnosti u medicinskom i skrbničkom sektoru, pioniri smo u svojoj industriji.</p>
              <p> Zahvaljujući sofisticiranim mrežama u cijeloj Europi,
                naša baza podataka trenutno sadrži preko 60000 odgovarajućih profila
                podnositelja zahtjeva za zdravstveni sektor, koji se mogu fleksibilno koristiti i odmah su dostupni .</p>
              <p>Uz Certifikat Licece , mi smo prvi i za sada jedina agencija za zapošljavanje u Hrvatskoj sa službenom agencijskom licencom . </p>
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
    <div id="tab_2" class="grey-background">
      <span>Kandidati</span>
    </div>
    <v-container>
        <content-card>
          <template #content>
            <div class="d-flex card-inner my-10 responsive">
              <div class="text-card-inner" >
                <p class="ma-0">Tražite li novi izazov u Europi i želite profesionalnu podršku od samog početka?</p>
                <p class="ma-0">Od prvog razgovora do uspješnog zaposlenja i života u inozemstvu, naši stručnjaci pružit će Vam sveobuhvatnu potporu koja uključuje:</p>
                <ul class="mb-2" style="margin-right: auto; padding-left: 30px">
                  <li v-for="list in candidates">{{list.title}}</li>
                </ul>
                 <p>Obratite nam se da zajedno realiziramo Vaš put do snova!</p>
              </div>
            <div class="card-inner">
              <div class="img-card-inner">
                <img src="@/static/images/landing/landing1.jpg">
              </div>
            </div>
            </div>
            <div class="card-inner my-10">
              <div class="img-card-inner">
                <img src="@/static/images/landing/landing2.jpg">
              </div>
              <div class="text-card-inner" style="padding-left: 50px">
                <h2>Liječnice/i i medicinske sestre/medicinski tehničari</h2>
                <p>Zdravstvenim djelatnicima nudimo rad u prestižnim klinikama, bolnicama i drugim institucijama u Europi. Osiguravamo siguran posao,
                  uz kojeg dolaze izvrsna primanja, povoljna radna okolina i mnogobrojne mogućnosti napredovanja. </p>
                <p> Pozivamo Vas da usavršite svoju stručnost u novom stimulativnom radnom okruženju.</p>
              </div>
            </div>
            <div class="d-flex my-10 card-inner responsive">
              <div class="text-card-inner">
                <h2>Njegovateljice / Njegovatelji</h2>
                <p>Nudimo mogućnost zaposlenja u privatnim i državnim domovima u kojima su smještene osobe kojima je neophodna osobna njega u svakodnevnom životu.</p>
                <p>Pružite svoju stručnu pomoć starim, nemoćnim i invalidnim osobama u radnoj okolini koja Vam osigurava poticajna primanja i ugodnu radnu atmosferu.</p>
              </div>
              <div class="card-inner">
                <div class="img-card-inner">
                  <img src="@/static/images/landing/landing5.jpg">
                </div>
              </div>
            </div>
            <div class="card-inner my-10">
              <div class="img-card-inner">
                <img src="@/static/images/landing/landing6.jpg">
              </div>
              <div class="text-card-inner" style="padding-left: 50px">
                <h2>Ostala zanimanja</h2>
                <p>Svim kadrovima, od visoko obrazovanih do djelatnika srednje stručne spreme, omogućavamo sigurno i adekvatno zaposlenje u inozemstvu.
                  Prezentirajte nam svoje potencijale i stručnost, a mi ćemo Vam ponuditi najpoželjnija i najatraktivnija radna mjesta! </p>
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
    <div id="tab_3" class="grey-background pb-0">
      <span>Iskustva korisnika</span>
    </div>
   <div class="grey-background ma-0 pa-0">
    <slider></slider>
   </div>
    <div id="tab_4" class="grey-background" style="background-color: white !important;">
      <span>Kontakt</span>
    </div>
      <contact-info></contact-info>
    </div>
</template>

<script>
  import ContentCard from '@/components/layout/ContentCard'
  import GoogleMap from '@/components/GoogleMap'
  import Slider from '../components/experience'
  import ContactInfo from '../components/layout/ContactInfo'
  import Hero from '../components/layout/Hero'
  import get from 'lodash/get'

  export default {
    components:{
      'content-card':ContentCard,
      'google-map': GoogleMap,
     Slider,
      ContactInfo,
      Hero
    },
    data(){
      return{
        settings: {
          arrows: true,
          dots: true,
          slidesToShow:2,
          slidesToScroll:2,
          autoplay:true,
          pauseOnFocus:true,
          fat:false
        },
        cards:[
          {title: 'Tvrtke', icon: '/images/landing/landing4.jpg', id:1},
          {title: 'Kandidati', icon:'/images/landing/landing2.jpg', id:2},
          {title: 'Iskustva', icon:'/images/landing/landing3.jpg', id:3},
          {title: 'Kontakt', icon:'/images/landing/landing1.jpg', id: 4}
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
    },
    methods:{
      scrollOnClick(value) {
        if (this.el === value) {
          this.el = 0
        } else {
          this.el = value
        }
        setTimeout(() => {
          const id = `tab_${value}`
          const yOffset = 0
          const element = document.getElementById(id)
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({top: y, behavior: 'smooth'})
        }, 200)
      },
    }
  }
</script>

<style lang="scss">
  @import '@/assets/styles/colors.scss';
  @import "@/assets/styles/mixins.scss";

  .responsive{
  @include tablets{
    flex-direction: column;
    place-items: center;
  }
  }
  .grid-boxes{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 30px;
    @include tablets{
      grid-template-columns: 1fr 1fr;
      flex-direction: column;
      place-items: center;
    }
    @include phones{
      grid-template-columns: 1fr;
    }



  }
.card-boxes{
  display: flex;
  flex-direction: column;
  place-items: center;
  grid-gap: 30px;
  width: 100%;
  cursor: default !important;
  & img {
    height: 256px;
    width: auto;
    @include phones {
      height: 200px;
    }
  }

}
  .four-box-grid{
    display: grid;
    width: 100%;
    grid-gap: 30px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    place-items: center;
    @include tablets{
      grid-template-columns: 1fr 1fr;
    }
    @include phones{
      grid-template-columns: 1fr;
    }

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
    @include tablets{
      flex-direction: column;
      place-items: center;
      margin: 0 !important;
      & h2 {
        padding:20px !important;
      }
    }
    @include phones{
      padding:0;
      & h2 {
      padding:0px !important;
    }
    }
  }
  .text-card-inner{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    justify-content: center;
    padding: 20px;
    width: 60%;
    @include tablets{
      width: 100%;
      padding:20px;
      padding-left: 50px;
    }
    & h1 {
      padding-bottom: 20px;
    }
    & h2{
      padding-right: 20px;
      padding-bottom: 20px;
      width: 100%;
      margin-bottom: 40px;
      @include tablets{
       text-align: center !important;
        padding-top: 20px;
        margin-bottom: 0 ;
      }

      @include phones{
        padding: 5px !important;
      }
    }
    & p {
      padding-bottom: 10px;
      text-align: left;
      padding-right: 20px;
      width: 100%;
      font-size: 18px;
      @include tablets{
        text-align: justify !important;
        padding-top: 20px
      }
      @include phones{
        padding: 5px !important;
      }
    }
    @include phones{
      padding: 0 !important;
    }
  }
  .text-card-inner h2{
    @include tablets{
      padding-top: 20px;
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
    & .v-card__text{
      @include phones{
        padding:0 !important;
        text-align: left;
      }
    }
  }
  .cards-info:hover{
    box-shadow: 0 20px 80px 0 rgba(0,0,0,.05) !important;
    cursor: pointer;
  }
</style>
