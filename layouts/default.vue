<template>
  <v-app>
    <v-main class="background-image" id="tab_5">
      <navbar/>
       <Nuxt />
    </v-main>
    <v-speed-dial
      v-if="this.$route.path === '/'"
      v-model="fab"
      fixed
      right
      :direction="direction"
      bottom
      transition="fab-transition"
    >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          color="primary"
          dark
          fab
        >
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-arrow-up-bold</v-icon>
        </v-btn>
      </template>
      <v-card
        shaped
        min-width="200px"
      >
        <v-list nav>
          <v-list-item v-for="c in cScroll.cards"  :key="cScroll.cards.title" @click="scrollOnClick(c.id)">{{c.title}}</v-list-item>
        </v-list>
      </v-card>
    </v-speed-dial>
    <Footer/>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

  export default {
  components:{
    'navbar': NavBar,
    Footer
  },
    head() {
      return {
        titleTemplate: `MMC Group - Medical Management Croatia Group `,
        meta: [
          {
            hid: 'og-title',
            property: 'og:title',
            content: 'MMC Group - Medical Management Croatia Group'
          },
          {
            hid: 'og-image',
            property: 'og:image',
            content:
              'http://mmc-group.hr//images/main-logo.png'
          },
          {
            hid: 'og-url',
            property: 'og:url',
            content: 'http://mmc-group.hr'
          },
          {
            hid: 'og-description',
            property: 'og:description',
            content:
              'Tražite posao u inozemstvu? Naš tim stručnjaka omogućuje Vam siguran posao, smještaj, stimulativna primanja te mogućnosti napretka i daljnjeg usavršavanja. ' +
              'Nudimo Vam učinkovito i stručno zapošljavanje svih kadrova, od visoko obrazovanih do djelatnika srednje stručne spreme. ' +
              'Obratite nam se s povjerenjem i ostvarite nove poslovne uspjehe!'
          },
          {
            hid: 'og-site_name',
            property: 'og:site_name',
            content: 'MMC Group - Medical Management Croatia Group'
          },
        ]
      }
    },
  data(){
    return{
      fab:false,
      direction:'top',
    }
  },
    computed:{
    cScroll(){
      const locale = this.$i18n.locale
      const t = this.$t.bind(this)
      return{
        cards:[
          {title: t('Početak',locale), icon:'/images/landing/landing1.jpg', id:5},
          {title: t('Tvrtke',locale), icon: '/images/landing/landing4.jpg', id:1},
          {title: t('Kandidati',locale), icon:'/images/landing/landing2.jpg', id:2},
          {title: t('Iskustva',locale), icon:'/images/landing/landing3.jpg', id:3},
          {title: t('Kontakt',locale), icon:'/images/landing/landing1.jpg', id: 4},
        ],
      }
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

<style lang="scss" scoped>
  .main-background{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .background-image{
    width: 100%;
    background-color:white;
    /*background-image: url("~static/images/dust.png");*/
    /*background-size: cover;*/
    /*background-size: 100% 20%;*/
    /*background-position: center;*/
    /*background-repeat: repeat;*/
  }
</style>
