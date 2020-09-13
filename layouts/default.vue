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
          <v-list-item v-for="c in cards"  :key="cards.title" @click="scrollOnClick(c.id)">{{c.title}}</v-list-item>
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
  data(){
    return{
      fab:false,
      direction:'top',
      cards:[
        {title: 'Početak', icon:'/images/landing/landing1.jpg', id:5},
        {title: 'Tvrtke', icon: '/images/landing/landing4.jpg', id:1},
        {title: 'Kandidati', icon:'/images/landing/landing2.jpg', id:2},
        {title: 'Iskustva', icon:'/images/landing/landing3.jpg', id:3},
        {title: 'Kontakt', icon:'/images/landing/landing1.jpg', id: 4},
      ],
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
