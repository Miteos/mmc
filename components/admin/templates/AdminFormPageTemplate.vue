<template>
  <div v-if="flatPage" class="ma-n5">
    <v-card-title
      style="border-bottom: 1px solid orange; position: relative;"
      class="py-2"
    >
      {{ title }}
      <v-spacer />
      <v-row dense justify="end">
        <v-col cols="auto">
          <v-btn
            small
            color="grey lighten-3"
            rounded
            nuxt
            :to="returnPath"
            append
          >
            <v-icon left>clear</v-icon>Odustani
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn
            small
            :color=$vuetify.theme.themes.light.secondary
            rounded
            nuxt
            append
            class="white--text"
            :disabled="isLoading.length || confirmDisabled"
            :loading="confirmLoading"
            @click="$emit('submit')"
          >
            <v-icon left>check</v-icon>Spremi
          </v-btn>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text>
      <slot />
    </v-card-text>
  </div>
  <v-dialog
    v-else
    v-model="showDialog"
    width="700"
    persistent
    no-click-animation
    @input="closeDialog"
  >
    <v-card>
      <v-card-title v-text="title" />
      <v-card-text>
        <slot />
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn text @click="closeDialog">Odustani</v-btn>
        <v-btn
          color="green"
          class="white--text"
          :disabled="confirmDisabled"
          :loading="confirmLoading"
          @click="$emit('submit')"
        >
          Spremi
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    returnPath: {
      type: String,
      required: true
    },
    flatPage: {
      type: Boolean,
      default: false
    },
    confirmDisabled: {
      type: Boolean,
      default: false
    },
    confirmLoading: {
      type: Boolean,
      default: false
    }
  },
  provide() {
    return {
      loading: this.isLoading
    }
  },
  data() {
    return {
      showDialog: false,
      isLoading: []
    }
  },
  mounted() {
    this.showDialog = true
  },
  methods: {
    closeDialog() {
      this.showDialog = false
      setTimeout(() => {
        this.$router.push(this.returnPath)
      }, 300)
    }
  }
}
</script>
