<template>
  <admin-form-page-template
    ref="formPage"
    :title="`${$route.params.id ? 'Uređivanje' : 'Kreiranje'} posla`"
    return-path="/admin/poslovi-admin"
    @submit="newJob"
  >
    <v-text-field label="Naziv posla" v-model="jobForm.title" filled />
    <v-row>
      <v-col>
        <v-select
          class="select-custom"
          label="Vrsta posla"
          v-model="jobForm.type"
          :items="job_types"
          item-text="title"
          item-value="title"
          :menu-props="{ offsetY: true }"
          filled
          clearable
          multiple
        />
      </v-col>
      <v-col>
        <v-text-field label="Država" v-model="jobForm.country" filled />
      </v-col>
    </v-row>

    <editor
      v-model="jobForm.description"
      api-key="no-api-key"
      style="margin-bottom: 20px;"
      initial-value="Opis radnog mjesta..."
      :init="{
        height: 300,
        menubar: true,

        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount',
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
                     alignleft aligncenter alignright alignjustify | \
                     bullist numlist outdent indent | removeformat | help',
      }"
    />
    <v-row>
      <v-col></v-col>
    </v-row>
    <editor
      v-model="jobForm.skills"
      api-key="no-api-key"
      initial-value="Potrebna znanja..."
      :init="{
        height: 300,
        menubar: true,

        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount',
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
                     alignleft aligncenter alignright alignjustify | \
                     bullist numlist outdent indent | removeformat | help',
      }"
    />
  </admin-form-page-template>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'

export default {
  components: {
    Editor,
  },
  layout: 'admin',
  data() {
    return {
      menu: false,
      job_types: [
        { title: 'Honorarni posao', id: 1 },
        { title: 'Puno radno vrijeme', id: 2 },
        { title: 'Rad na određeno vrijeme', id: 3 },
        { title: 'Studentski posao', id: 4 },
      ],
      jobForm: {
        title: '',
        description: '',
        type: [],
        skills: '',
        country: '',
      },
    }
  },
  methods: {
    newJob() {
      console.log(this.jobForm)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/colors.scss';
</style>
