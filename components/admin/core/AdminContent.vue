<template>
  <v-sheet
    height="400"
    class="overflow-hidden"
    style="position: relative;"
  >
    <v-container class="fill-height">
      <v-row
        align="center"
        justify="center"
      >
        <v-btn
          color="pink"
          dark
          @click.stop="drawer=!drawer"
        >
          Toggle
        </v-btn>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  props:{
    drawer:{
      type:Boolean,
      default:true,
    }
  },
  methods:{

  }
}
</script>
