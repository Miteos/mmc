<template>
  <div class="nav-wrapper">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      disable-resize-watcher
      hide-overlay
      style="top: 100px;"
      width="100%"
      class="hidden-md-and-up elevation-0"
      wrap
    >
      <v-list class="d-flex flex-column pt-0 text--left">
        <v-btn
          color="white"
          active-class="tertiary"
          elevation="0"
          class="nav-buttons left"
          style="display: flex; justify-content: end; padding: 25px;"
          v-for="l in cNavContent.links"
          link
          :to="l.to"
          >{{ l.name }}</v-btn
        >
        <v-list-item class="pa-0">
          <v-expansion-panels tile flat accordion>
            <v-expansion-panel>
              <v-expansion-panel-header
                class="pl-4"
                style="
                  text-transform: uppercase;
                  font-size: 18px;
                  padding: 25px !important;
                "
                >{{ $t('Odabir jezika') }}</v-expansion-panel-header
              >
              <v-expansion-panel-content class="elevation-0">
                <v-list flex wrap nav>
                  <v-list-item
                    v-for="l in cNavContent.languages"
                    :key="l.value"
                    @click="changeLocale(l.value)"
                  >
                    <img
                      class="flags-img mx-2 d-flex justify-space between"
                      :src="l.image"
                    />
                    {{ l.lang }}
                  </v-list-item>
                </v-list>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar height="100px" class="navigation">
      <nuxt-link class="logo" to="/">
        <img
          class="logo"
          style="max-height: 85px;"
          src="@/static/images/main-logo.png"
          alt="logo"
        />
      </nuxt-link>
      <v-spacer></v-spacer>
      <v-toolbar-items
        class="navigation-links"
        v-if="$vuetify.breakpoint.mdAndUp"
      >
        <v-btn
          active-class="tertiary"
          elevation="0"
          color="white"
          class="nav-buttons"
          v-for="link in cNavContent.links"
          :key="link.id"
          link
          :to="link.to"
        >
          {{ link.name }}
        </v-btn>
        <v-menu
          transition="fab-transition"
          style="box-shadow: none !important;"
          offset-y
          bottom
        >
          <template v-slot:activator="{ on }">
            <v-btn
              @click="menu2 = true"
              text
              height="72px"
              class="nav-buttons"
              v-on="on"
            >
              {{ $i18n.locale }}
              <v-icon
                style="padding-left: 6px; padding-bottom: 2px;"
                small
                v-if="menu2"
                >mdi-chevron-up
              </v-icon>
              <v-icon
                small
                style="padding-left: 3px; padding-bottom: 2px;"
                v-else
                >mdi-chevron-down</v-icon
              >
            </v-btn>
          </template>
          <v-card style="min-width: 200px;" class="px-1 mt-2 elevation-0">
            <v-list flex wrap nav>
              <v-list-item
                v-for="t in cNavContent.languages"
                :key="t.value"
                @click="changeLocale(t.value)"
              >
                <img
                  class="flags-img mx-2 d-flex justify-space between"
                  :src="t.image"
                />
                {{ t.lang }}
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
      </v-toolbar-items>
      <v-app-bar-nav-icon
        style="font-size: 40px;"
        v-if="$vuetify.breakpoint.smAndDown"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      menu2: false,
      drawer: false,
      links: [
        { name: 'Kontakt', to: '/kontakt/' },
        { name: 'O nama', to: '/o-nama/' },
        { name: 'Team', to: '/team/' },
        // {name: 'Documents', to:'/documents'},
        { name: 'Galerija', to: '/galerija' },
      ],
      languages: [
        { lang: 'ENG', to: "switchLocalePath('en')" },
        { lang: 'DE', to: "switchLocalePath('de')" },
        { lang: 'HRV', to: "switchLocalePath('hr')" },
      ],
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
    cNavContent() {
      const locale = this.$i18n.locale
      const t = this.$t.bind(this)
      return {
        links: [
          { name: t(`Kontakt`, locale), to: '/kontakt/', id: 1 },
          { name: t(`O nama`, locale), to: '/o-nama/', id: 2 },
          { name: t(`Team`, locale), to: '/team/', id: 3 },
          { name: t(`Prijavi se`, locale), to: '/prijavi-se/', id: 4 },
          // {name: 'Documents', to:'/documents'},
          // {name: t(`Galerija`, locale), to:'/galerija'}
        ],
        languages: [
          { lang: 'Hrvatski', image: '/images/flags/croatia.png', value: 'hr' },
          { lang: 'English', image: '/images/flags/english.png', value: 'en' },
          { lang: 'Deutsch', image: '/images/flags/germany.png', value: 'de' },
        ],
        locale,
      }
    },
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.setLocaleCookie(locale)
      this.$router.push(this.switchLocalePath(locale))
      this.$router.go(0)
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/colors.scss';
@import '@/assets/styles/mixins.scss';
.logo {
  max-height: 85px;
  @include phones {
    max-height: 70px !important;
  }
}
.nav-buttons {
  font-size: 16px !important;
  min-width: 100px !important;
  padding: 10px;
  border: 1px solid $tertiaryColor !important;
  & .left {
    border: 1px solid $tertiaryColor !important;
  }
}
.flags-img {
  max-height: 30px;
  width: 50px;
  padding-right: 10px;
}
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  text-transform: uppercase;
  background-color: white !important;
  box-shadow: none !important;
  font-size: 2rem;
  max-width: 150rem;
  width: 90%;
  & img {
    max-height: 100px;
  }
  & a {
    max-height: 80px;
  }
  & .v-toolbar__content {
    width: 100% !important;
    @include phones {
      padding-left: 0 !important;
    }
  }
  @include tablets {
    margin: 0 !important;
  }
}

.nav-wrapper {
  width: 80%;
  margin: auto;
  background-color: white;
  @include highresmonitors {
    width: 100% !important;
    margin: 0;
    display: flex;
    place-items: center;
  }
}
.nav-title {
  font-size: 4rem;
  font-weight: 300;
  transform: translateX(-100rem);
  animation: slideIn 0.5s forwards;
  color: green;
}
.navigation ul {
  display: flex;
}

.navigation ul li {
  list-style: none;
  cursor: pointer;
}
.navigation .nav-link a {
  padding: 1.5rem 0 !important;
  font-size: 18px !important;
  margin: 0 3rem !important;
  position: relative !important;
  letter-spacing: 2px !important;
  color: black !important;
}

.navigation ul li a:last-child {
  margin-right: 0;
}

.navigation ul li a::before,
.navigation ul li a::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #77be43;
  left: 0;
  transform: scaleX(0);
  transition: all 0.5s;
}

.navigation ul li a::before {
  top: 0;
  transform-origin: left;
}

.navigation ul li a::after {
  bottom: 0;
  transform-origin: right;
}

.navigation ul li a:hover::before,
.navigation ul li a:hover::after {
  transform: scaleX(1);
}

@keyframes slideIn {
  from {
  }
  to {
    transform: translateX(0);
  }
}
.reset-border:after,
.reset-border:before {
  background-color: white !important;
}
</style>
