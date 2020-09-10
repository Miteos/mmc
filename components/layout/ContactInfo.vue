<template>
  <div>
    <v-container>
      <v-card class="rounded elevation-0">
        <div class="contact_info ">
          <v-list class="" >
            <v-list-item-title style="font-size: 24px" class="pt-5 pb-4">Kontakt</v-list-item-title>
            <v-list-item class="pt-5 pb-4"><span>Kontakt broj</span></v-list-item>
            <v-list-item>
              <v-btn large dark color="primary">
                <v-icon class="pr-2">
                  perm_phone_msg
                </v-icon>
                032 524 119
              </v-btn>
            </v-list-item>
            <v-list-item class="pt-8 pb-4"><span>Kontakt e-mail</span></v-list-item>
            <v-list-item>
              <v-btn large dark color="primary">
                <v-icon class="pr-2">
                  mail_outline
                </v-icon>
                <a style="color: white" href="mailto:info@mmc-group.hr">info@mmc-group.hr</a>
              </v-btn>
            </v-list-item>
          </v-list>
          <v-list class="">
            <v-list-item-title style="font-size: 24px" class="pt-5 pb-4">Adresa</v-list-item-title>
            <v-list class="">
              <v-list-item class="pt-4 ">
                <span>Ul.Josipa Jurja Strossmayera 21 </span>
              </v-list-item>
              <v-list-item>
                <span>32000, Vukovar </span>
              </v-list-item>
              <v-list-item>
                <span>Hrvatska </span>
              </v-list-item>
            </v-list>
          </v-list>
          <v-list class="" style="width: 100%">
            <v-list-item>
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

</style>
