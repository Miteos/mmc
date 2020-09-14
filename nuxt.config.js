export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'MMC-Group - Medical Management Croatia Group',
    titleTemplate: 'MMC Group - Medical Management Croatia Group',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Tražite posao u inozemstvu? Naš tim stručnjaka omogućuje Vam siguran posao, smještaj, stimulativna primanja te mogućnosti napretka i daljnjeg usavršavanja.' +
          'Nudimo Vam učinkovito i stručno zapošljavanje svih kadrova, od visoko obrazovanih do djelatnika srednje stručne spreme.' +
          'Agencija smo koja pruža mnogobrojne mogućnosti. Obratite nam se s povjerenjem i ostvarite nove poslovne uspjehe!',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/styles/globals.scss',
    '@/assets/styles/colors.scss',
    '@/assets/styles/mixins.scss',
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/vuetify'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'en',
            name: 'EN',
            file: 'en.json',
          },
          {
            code: 'hr',
            name: 'HRV',
            file: 'hr.json',
          },
          {
            code: 'de',
            name: 'DE',
            file: 'de.json',
          },
        ],
        detectBrowserLanguage: {
          useCookie: true,
          alwaysRedirect: true,
          cookieKey: 'i18n_redirected',
        },
        lazy: true,
        langDir: 'locales/',
        strategy: 'no_prefix',
        defaultLocale: 'hr',
        parsePages: true,
      },
    ],
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  vuetify: {
    theme: {
      dark: false,
      light: true,
      themes: {
        light: {
          primary: '#0092C8',
          secondary: '#77BE43',
          tertiary: '#f1f1f2',
          accent: '#9c27b0',
        },
      },
    },
  },
  build: {},
}
