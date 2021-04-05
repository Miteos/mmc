<template>
  <admin-form-page-template
    ref="formPage"
    :title="$route.params.id ? 'Uređivanje članka' : 'Kreiranje novog članka'"
    return-path="/admin/vijesti-admin"
    flat-page
    :confirm-loading="submitting"
    @submit="submitArticle"
  >
    <v-row>
      <v-col cols="12" class="py-0" wrap>
        <v-row class="pt-5">
          <v-col cols="8">
            <v-form ref="articleForm">
              <v-card elevation="2" class="mb-4">
                <v-card-text>
                  <v-text-field
                    v-model="article.supertitle"
                    dense
                    outlined
                    :disabled="article.interview"
                    :color=$vuetify.theme.themes.light.secondary
                    label="Nadnaslov"
                  />
                  <v-text-field
                    v-model="article.title"
                    dense
                    outlined
                    :rules="rules.required"
                    :color=$vuetify.theme.themes.light.secondary
                    label="Naslov *"
                    required
                  />
                  <v-text-field
                    v-model="article.subtitle"
                    dense
                    outlined
                    :disabled="article.interview"
                    :color=$vuetify.theme.themes.light.secondary
                    label="Podnaslov"
                  />
                </v-card-text>

              </v-card>


              <v-card elevation="2">
                <v-card-title class="admin_title_card py-2">
                  Uvod *
                </v-card-title>
                <v-card-actions
                  class="d-block"
                  :class="{ cardError: errors.intro }"
                >
                  <editor
                    v-model="article.intro"
                    api-key="no-api-key"
                    :init="{
                      height: 300,
                      menubar: true,
                      plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                      ],
                      toolbar:
                        'undo redo | formatselect | bold italic backcolor | \
                     alignleft aligncenter alignright alignjustify | \
                     bullist numlist outdent indent | removeformat | help'
                    }"
                    @input="errors.intro = false"
                  />
                </v-card-actions>
              </v-card>

              <v-card elevation="2" class="mt-5">
                <v-card-title class="admin_title_card py-2">
                  Tekst *
                </v-card-title>
                <v-card-actions
                  class="d-block"
                  :class="{ cardError: errors.text }"
                >
                  <editor
                    v-model="article.text"
                    api-key="no-api-key"
                    :init="{
                      height: 300,
                      menubar: true,

                      plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                      ],
                      toolbar:
                        'undo redo | formatselect | bold italic backcolor | \
                     alignleft aligncenter alignright alignjustify | \
                     bullist numlist outdent indent | removeformat | help'
                    }"
                    @input="errors.text = false"
                  />
                </v-card-actions>
              </v-card>

              <v-card elevation="2" class="mt-5">
                <v-card-title class="admin_title_card py-2">Autor</v-card-title>
                <v-card-actions class="d-block">
                  <v-text-field
                    v-model="article.redirect"
                    dense
                    outlined
                    class="pt-5"
                    :color=$vuetify.theme.themes.light.secondary
                    :rules="[rules.url]"
                    label="Link za preusmjeravanje"
                  />
                  <v-text-field
                    v-model="article.source"
                    dense
                    outlined
                    :color=$vuetify.theme.themes.light.secondary
                    :rules="[rules.url]"
                    label="Preuzeto sa portala"
                  />
                  <v-text-field
                    v-model="article.link"
                    dense
                    outlined
                    :color=$vuetify.theme.themes.light.secondary
                    :rules="[rules.url]"
                    label="Adresa originala"
                  />
                  <v-row>
                    <v-col class="py-0">
                      <v-select
                        v-model="article.author_id"
                        :items="authors"
                        item-value="id"
                        item-text="title"
                        label="Autor clanka"
                        outlined
                        dense
                        clearable
                      >
                      </v-select>
                    </v-col>
                    <span class="pt-2">ili</span>
                    <v-col class="py-0">
                      <v-text-field v-model="article.author" dense outlined />
                    </v-col>
                  </v-row>
                </v-card-actions>
              </v-card>
            </v-form>
          </v-col>
          <v-col cols="4">
            <v-card elevation="2">
              <v-card-title class="admin_title_card py-2">
                Datum i vrijeme objave *
              </v-card-title>
              <v-row
                class="d-flex align-center ma-0"
                :class="{ cardError: errors.date }"
              >
                <v-col cols="6">
                  <h5>Datum</h5>
                  <select
                    v-model="localValue.day"
                    class="admins_number_select"
                    @input="errors.date = false"
                  >
                    <option v-for="n in 30" :key="n">{{ n }}</option>
                  </select>
                  <select
                    v-model="localValue.month"
                    class="admins_number_select"
                    @input="errors.date = false"
                  >
                    <option v-for="n in 12" :key="n">{{ n }}</option>
                  </select>
                  <select
                    v-model="localValue.year"
                    class="admins_number_select"
                    @input="errors.date = false"
                  >
                    <option v-for="n in arrayYears" :key="n">{{ n }}</option>
                  </select>
                </v-col>
                <v-col cols="6">
                  <h5>Vrijeme</h5>
                  <select
                    v-model="localValue.hour"
                    class="admins_number_select"
                    @input="errors.date = false"
                  >
                    <option>0</option>
                    <option v-for="n in 23" :key="n">{{ n }}</option>
                  </select>

                  <select
                    v-model="localValue.minutes"
                    class="admins_number_select"
                    @input="errors.date = false"
                  >
                    <option>0</option>
                    <option v-for="n in 59" :key="n">{{ n }}</option>
                  </select>
                </v-col>
              </v-row>
            </v-card>
            <v-card class="mt-5" elevation="2">
              <v-card-title class="admin_title_card py-2">Prikaz</v-card-title>
              <v-row class="ma-0">
                <v-col cols="6">
                  <v-checkbox
                    v-model="article.visible"
                    hide-details
                    class="ma-0"
                    :color=$vuetify.theme.themes.light.secondary
                    label="Prikazuj se"
                  />
                  <v-checkbox
                    v-model="article.listed"
                    hide-details
                    class="ma-0"
                    :color=$vuetify.theme.themes.light.secondary
                    label="Nalazi se na popisu"
                  />
                </v-col>
                <v-col cols="6">
                  <v-checkbox
                    v-model="article.highlighted"
                    hide-details
                    class="ma-0"
                    :color=$vuetify.theme.themes.light.secondary
                    label="Naglašen"
                  />
                  <v-checkbox
                    v-model="article.interview"
                    hide-details
                    class="ma-0"
                    :color=$vuetify.theme.themes.light.secondary
                    label="Intervju"
                    @click.native="
                      () => {
                        article.info = ''
                        article.supertitle = null
                        article.subtitle = null
                        errors.info = false
                      }
                    "
                  />
                </v-col>
              </v-row>
            </v-card>
            <v-card elevation="2" class="mt-5">
              <v-card-title class="admin_title_card py-2">
                Uvod u intervju
              </v-card-title>
              <v-card-actions
                class="d-block"
                :class="{ cardError: errors.info }"
              >
                <editor
                  v-model="article.info"
                  api-key="no-api-key"
                  :disabled="!article.interview"
                  :init="{
                    height: 300,
                    menubar: true,

                    plugins: [
                      'advlist autolink lists link image charmap print preview anchor',
                      'searchreplace visualblocks code fullscreen',
                      'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar:
                      'undo redo | formatselect | bold italic backcolor | \
                     alignleft aligncenter alignright alignjustify | \
                     bullist numlist outdent indent | removeformat | help'
                  }"
                  @input="errors.info = false"
                />
              </v-card-actions>
            </v-card>
            <v-card class="mt-5" elevation="2">
              <v-card-title class="admin_title_card py-2">
                Kategorije
              </v-card-title>
              <v-row class="ma-0">
                <v-col>
                  <h5 class="pl-3">{{ cat1.title }}</h5>
                  <div v-for="cat in cat1.subcategories" :key="cat.id">
                    <v-checkbox
                      v-model="article.categories"
                      multiple
                      hide-details
                      :value="cat.id"
                      :color=$vuetify.theme.themes.light.secondary
                      class="px-3 ma-0"
                      :label="cat.title"
                    />
                  </div>
                </v-col>
                <v-col>
                  <h5 class="pl-3">{{ cat2.title }}</h5>
                  <div v-for="cat2 in cat2.subcategories" :key="cat2.id">
                    <v-checkbox
                      v-model="article.categories"
                      multiple
                      hide-details
                      :value="cat2.id"
                      :color=$vuetify.theme.themes.light.secondary
                      class="px-3 ma-0"
                      :label="cat2.title"
                    />
                  </div>
                </v-col>
                <v-col>
                  <h5 class="pl-3">{{ cat3.title }}</h5>
                  <div v-for="cat3 in cat3.subcategories" :key="cat3.id">
                    <v-checkbox
                      v-model="article.categories"
                      multiple
                      :value="cat3.id"
                      hide-details
                      :color=$vuetify.theme.themes.light.secondary
                      class="px-3 ma-0"
                      :label="cat3.title"
                    />
                  </div>
                </v-col>
              </v-row>
            </v-card>
            <!--            <v-card-->
            <!--              v-for="imageInputCard in [-->
            <!--                { title: 'Sličica', model: 'thumbnail' },-->
            <!--                { title: 'Uvodna slika', model: 'image' },-->
            <!--                { title: 'Open graph slika', model: 'og_image' }-->
            <!--              ]"-->
            <!--              :key="imageInputCard.model"-->
            <!--              class="mt-5"-->
            <!--              elevation="2"-->
            <!--            >-->
            <!--              <v-card-title-->
            <!--                class="admin_title_card py-2"-->
            <!--                v-text="imageInputCard.title"-->
            <!--              />-->
            <!--              <v-card-actions>-->
            <!--                <v-file-input-->
            <!--                  accept=".png,.gif,.jpg,.tiff,.bmp"-->
            <!--                  :loading="uploading.includes(imageInputCard.model)"-->
            <!--                  @change="uploadImage($event, imageInputCard.model)"-->
            <!--                />-->
            <!--              </v-card-actions>-->
            <!--            </v-card>-->
            <v-card class="mt-5" elevation="2">
              <v-card-title class="admin_title_card py-2">Sličica</v-card-title>
              <v-card-actions>
                <image-upload
                  ref="thumbnailUpload"
                  v-model="article.thumbnail"
                  :params="{ field_name: 'thumbnail' }"
                  url="/media"
                  class="ml-4"
                />
              </v-card-actions>
            </v-card>
            <v-card class="mt-5" elevation="2">
              <v-card-title class="admin_title_card py-2"
              >Uvodna slika</v-card-title
              >
              <v-card-actions>
                <image-upload
                  ref="imageUpload"
                  v-model="article.image"
                  url="/media"
                  :params="{ field_name: 'image' }"
                  class="ml-4"
                />
              </v-card-actions>
            </v-card>
            <v-card class="mt-5" elevation="2">
              <v-card-title class="admin_title_card py-2"
              >Open graph slika</v-card-title
              >
              <v-card-actions>
                <image-upload
                  ref="og_imageUpload"
                  v-model="article.og_image"
                  url="/media"
                  :params="{ field_name: 'og_image' }"
                  class="ml-4"
                />
              </v-card-actions>
            </v-card>
            <v-card class="mt-5" elevation="2">
              <v-card-title class="admin_title_card py-2">Tagovi</v-card-title>
              <v-card-actions class="px-5">
                <v-combobox
                  v-model="computedTags"
                  outlined
                  dense
                  :items="tags"
                  item-text="title"
                  item-value="title"
                  multiple
                  deletable-chips
                  hide-selected
                  chips
                  return-object
                  clearable
                  :color=$vuetify.theme.themes.light.secondary
                />
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </admin-form-page-template>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import AdminFormPageTemplate from '@/components/admin/templates/AdminFormPageTemplate'

class Article {
  constructor(props) {
    if (!props || typeof props !== 'object') props = {}

    this.id = props.id || null
    this.date = props.date || null
    this.time = props.time || null
    this.title = props.title || null
    this.supertitle = props.supertitle || null
    this.subtitle = props.subtitle || null
    this.text = props.text || null
    this.intro = props.intro || null
    this.info = props.info || null
    this.author_id = props.author_id || null
    this.author = props.author || null
    this.source = props.source || null
    this.link = props.link || null
    this.redirect = props.redirect || null

    this.visible = props.visible || false
    this.listed = props.listed || false
    this.highlighted = props.highlighted || false
    this.interview = props.interview || false

    this.tags = props.tags || []

    props.articlecategories
      ? (this.categories = props.articlecategories.map((v) => v.id))
      : (this.categories = [])

    if (props.media) {
      props.media.forEach((m) => {
        if (m.field_name === 'thumbnail') this.thumbnail = { ...m }
        else if (m.field_name === 'image') this.image = { ...m }
        else if (m.field_name === 'og_image') this.og_image = { ...m }
      })
    } else {
      this.thumbnail = null
      this.image = null
      this.og_image = null
    }
  }
}

export default {
  layout: 'admin',
  components: {
    Editor,
    AdminFormPageTemplate,
    'image-upload': () => import('~/components/admin/base/imageUpload')
  },
  async asyncData({ app }) {
    // const cat = await app.$axios.get(`articles/categories`)
    // const tag = await app.$axios.get(`/articletag`)
    // const author = await app.$axios.get(`/articleauthor`)
    return {
      cat1: [],
      cat2: [],
      cat3: [],
      tags: [],
      authors: []
    }
  },

  data() {
    return {
      localValue: {
        day: null,
        month: null,
        year: null,
        hour: null,
        minutes: null
      },
      rules: {
        required: [(v) => !!v || 'Ovo polje je obavezno.'],
        url: (value) => {
          if (!value) return true
          else {
            const pattern = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/
            if (pattern.test(value)) return true
            else return 'Format unosa sadržavat https:// ispred vaše web adrese'
          }
        }
      },
      errors: {
        info: false,
        text: false,
        date: false,
        intro: false
      },
      submitting: false,
      days: [],
      months: [],
      years: [],
      minutes: null,
      hours: null,
      article: new Article()
    }
  },
  computed: {
    computedTags: {
      get() {
        return this.article.tags
      },
      set(v) {
        const tags = v.map((t) => {
          if (typeof t === 'string') {
            return {
              title: t
            }
          } else {
            return t
          }
        })
        this.article.tags.splice(0, this.article.tags.length, ...tags)
      }
    },
    arrayYears() {
      const currentYear = new Date().getFullYear()
      const array = []
      for (let i = currentYear; i <= currentYear + 20; i++) {
        array.push(i)
      }
      return array
    }
  },
  created() {
    this.$route.params.id && this.getArticle()
  },
  methods: {
    handleDaterino() {
      const isoDate = this.$formatDate(this.article.date, null)
      const data = new Date(isoDate)
      const day = data.getDate()
      const year = data.getFullYear()
      const month = data.getMonth() + 1
      const hour = data.getHours()
      const minutes = data.getMinutes()
      this.localValue.day = day
      this.localValue.month = month
      this.localValue.year = year
      this.localValue.hour = hour
      this.localValue.minutes = minutes
    },
    // arrayToggle(array, item) {
    //   const index = array.findIndex((a) => a === item)
    //   if (index > -1) {
    //     array.splice(index, 1)
    //   } else {
    //     array.push(item)
    //   }
    // },
    // async uploadImage(file, model) {
    //   const fd = new FormData()
    //   fd.append('file', file)
    //   try {
    //     this.arrayToggle(this.uploading, model)
    //     const response = await this.$axios.post(`/media`, fd, {
    //       params: {
    //         field_name: model
    //       }
    //     })
    //     this.article[model] = response.data.data[0].id
    //   } catch (e) {
    //    this.$toast.error(e)
    //   } finally {
    //     this.arrayToggle(this.uploading, model)
    //   }
    // },
    async getArticle() {
      try {
        const response = await this.$axios.get(
          'admin/articles/single/' + this.$route.params.id
        )

        this.article = new Article(response.data.data[0])

        this.handleDaterino()
      } catch (e) {
        this.$toast.error(e)
      }
    },
    handleDate() {
      if (
        !this.localValue.month ||
        !this.localValue.day ||
        !this.localValue.year ||
        !this.localValue.hour ||
        !this.localValue.minutes
      ) {
        return null
      }

      this.months = this.localValue.month
      this.days = this.localValue.day
      this.years = this.localValue.year
      this.hours = this.localValue.hour
      this.minutes = this.localValue.minutes
      const dateSelects = [this.months, this.days, this.years].join('/')
      // if (this.hours === 1) {
      //   this.hours = '0' + this.hours
      // }
      // if (this.minutes === 1) {
      //   this.minutes = '0' + this.minutes
      // }
      const timeSelects = [this.hours, this.minutes].join(':')
      const joinedDate = [dateSelects, timeSelects].join(' ')

      return this.$moment(joinedDate).toLocaleString()
    },
    async submitArticle() {
      const date = this.handleDate()

      if (
        !this.$refs.articleForm.validate() ||
        (this.article.interview && !this.article.info) ||
        !this.article.text ||
        !date ||
        !this.article.intro
      ) {
        this.$toast.error('Neka polja imaju grešku')
        if (!date) this.errors.date = true
        if (!this.article.text) this.errors.text = true
        if (this.article.interview && !this.article.info)
          this.errors.info = true
        if (!this.article.intro) this.errors.intro = true

        return
      }

      try {
        await this.$refs.thumbnailUpload.upload()
        await this.$refs.imageUpload.upload()
        await this.$refs.og_imageUpload.upload()

        this.submitting = true
        const { id } = this.$route.params
        if (id) {
          await this.$axios.patch('admin/articles/' + id, {
            ...this.article,
            thumbnail: Object(this.article.thumbnail).id,
            image: Object(this.article.image).id,
            og_image: Object(this.article.og_image).id,
            date
          })
        } else {
          await this.$axios.post('admin/articles', {
            ...this.article,
            date,
            thumbnail: Object(this.article.thumbnail).id,
            image: Object(this.article.image).id,
            og_image: Object(this.article.og_image).id
          })
        }

        this.$emit('refresh-list')
        if (id){
          this.$toast.success('Članak uspješno uređen')}
        else{
           this.$toast.success('Članak uspješno spremljen')
        }
        //  Close the dialog by calling form page's method
        this.$refs.formPage.closeDialog()
      } catch (e) {
        this.$toast.error(e)
      } finally {
        this.submitting = false
      }
    }
  }
}
</script>

<style lang="scss">
.scroll_card {
  max-height: 400px;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
}
.cardError {
  border: 2px solid #fe5251 !important;
}
</style>
