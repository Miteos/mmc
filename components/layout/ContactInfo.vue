<template>
  <div>
    <v-container>
      <v-card class="rounded elevation-0">
        <div class="contact_info ">
          <v-list class="c1" >
            <v-list-item-title style="font-size: 24px" class="pt-5 pb-4">{{$t('Kontakt')}}</v-list-item-title>
            <v-list-item class="pt-5 pb-4"><span>{{$t('Kontakt broj')}}</span></v-list-item>
            <v-list-item>
              <v-btn large dark color="primary">
                <v-icon  class="pr-2">
                  perm_phone_msg
                </v-icon>
               <a style="color: white" href="tel:+385 032 524 119">032 524 119</a>
              </v-btn>
            </v-list-item>
            <v-list-item class="pt-8 pb-4"><span>{{$t('Kontakt')}} e-mail</span></v-list-item>
            <v-list-item>
              <v-btn large dark color="primary">
                <v-icon class="pr-2">
                  mail_outline
                </v-icon>
                <a style="color: white" href="mailto:info@mmc-group.hr">info@mmc-group.hr</a>
              </v-btn>
            </v-list-item>
          </v-list>
          <v-list class="c2">
            <v-list-item-title style="font-size: 24px" class="pt-5 pb-4">{{$t('Adresa')}}</v-list-item-title>
            <v-list class="">
              <v-list-item class="pt-4 ">
                <span>Ul.Josipa Jurja Strossmayera 21 </span>
              </v-list-item>
              <v-list-item>
                <span>32000, Vukovar </span>
              </v-list-item>
              <v-list-item>
                <span>{{$t('Hrvatska')}}</span>
              </v-list-item>
            </v-list>
          </v-list>
          <v-list class="c3" style="width: 100%">
            <v-list-item class="pa-0">
                <google-map></google-map>
            </v-list-item>
          </v-list>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  @import "@/assets/styles/mixins.scss";
  .contact_info{
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr  3fr;
    @include tablets{
      .c3{
        grid-area: 2 / 1 / span 1 / span 5;
      }
      .c1{
        grid-area: 1/1 /span 1 / span 2;
        padding-left: 20px;
      }
    }
    @include phones {
      grid-template-rows: auto auto auto;
      .c1{
        width: 100%;
        grid-area: 1 / 1 / span 1/ span 5;
        padding-left: 5px !important;
      }
      .c2{
        width: 100%;
        grid-area: 2 / 1 / span 1/ span 5;
        padding-left: 5px;
      }
      .c3{
        width: 100%;
        grid-area: 3 / 1 / span 1 / span 5;
      }
    }
    /*.c1{*/
    /*  grid-area: 1;*/
    /*}*/
    /*.c2{*/
    /*  grid-area: 2;*/
    /*}*/
  }
</style>
