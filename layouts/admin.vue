<template>
  <v-app class="admin_background">
   <DashboardCoreDrawer/>
   <DashboardCoreAppBar/>
    <div>
      <v-main class="ma-5">
        <nuxt />
      </v-main>
    </div>
  </v-app>
</template>

<script>
import DashboardCoreDrawer from '~/components/admin/core/Drawer'
import DashboardCoreAppBar from '~/components/admin/core/AppBar'
export default {
  components:{
    DashboardCoreAppBar,
    DashboardCoreDrawer,
  },
  data(){
    return{
      openDrawer:true
    }
  }
}
</script>
<style lang="scss">
.admin-background{
  background-color: black !important;
}
.v-application--wrap{
  background-color: rgb(238 238 238);
}
</style>
