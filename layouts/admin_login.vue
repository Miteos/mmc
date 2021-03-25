<template>
  <v-app>
    <div class="blue_background">
      <v-main>
        <nuxt />
      </v-main>
    </div>
  </v-app>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/colors.scss';
.blue_background {
  background-image: linear-gradient(135deg,  $mainColor 100%, $secondaryColor);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
