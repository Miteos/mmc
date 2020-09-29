<template>
  <div>
    <div class="grey-background ma-0">
      <h1>Prijavi se za posao!</h1>
    </div>
    <v-container>
      <v-layout class="d-flex justify-center">
        <content-card class="apply-card">
          <template #content>
            <h2>Trenutna ponuda poslova</h2>
            <v-divider style="border-color: rgb(241 241 241) !important" class="pb-10"></v-divider>
            <div class="job-gallery">
              <v-dialog
                v-model="dialog"
                width="650px"
                style="display: none"
              >
                <template v-slot:activator="{on}">
                  <div class="image-container" v-on="on" v-for="(url,i) in images" :key="`image_${i}`">
                    <img :src="url.image" alt="Posao" @click="selectImage(url.image)">
                  </div>
                </template>
                <v-card height="90%" class="d-flex justify-center pa-5" >
                    <div class="d-flex justify-center">
                      <img class="zoomed" :src="selectedImage" alt="Posao2">
                    </div>
                </v-card>
              </v-dialog>
            </div>
          </template>
        </content-card>
      </v-layout>

      <v-layout class="d-flex justify-center">
        <content-card class="apply-card mt-0">
          <template #content>
          <h2 >Tražiš posao u inozemstvu?</h2>
            <v-divider style="border-color: rgb(241 241 241) !important" class="pb-10"></v-divider>
            <div>
              <h3>MMC Group d.o.o. je tu za Vas!</h3>
              <p>Obratite nam se s povjerenjem kako bi Vam pomogli pronaći posao iz snova!</p>
                <span>Kontaktirajte nas i doznajte sve detalje.</span>
              <p> Na ponuđenom linku dostupan je Obrazac za prijavu, koji se klikom na plavi gumb može skinuti na Vaš uređaj.
                Ispunjeni obrazac, zajedno sa Vašim životopisom, pošaljite na našu e-mail adresu: <a href="mailto:info@mmc-group.hr">info@mmc-group.hr</a>
                <br>Za sva pitanja kontaktirajte nas, od ponedjeljka do petka tijekom radnog vremena (08:00 - 16:00) na broj: <br><a href="tel:+38532524119">032 524 119</a></p>
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
    },
    data() {
      return{
        dialog:false,
        selectedImage:null,
        isActive: false,
        images:[
          { image: '/images/jobs/job1.png',id:1},
          { image: '/images/jobs/job2.png',id:2},
          { image: '/images/jobs/job3.png',id:3},
          { image: '/images/jobs/job4.png',id:4},
          { image: '/images/jobs/job5.png',id:5},
          { image: '/images/jobs/job6.png',id:6},
          { image: '/images/jobs/job7.png',id:7},
          { image: '/images/jobs/job8.png',id:8},
          { image: '/images/jobs/job9.png',id:9},
        ],
      }
    },
    methods:{
      selectImage(url){
        this.selectedImage = url
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/mixins.scss";
  .job-gallery{
    display: grid!important;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    @include tablets{
      grid-template-columns: 1fr 1fr;
    }
    @include phones{
      grid-template-columns: 1fr;
    }
    & .image-container{
      transition: 0.2s ease-in;
    }
    & .image-container:hover{
      cursor: pointer;
      box-shadow: 0 10px 50px 0 rgba(0,0,0,.05) !important;
    }
    & img{
      max-height: 325px;
      width: auto;
      @include smallphones{
        max-height: 250px;
        overflow-y: auto;
      }
      & img:hover{
        cursor: pointer;
      }
    }
  }
  .zoomed {
    max-height: 500px;
    @include smallphones {
      height: 200px;
      background-size: cover;
    }
  }
.apply-card{
  & h2{
    margin: auto;
    padding-top: 40px;
    padding-bottom: 40px;
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
    text-align: justify;
    @include smallphones {
      margin-top: 20px;
      margin-bottom: 40px;
      margin-left: auto;
      margin-right: auto;
      padding:15px;
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
