<template>
  <v-footer
    dark
    padless
    style="background-color: black"
  >
    <v-container>
    <v-card
      flat
      tile
      class="black lighten-1 white--text text-center"
      style="width: 100%"
    >
      <v-card-text>
        <v-btn
          v-for="s in social"
          :key="s.icons"
          class="mx-4 white--text"
          icon
        >
          <a :href="s.to"  target="_blank"><v-icon color="white" size="24px">{{ s.icons }}</v-icon></a>
        </v-btn>
      </v-card-text>
      <div class="footer-info">
        <div class="pt-4 d-flex"><img  src="@/static/images/main-logo.png" alt="logo" /></div>
        <div>
          <v-list color="black">
            <v-list-item class="d-flex justify-center ">
              <span>MMC GROUP D.O.O. </span>
            </v-list-item>
            <v-list-item class="d-flex justify-center">
              <span>Agencija za privremeno zapošljavanje i <br> posredovanje u zapošljavanju</span>
            </v-list-item>
          </v-list>
        </div>
        <div>
          <v-list color="black" class="endlist">
            <v-list-item class="d-flex">
              <span>ADRESA: Ul.Josipa Jurja Strossmayera 21, 32000, Vukovar </span>
            </v-list-item>
            <v-list-item class="d-flex">
              <span>TELEFON: 032 524 119</span>
            </v-list-item>
            <v-list-item class="d-flex">
              <span>RADNO VRIJEME: pon-pet: 08-16 h</span>
            </v-list-item>
          </v-list>
        </div>
      </div>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>MMC GROUP</strong>
      </v-card-text>
    </v-card>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    data(){
      return{
        social:[
          {icons:'mdi-facebook', to: 'https://www.facebook.com/MedicalManagementCroatiaGroup'},
          {icons:'mdi-linkedin', to: 'https://www.linkedin.com/company/mmcgrupa/'},
          {icons:'mdi-instagram', to: 'https://www.instagram.com/mmcgroup_doo/'}
        ],
        icons: [
          'mdi-facebook',
          'mdi-linkedin',
          'mdi-instagram',
        ],
      }
  }
  }
</script>

<style lang="scss">
  @import "@/assets/styles/mixins.scss";
  .footer-info {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: end;
    & img {
      max-height: 100px;
      width: auto;
      border-radius: 10px;
    }
    @include tablets{
      grid-template-columns: 1fr;
      place-items: center;
    }
    & .endlist {
     display: flex;
      flex-direction: column;
     text-align: right;
     justify-content: right ;
      @include tablets{
        justify-content: center !important;
        place-items: center;
      }
      & div{
        display: flex;
        justify-content: flex-end;
      }
    }
  }
</style>
