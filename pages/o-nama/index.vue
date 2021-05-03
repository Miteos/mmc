<template>
  <div>
    <div class="grey-background ma-0">
      <h1>{{ $t('O nama') }}</h1>
    </div>
    <v-container>
      <v-timeline
        :align-top="alignTop"
        :dense="$vuetify.breakpoint.mdAndDown"
        :reverse="reverse"
        v-if="$vuetify.breakpoint.mdAndUp"
      >
        <v-timeline-item
          v-for="a in cAboutContent.aboutContent"
          :key="a.title"
          :fill-dot="fillDot"
          :hide-dot="hideDot"
          :icon="icon ? 'mdi-star' : ''"
          :icon-color="iconColor ? 'primary' : ''"
          :left="left"
          :right="right"
          :small="$vuetify.breakpoint.mdAndDown"
        >
          <template v-slot:icon>
            <v-avatar v-if="avatar">
              <img src="http://i.pravatar.cc/64" />
            </v-avatar>
          </template>
          <img
            class="timeline-img"
            :src="a.image"
            v-if="$vuetify.breakpoint.mdAndUp"
            slot="opposite"
          />
          <v-card class="cards-info flex-column pa-5">
            <v-card-title class="headline">{{ a.title }}</v-card-title>
            <v-card-text style="font-size: 16px;">
              {{ a.text }}
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>

      <v-card
        v-for="a in cAboutContent.aboutContent"
        :key="a.title"
        v-else
        class="cards-info flex-column pa-5 mt-5"
      >
        <v-card-title class="headline">{{ a.title }}</v-card-title>
        <v-card-text style="font-size: 16px;">
          {{ a.text }}
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  components: {},
  head() {
    return {
      titleTemplate: `MMC-Group - O nama `,
      title: 'MMC-Group - O nama',
      meta: [
        {
          hid: 'O nama',
          name: 'O nama',
          content: 'O nama',
        },
      ],
    }
  },
  data() {
    return {
      alignTop: false,
      avatar: false,
      dense: false,
      fillDot: false,
      hideDot: false,
      icon: false,
      iconColor: false,
      left: false,
      reverse: false,
      right: false,
      small: false,

      aboutContent: [
        {
          title: '2003.godina',
          text:
            'Svoj poslovni put započeli smo 2003. godine u Njemačkoj. Te je godine osnovana agencija za zapošljavanje BS Benli, čiji je osnovni zadatak pružanje pomoći u pronalasku stručnih radnika i posredovanje pri zapošljavanju u struci. Tijekom svog dugogodišnjeg rada agencija je ostvarila osamnaest partnerstava u sedam različitih njemačkih pokrajina. \n' +
            '\n' +
            'Oslanjajući se na vlastitu profesionalnost i dugogodišnji rad, prihvatili smo izazov da postanemo vodeća agencija na području zapošljavanja zdravstvenih i drugih djelatnika u Europi tijekom sljedećih nekoliko godina. Da bi zajedno postigli ovaj cilj, okupili smo tim stručnjaka iz područja financija, prava, ekonomije, filozofije i psihologije kako bi osnovali MMC Group d.o.o. u Hrvatskoj. \n',
          image: '/images/about/about1.png',
        },
        {
          title: '2020.godina',
          text:
            'MMC Group d.o.o, punog naziva Medical Management Croatia Group, agenciju koja nudi privremeno zapošljavanje i posredovanje u zapošljavanju, osnovali smo 6. kolovoza 2020. godine u Vukovaru. Osnivanjem agencije u Hrvatskoj, upotpunili smo svoj san međunarodne povezanosti i suradnje. Naša agencija trenutno je jedina agencija za zapošljavanje u Hrvatskoj koja posjeduje Certifikat Licence, odnosno službenu agencijsku licencu.\n' +
            'Pružanjem mogućnosti zaposlenja u inozemstvu, cilj nam je hrvatskim i drugim stručnjacima dati potpunu potporu u ostvarivanju novih iskustava i koraka k vlastitom napretku. Ustrajnim radom, zalaganjem i savjetovanjem želimo biti podrška u realizaciji snova.\n',
          image: '/images/main-logo.png',
        },
      ],
    }
  },
  computed: {
    cAboutContent() {
      const locale = this.$i18n.locale
      const t = this.$t.bind(this)
      return {
        aboutContent: [
          {
            title: t('2003.godina', locale),
            text: t('text_1', locale),
            image: '/images/about/about1.png',
          },
          {
            title: t('2020.godina', locale),
            text: t('text_2', locale),
            image: '/images/main-logo.png',
          },
        ],
      }
    },
  },
}
</script>

<style lang="scss">
.timeline-img {
  max-height: 150px;
  width: auto;
}
</style>
