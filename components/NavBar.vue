<template>
  <div class=" nav-wrapper">
    <nav>
      <nuxt-link to="/">
        <img src="@/static/images/main-logo.png" alt="logo" />
      </nuxt-link>
      <ul>
        <li v-for="l in cNavContent.links"><nuxt-link :to="l.to">{{l.name}}</nuxt-link></li>
        <li class="mx-3"><a class="mr-0 ml-10 reset-border">{{this.$i18n.locale}}</a>
          <v-menu style="box-shadow: none !important;" offset-y left>
            <template v-slot:activator="{ on }">
              <v-icon v-on="on">
                arrow_drop_down
              </v-icon>
            </template>
            <v-card  shaped style="min-width: 200px" class="px-1 mt-2 elevation-0">
              <v-list flex wrap nav>
                <v-list-item
                  @click="changeLocale('hr')">
                  <img class="flags-img mx-2 d-flex justify-space between" src="@/static/images/flags/croatia.png">
                  HRVATSKI
                </v-list-item>
                <v-list-item @click="changeLocale('en')">
                  <img class="flags-img mx-2 d-flex justify-space between" src="@/static/images/flags/english.png">
                  ENGLISH
                </v-list-item>
                <v-list-item
                  @click="changeLocale('de')">
                  <img class="flags-img mx-2 d-flex justify-space between" src="@/static/images/flags/germany.png">
                  DEUTSCH
                </v-list-item>
              </v-list>
            </v-card>
          </v-menu>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        links:[
          {name: 'Kontakt', to:'/kontakt'},
          {name: 'O nama', to:'/o-nama'},
          {name: 'Team', to:'/nas-tim'},
          // {name: 'Documents', to:'/documents'},
          {name: 'Galerija', to:'/galerija'}
        ],
        languages: [
          {lang: 'ENG', to: "switchLocalePath('en')"},
          {lang: 'DE', to: "switchLocalePath('de')"},
          {lang: 'HRV', to: "switchLocalePath('hr')"},
        ],
      }
    },
    computed:{
      availableLocales() {
        return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      },
          cNavContent(){
            const locale = this.$i18n.locale
            const t = this.$t.bind(this)
            return{
              links:[
                {name: t(`Kontakt`, locale), to:'/kontakt'},
                {name: t(`O nama`, locale), to:'/o-nama'},
                {name: t(`Team`, locale), to:'/nas-tim'},
                // {name: 'Documents', to:'/documents'},
                {name: t(`Galerija`, locale), to:'/galerija'}
              ],
              languages: [
                {lang: 'ENG', to: "switchLocalePath('en')"},
                {lang: 'DE', to: "switchLocalePath('de')"},
                {lang: 'HRV', to: "switchLocalePath('hr')"},
              ],
            }
          }
    },
    methods: {
      changeLocale(locale) {
        this.$i18n.setLocaleCookie(locale)
        this.$router.push(this.switchLocalePath(locale))
        this.$router.go(0)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .flags-img{
    max-height: 30px;

    width: 50px;
    padding-right: 10px;
  }
  nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    text-transform: uppercase;
    font-size: 2rem;
    max-width: 150rem;
    width: 90%;
    & img {
      max-height: 100px;
    }
  }

  .nav-wrapper{
    width: 100%;
    background-color: white;
  }
  .nav-title{
    font-size: 4rem;
    font-weight: 300;
    transform: translateX(-100rem);
    animation: slideIn .5s forwards;
    color: green;
  }
  nav ul{
    display: flex;
  }

  nav ul li{
    list-style: none;
    cursor:pointer;
  }
  nav ul li a{
    padding: 1.5rem 0;
    font-size: 18px;
    margin: 0 3rem;
    position: relative;
    letter-spacing: 2px;
    color:black !important;
  }

  nav ul li a:last-child{
    margin-right: 0;
  }

  nav ul li a::before,
  nav ul li a::after{
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #77BE43;
    left: 0;
    transform: scaleX(0);
    transition: all .5s;
  }

  nav ul li a::before{
    top: 0;
    transform-origin: left;
  }

  nav ul li a::after{
    bottom: 0;
    transform-origin: right;
  }

  nav ul li a:hover::before,
  nav ul li a:hover::after{
    transform: scaleX(1);
  }

  @keyframes slideIn {
    from{

    }
    to{
      transform: translateX(0);
    }
  }
  .reset-border:after,.reset-border:before{
    background-color: white !important;
  }
  .v-menu__content{
    box-shadow: none !important;
  }
</style>
