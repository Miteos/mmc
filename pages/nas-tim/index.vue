<template>
 <div>
   <div class="grey-background ma-0">
     <span>Upoznajte naš tim!</span>
   </div>
   <v-container>
     <div v-for="items in teamContent" class="content-card">
       <div class="card-inner cards-info justify-start">
         <div class="slider-img">
                    <img :src="items.pics">
         </div>
         <div class="text-card-inne">
           <h2 class="pb-5">{{items.title}}</h2>
           <p>{{items.name}}</p>
           <p>KONTAKT:<a class="px-3" :href="`mailto:${items.mail}`">{{items.mail}}</a></p>
           <p>{{items.city}}</p>
         </div>
       </div>
     </div>
   </v-container>
 </div>
</template>

<script>
  export default {
    data(){
      return{
        teamContent:[
          {name:'Antonio Mork', title:'Direktor',mail:'a.mork@mmc-group.hr',city:'Ennigerloh, Njemačka',pics:'/images/team/toni.jpg'},
          {name:'Sercan Benli', title:'Direktor',mail:'s.benli@mmc-group.hr',city:'Ennigerloh, Njemačka', pics:'/images/team/sercan.png'},
          {name:'Marcel Pähler', title:'Direktor',mail:'m.paehler@mmc-group.hr',city:'Ennigerloh, Njemačka', pics:'/images/team/marcel.png'},
          {name:'Ana Bradvica, mag. psych', title:'Voditelj ljudskih potencijala',mail:'a.bradvica@mmc-group.hr',city:'Vukovar, Hrvatska',pics:'/images/placeholder/image-placeholder.jpg'},
          {name:'Magdalena Kratofil, univ. bacc. biotechn. et pharm. inv. (student)', title:'Upravitelj administracije',mail:'m.kratofil@mmc-group.hr',city:'Vukovar, Hrvatska',pics:'/images/placeholder/image-placeholder.jpg'},
          {name:'Matej Kapular, univ. bacc. biol. (student)', title:'IT podrška',mail:'m.kapulark@mmc-group.hr',city:'Osijek, Hrvatska',pics:'/images/team/ja.jpg'}
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .slider-img img{
    position: relative;
    background-repeat: no-repeat;
    max-height: 193px;
    background-size: cover;
    background-position: 100%;
    border-radius: 10px;
    margin-right:30px ;
  }
</style>
