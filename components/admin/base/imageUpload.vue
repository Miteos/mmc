<template>
  <v-row>
    <v-file-input
      :value="computedFile"
      :label="label"
      chips
      style="max-width: 200px;"
      class="mr-5"
      @change="selectFile"
      @click:clear="clearFile"
    />
    <v-img :src="imageURL" max-width="90" max-height="75" />
  </v-row>
</template>

<script>
export default {
  props: {
    value: {
      validator(v) {
        return !v || typeof v === 'object'
      },
      required: true
    },
    label: {
      type: String,
      required: false,
      default: ''
    },
    thumbnail: {
      type: String,
      required: false,
      default: ''
    },
    params: {
      type: Object,
      required: false,
      default: () => {}
    },
    url: {
      type: String,
      required: false,
      default: '/admin/media'
    },
    required: {
      type: Boolean
    }
  },
  data() {
    return {
      file: null,
      localUrl: null
    }
  },
  computed: {
    imageURL() {
      return this.localUrl || Object(this.value).path || this.thumbnail || ''
    },
    computedFile: {
      get() {
        return (
          this.file ||
          (this.value && new File([], this.value.client_name || '')) ||
          null
        )
      }
    }
  },
  methods: {
    //  Called from parent component with this.$refs.<name>.upload()
    async upload() {
      if (this.file) {
        const formData = new FormData()
        formData.append('file', this.file)

        //  Upload the file and get file data back
        const response = await this.$axios.post(this.url, formData, {
          params: {
            ...this.params
          }
        })

        this.$emit('input', response.data.data[0])
      } else if (this.required && !this.value)
        throw new Error(`${this.label || 'Slika'} je potrebna`)
    },

    //  For setting local url
    selectFile(v) {
      if (!v) return

      this.file = v

      const fr = new FileReader()
      fr.onload = () => {
        this.localUrl = fr.result
      }
      try {
        fr.readAsDataURL(this.file)
      } catch (e) {
        this.$toast.error('Image selection failed!')
      }
    },
    clearFile() {
      this.localUrl = null
      this.$emit('input', null)

      //  Clears old thumbnail image
      this.$emit('clear')
    }
  }
}
</script>
