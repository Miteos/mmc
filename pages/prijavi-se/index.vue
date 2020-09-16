<template>
  <div>
    <div class="grey-background ma-0">
      <h1>Prijavi se za posao!</h1>
    </div>
    <v-container>

      <v-layout class="d-flex justify-center">
        <content-card class="apply-card">
          <template #content>
          <h2 >Tražiš posao u inozemstvu?</h2>
            <div>
              <p >MMC-Group je tu za Vas da vam pomogne naći posao iz snova! Kontaktirajte nas i saznajte sve detalje.<br> U ponuđenom linku vam se nalazi obrazac za prijavu koji se klikom može skinuti na vaš uređaj.<br>
                Ispunjeni obrazac, zajedno sa Vašim životopisom, pošaljite na našu e-mail adresu: <a href="mailto:info@mmc-group.hr">info@mmc-group.hr</a> <br>Za sve detalje ili nedoumice kontaktirajte nas na broj: <a href="tel:+38532524119">032 524 119</a></p>
              <v-btn  large dark color="primary" class="mobile-responsive">
                <v-icon  class="pr-2">mdi-arrow-collapse-down</v-icon><a download style="color: white" href="/documents/obrazac-prijava.docx">Obrazac za prijavu</a>
              </v-btn>
            </div>
          </template>
        </content-card>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import ContentCard from '@/components/layout/ContentCard'
  export default {
    components:{
      'content-card':ContentCard
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/mixins.scss";
.apply-card{
  & h2{
    margin: auto;
    padding-top: 40px;
    @include smallphones {
      font-size: 20px;
    }
  }
  & div{
    padding-bottom:40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & p{
    max-width: 800px;
    margin: 40px;
    @include smallphones {
      margin-top: 20px;
      margin-bottom: 40px;
      margin-left: auto;
      margin-right: auto;
      padding:15px;
      text-align: justify;
    }
  }
  & .mobile-responsive {
    width: 225px;
    @include smallphones {
      width: 90%;
    }
  }
}
</style>
