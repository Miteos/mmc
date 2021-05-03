<template>
  <div>
    <!--    <div class="img-container">-->
    <!--      <img class="hero-img" src="@/static/images/hero2.jpg" alt="hero" />-->
    <!--    </div>-->
    <hero></hero>
    <v-lazy
      :options="{
        threshold: 0.5,
      }"
      transition="fade-transition"
    >
      <v-container>
        <div class="four-box-grid">
          <v-card
            v-for="c in cContent.cards"
            class="cards-info"
            :key="cContent.cards.title"
            @click="scrollOnClick(c.id)"
          >
            <!--        :style="{ backgroundImage: `url(${c.icon})` }"-->
            <div>
              <h2>{{ c.title }}</h2>
            </div>
          </v-card>
        </div>
      </v-container>
    </v-lazy>

    <div id="tab_1" class="grey-background">
      <span>{{ $t('Tvrtke') }}</span>
    </div>
    <v-lazy
      :options="{
        threshold: 0.5,
      }"
      transition="fade-transition"
    >
      <v-container>
        <content-card>
          <template #content>
            <div class="card-inner">
              <div class="img-card-inner">
                <img src="@/static/images/landing/landing3.jpg" />
              </div>
              <div class="text-card-inner" style="padding-left: 50px;">
                <p>
                  {{
                    $t(
                      'Nudimo Vam učinkovite odgovore i rješenja za sva kadrovska pitanja i upravljanje kadrovima. Zahvaljujući našoj stručnosti u medicinskom i skrbničkom sektoru, pioniri smo u svojoj industriji'
                    )
                  }}.
                </p>
                <p>
                  {{
                    $t(
                      'Zahvaljujući sofisticiranim mrežama u cijeloj Europi,naša baza podataka trenutno sadrži preko 60000 odgovarajućih profila podnositelja zahtjeva za zdravstveni sektor, koji se mogu fleksibilno koristiti i odmah su dostupni'
                    )
                  }}.
                </p>
                <p v-if="$i18n.locale === 'de'">
                  Durch verschiedenste Netzwerke in ganz Europa enthält unsere
                  Datenbank derzeit über 60.000 relevante Bewerberprofile des
                  Gesundheitssektors, die flexibel einsetzbar und sofort
                  verfügbar sind.
                </p>
                <p>
                  {{
                    $t(
                      'Uz Certifikat Licence, mi smo prvi i za sada jedina agencija za zapošljavanje u Hrvatskoj sa službenom agencijskom licencom'
                    )
                  }}.
                </p>
              </div>
            </div>
            <div class="text-center py-5" style="font-weight: 400;">
              <h2>{{ $t('Nudimo vam') }}:</h2>
            </div>
            <div class="grid-boxes pa-5">
              <v-card
                class="card-boxes cards-info pb-5"
                v-for="comp in cContent.companies"
                :key="comp.title"
              >
                <v-icon class="pt-5" size="78" color="secondary">
                  {{ comp.icon }}</v-icon
                >
                <p class="text-center px-5">{{ comp.title }}</p>
              </v-card>
            </div>
          </template>
        </content-card>
      </v-container>
    </v-lazy>
    <div id="tab_2" class="grey-background">
      <span>{{ $t('Kandidati') }}</span>
    </div>
    <v-lazy
      :options="{
        threshold: 0.5,
      }"
      transition="fade-transition"
    >
      <v-container>
        <content-card>
          <template #content>
            <div class="d-flex card-inner my-10 responsive reverse">
              <div class="text-card-inner">
                <p class="ma-0">
                  {{
                    $t(
                      'Tražite li novi izazov u Europi i želite profesionalnu podršku od samog početka'
                    )
                  }}?
                </p>
                <p class="ma-0">
                  {{
                    $t(
                      'Od prvog razgovora do uspješnog zaposlenja i života u inozemstvu, naši stručnjaci pružit će Vam sveobuhvatnu potporu koja uključuje'
                    )
                  }}:
                </p>
                <ul
                  class="my-2"
                  style="margin-right: auto; padding-left: 30px;"
                >
                  <li v-for="list in cContent.candidates">{{ list.title }}</li>
                </ul>
                <p>
                  {{
                    $t(
                      'Obratite nam se da zajedno realiziramo Vaš put do snova'
                    )
                  }}!
                </p>
              </div>
              <div class="card-inner">
                <div class="img-card-inner">
                  <img src="@/static/images/landing/landing1.jpg" />
                </div>
              </div>
            </div>
            <div class="card-inner my-10">
              <div class="img-card-inner">
                <img src="@/static/images/landing/landing2.jpg" />
              </div>
              <div class="text-card-inner" style="padding-left: 50px;">
                <h2>
                  {{
                    $t('Liječnice/i i medicinske sestre/medicinski tehničari')
                  }}
                </h2>
                <p>
                  {{
                    $t(
                      'Zdravstvenim djelatnicima nudimo rad u prestižnim klinikama, bolnicama i drugim institucijama u Europi. Osiguravamo siguran posao,uz kojeg dolaze izvrsna primanja, povoljna radna okolina i mnogobrojne mogućnosti napredovanja'
                    )
                  }}.
                </p>
                <p>
                  {{
                    $t(
                      'Pozivamo Vas da usavršite svoju stručnost u novom stimulativnom radnom okruženju'
                    )
                  }}.
                </p>
              </div>
            </div>
            <div class="d-flex my-10 card-inner responsive reverse">
              <div class="text-card-inner">
                <h2>{{ $t('Njegovateljice / Njegovatelji') }}</h2>
                <p>
                  {{
                    $t(
                      'Nudimo mogućnost zaposlenja u privatnim i državnim domovima u kojima su smještene osobe kojima je neophodna osobna njega u svakodnevnom životu'
                    )
                  }}.
                </p>
                <p>
                  {{
                    $t(
                      'Pružite svoju stručnu pomoć starim, nemoćnim i invalidnim osobama u radnoj okolini koja Vam osigurava poticajna primanja i ugodnu radnu atmosferu'
                    )
                  }}.
                </p>
                <p v-if="$i18n.locale === 'de'">Sprechen Sie uns an!</p>
              </div>
              <div class="card-inner">
                <div class="img-card-inner">
                  <img src="@/static/images/landing/landing5.jpg" />
                </div>
              </div>
            </div>
            <div class="card-inner my-10">
              <div class="img-card-inner">
                <img src="@/static/images/landing/landing6.jpg" />
              </div>
              <div class="text-card-inner" style="padding-left: 50px;">
                <h2>{{ $t('Ostala zanimanja') }}</h2>
                <p>
                  {{
                    $t(
                      'Svim kadrovima, od visoko obrazovanih do djelatnika srednje stručne spreme, omogućavamo sigurno i adekvatno zaposlenje u inozemstvu. Prezentirajte nam svoje potencijale i stručnost, a mi ćemo Vam ponuditi najpoželjnija i najatraktivnija radna mjesta'
                    )
                  }}!
                </p>
                <p v-if="$i18n.locale === 'de'">
                  Präsentieren Sie uns Ihr Fachwissen und Potenzial. Im Gegenzug
                  bieten wir Ihnen die begehrtesten und attraktivsten Jobs an!
                </p>
              </div>
            </div>
            <div class="text-center py-5" style="font-weight: 400;">
              <h2>{{ $t('Nudimo vam') }}:</h2>
            </div>
            <div class="grid-boxes pa-5">
              <v-card
                class="card-boxes cards-info pb-5"
                v-for="cand in cContent.candidates"
                :key="cand.title"
              >
                <v-icon class="pt-5" size="78" color="primary">
                  {{ cand.icon }}</v-icon
                >
                <p class="text-center px-5">{{ cand.title }}</p>
              </v-card>
            </div>
          </template>
        </content-card>
      </v-container>
    </v-lazy>
    <div id="tab_3" class="grey-background pb-0">
      <span>{{ $t('Iskustva korisnika') }}</span>
    </div>
    <v-lazy
      :options="{
        threshold: 0.5,
      }"
      transition="fade-transition"
    >
      <div class="grey-background ma-0 pa-0">
        <slider></slider>
      </div>
    </v-lazy>
    <div
      id="tab_4"
      class="grey-background"
      style="background-color: white !important;"
    >
      <span>{{ $t('Kontakt') }}</span>
    </div>
    <v-lazy
      :options="{
        threshold: 0.5,
      }"
      transition="fade-transition"
    >
      <contact-info></contact-info>
    </v-lazy>
  </div>
</template>

<script>
import ContentCard from '@/components/layout/ContentCard'
import GoogleMap from '@/components/GoogleMap'
import Slider from '../components/experience'
import ContactInfo from '../components/layout/ContactInfo'
import Hero from '../components/layout/Hero'

export default {
  components: {
    'content-card': ContentCard,
    'google-map': GoogleMap,
    Slider,
    ContactInfo,
    Hero,
  },
  data() {
    return {
      settings: {
        arrows: true,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        pauseOnFocus: true,
        fat: false,
      },
    }
  },
  computed: {
    cContent() {
      const locale = this.$i18n.locale
      const t = this.$t.bind(this)
      return {
        cards: [
          {
            title: t('Tvrtke', locale),
            icon: '/images/landing/landing4.jpg',
            id: 1,
          },
          {
            title: t('Kandidati', locale),
            icon: '/images/landing/landing2.jpg',
            id: 2,
          },
          {
            title: t('Iskustva', locale),
            icon: '/images/landing/landing3.jpg',
            id: 3,
          },
          {
            title: t('Kontakt', locale),
            icon: '/images/landing/landing1.jpg',
            id: 4,
          },
        ],
        candidates: [
          { title: t('Profiliranje', locale), icon: 'mdi-account-search' },
          { title: t('Odabir radnog mjesta', locale), icon: 'mdi-briefcase' },
          {
            title: t('Pravne postupke', locale),
            icon: 'mdi-account-supervisor-outline',
          },
          { title: t('Registraciju', locale), icon: 'mdi-account-plus' },
          { title: t('Osiguravanje smještaja', locale), icon: 'mdi-home-city' },
          { title: t('Prijevoz', locale), icon: 'mdi-car-convertible' },
          {
            title: t(
              'Cjelokupnu podršku tijekom boravka izvan matične države.',
              locale
            ),
            icon: 'mdi-account-search',
          },
        ],
        companies: [
          {
            title: t('Posredovanje pri zapošljavanju', locale),
            icon: 'mdi-handshake',
          },
          {
            title: t('Privremeno zapošljavanje', locale),
            icon: 'mdi-account-hard-hat',
          },
          {
            title: t('Projektni rad', locale),
            icon: 'mdi-alpha-p-box-outline',
          },
          { title: t('Savjetovanje', locale), icon: 'mdi-account-question' },
        ],
      }
    },
  },
  methods: {
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
        window.scrollTo({ top: y, behavior: 'smooth' })
      }, 200)
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/colors.scss';
@import '@/assets/styles/mixins.scss';

.reverse {
  @include tablets {
    flex-direction: column-reverse !important;
    place-items: center;
  }
}
.responsive {
  @include tablets {
    flex-direction: column;
    place-items: center;
  }
}
.grid-boxes {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  @include tablets {
    grid-template-columns: 1fr 1fr;
    flex-direction: column;
    place-items: center;
  }
  @include phones {
    grid-template-columns: 1fr;
  }
}
.card-boxes {
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
.four-box-grid {
  display: grid;
  width: 100%;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  place-items: center;
  @include tablets {
    grid-template-columns: 1fr 1fr;
  }
  @include phones {
    grid-template-columns: 1fr;
  }
}
.section-header {
  padding-top: 20px;
  margin-bottom: 10px;
}
.contact_info {
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 3fr;
}
.hero-img {
  height: 100%;
  width: 100%;
}
.card-inner {
  padding: 20px;
  display: flex;
  flex-direction: row;
  @include tablets {
    flex-direction: column;
    place-items: center;
    margin: 0 !important;
    & h2 {
      padding: 20px !important;
    }
  }
  @include phones {
    padding: 0;
    & h2 {
      padding: 0px !important;
    }
  }
}
.text-card-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  justify-content: center;
  padding: 0 20px 20px;
  width: 60%;
  @include tablets {
    width: 100%;
    padding: 20px;
    padding-left: 50px;
  }
  & h1 {
    padding-bottom: 20px;
  }
  & h2 {
    padding-right: 20px;
    padding-bottom: 20px;
    width: 100%;
    margin-bottom: 40px;
    @include tablets {
      text-align: center !important;
      margin-top: 20px;
      margin-bottom: 20px;
    }

    @include phones {
      padding: 5px !important;
    }
  }
  & p {
    padding-bottom: 10px;
    text-align: left;
    padding-right: 20px;
    width: 100%;
    font-size: 18px;
    @include tablets {
      text-align: justify !important;
      padding-top: 20px;
    }
    @include phones {
      padding: 5px !important;
    }
  }
  @include phones {
    padding: 0 !important;
  }
}
.text-card-inner h2 {
  @include tablets {
    padding-top: 20px;
  }
}
.img-card-inner {
  display: flex;
  max-height: 325px;
  border-radius: 10px;
  @include tablets {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  & img {
    max-height: 325px;
    width: auto;
    border-radius: 10px;
  }
}
.two-card-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
}
.img-container {
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
}
.content-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.cards-info {
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
  transition: 0.2s ease-in;
  @include phones {
    min-height: 125px;
    padding: 10px 20px;
  }
  & h1 {
    padding: 20px;
    @include phones {
      font-size: 24px;
    }
  }
  & .v-card__text {
    @include phones {
      padding: 0 !important;
      text-align: left;
    }
  }
}
.cards-info:hover {
  box-shadow: 0 20px 80px 0 rgba(0, 0, 0, 0.05) !important;
  cursor: pointer;
}
</style>
