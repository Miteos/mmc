<template>
  <div>
    <div class="grey-background ma-0">
      <h1>Kontakt</h1>
    </div>
    <contact-info></contact-info>
    <v-container>
      <div class="grid-boxes" style="">
        <v-card class="card-boxes cards-info ma-5" style="border: none !important;" v-for="i in images" :key="i.image">
          <img :src="i.image" alt="contact">
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
  import ContactInfo from '../../components/layout/ContactInfo'

  export default {
    components:{
      ContactInfo
    },
    head() {
      return {
        titleTemplate: `MMC-Group - Kontakt `,
        title: 'MMC-Group - Kontakt',
        meta: [
          {
            hid: 'Kontakt',
            name: 'Kontakt',
            content: 'Kontakt'
          }
        ]
      }
    },
    data(){
      return{
        images:[
          { image: '/images/contact/contact3.jpg'},
          { image: '/images/contact/contact2.jpg'},
          { image: '/images/contact/contact1.jpg'},
          { image: '/images/contact/contact4.jpg'},
        ],
      }
    }
  }
</script>
