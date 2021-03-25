<template>
  <div class="ma-n5">
    <v-card-title
      style="border-bottom: 1px solid deepskyblue; position: relative;"
      class="py-2 d-block"
    >
      <div class="d-flex align-center">
        {{ title }}
        <v-spacer />
        <v-row dense justify="end">
          <v-col v-if="!hideSearch" cols="auto">
            <v-text-field
              v-model="search"
              hide-details
              placeholder="Pretraži..."
              rounded
              filled
              single-line
              dense
            />
          </v-col>
          <v-col v-if="!hideCreateButton" cols="auto">
            <v-btn
              :color=$vuetify.theme.themes.light.secondary
              rounded
              nuxt
              to="create"
              append
              class="white--text"
            >
              <v-icon left>add</v-icon>Dodaj
            </v-btn>
          </v-col>
        </v-row>
      </div>
      <v-row dense>
        <template v-for="(item, i) in filters">
          <v-col :key="i" cols="auto">
            <v-select
              v-if="item.type === 'select'"
              :value="getFilter(item)"
              :label="item.label"
              :items="item.items"
              :item-text="item.itemText"
              :item-value="item.itemValue"
              :multiple="item.multiple"
              outlined
              clearable
              dense
              hide-details
              color="orange"
              :style="{ width: item.width }"
              @change="setFilter(item, $event)"
            />
            <!-- TODO: spamming input events -->
            <v-autocomplete
              v-if="item.type === 'autocomplete'"
              :key="i"
              :value="getFilter(item)"
              :label="item.label"
              :items="item.items"
              :item-text="item.itemText"
              :item-value="item.itemValue"
              :multiple="item.multiple"
              no-filter
              outlined
              dense
              hide-details
              color="orange"
              clearable
              :style="{ width: item.width }"
              @input="item.inputCallback ? item.inputCallback($event) : void 0"
              @update:search-input="
                $event && item.searchCallback
                  ? item.searchCallback($event)
                  : void 0
              "
              @click:clear="
                item.searchCallback ? item.searchCallback(null) : void 0
              "
              @change="setFilter(item, $event)"
            />
            <v-text-field
              v-else-if="item.type === 'text'"
              :key="i"
              :value="getFilter(item)"
              :label="item.label"
              :prefix="item.prefix"
              :suffix="item.suffix"
              outlined
              dense
              hide-details
              color="orange"
              clearable
              :style="{ width: item.width }"
              @input="setFilter(item, $event)"
            />
            <v-text-field
              v-else-if="item.type === 'number'"
              :key="i"
              :value="getFilter(item)"
              type="number"
              :min="item.min"
              :step="item.step"
              :label="item.label"
              :prefix="item.prefix"
              :suffix="item.suffix"
              outlined
              dense
              hide-details
              color="orange"
              clearable
              :style="{ width: item.width }"
              @input="setFilter(item, $event)"
            />
            <v-checkbox
              v-else-if="item.type === 'checkbox'"
              :key="i"
              :input-value="[true, 'true'].includes(getFilter(item))"
              :label="item.label"
              dense
              hide-details
              style="padding-top: 2px;"
              class="mt-1 chekybox"
              @change="setFilter(item, $event)"
            />
          </v-col>
        </template>
      </v-row>

      <v-progress-linear
        absolute
        bottom
        :active="dataLoading"
        indeterminate
        :color=$vuetify.theme.themes.light.primary
      />
    </v-card-title>

    <v-data-table
      :items="items"
      :headers="computedHeaders"
      hide-default-footer
      text-center
      disable-pagination
      :server-items-length="pagination.total"
      :sort-by.sync="orderBy"
      :sort-desc.sync="order"
      dense
      class="ma-4"
    >
      <template #body="{items}">
        <tr
          v-for="item in items"
          :key="item.id"
          class="tableRow"
          :class="{ greenBackground: item.is_paid && title === 'Ponude' }"
        >
          <!-- greenBackground class is made only for Ponude, its hardcoded for now, maybe it'll be refactored in the future-->
          <td
            v-for="(header, i) in headers"
            :key="`header_${i}`"
            :class="{ 'text-right': header.type === 'date' && !alignDateLeft }"
          >
            <slot
              :name="header.value"
              :item="item"
              :value="get(item, header.value)"
            >
              <span v-if="header.type === 'date'">
                {{ get(item, header.value) | formatDate }}
              </span>
              <span v-else-if="header.link && item.link">
                <nuxt-link
                  v-if="header.link === 'nuxt-link'"
                  :to="`${get(item, 'link')}`"
                  >{{ get(item, header.value) }}</nuxt-link
                >
                <a v-else :href="`${get(item, 'link')}`" target="_blank">
                  {{ get(item, header.value) }}
                </a>
              </span>
              <span v-else-if="header.type === 'boolean'">
                <v-simple-checkbox
                  :value="!!get(item, header.value)"
                  disabled
                  hide-details
                  dense
                  class="ma-0"
                />
              </span>
              <span
                v-else-if="header.fixedValue"
                style="color: blue; cursor: pointer;"
                @click="$emit(`${header.trigger}`, item)"
              >
                {{ header.fixedValue }}
              </span>
              <span v-else>
                {{ get(item, header.value) }}
              </span>
            </slot>
          </td>
          <td class="text-right" style="white-space: nowrap;">
            <v-btn
              v-for="aButton in additionalButtons"
              :key="aButton.value"
              small
              rounded
              depressed
              icon
              @click="$emit(`clicked-${aButton.value}`, item)"
            >
              <v-icon small :color="aButton.color">{{ aButton.icon }}</v-icon>
            </v-btn>
            <v-tooltip bottom>
              <template v-if="!hideEditButton" #activator="{on}">
                <v-btn
                  small
                  rounded
                  depressed
                  icon
                  nuxt
                  :to="`${item.id}/edit`"
                  append
                  v-on="on"
                >
                  <v-icon small color="green">edit</v-icon>
                </v-btn>
              </template>
              Uredi
            </v-tooltip>
            <v-tooltip bottom>
              <template v-if="!hideDeleteButton" #activator="{on}">
                <v-btn
                  small
                  rounded
                  depressed
                  icon
                  @click="deleteItem(item)"
                  v-on="on"
                >
                  <v-icon small color="red">delete</v-icon>
                </v-btn>
              </template>
              Obriši
            </v-tooltip>
          </td>
        </tr>
      </template>
    </v-data-table>
    <v-pagination
      v-model="page"
      :length="pagination.lastPage || 1"
      circle
      total-visible="9"
      :color="$vuetify.theme.themes.light.secondary"
    />

    <nuxt-child @refresh-list="getData" @reset-list="resetData" />
  </div>
</template>

<script>
import debounce from 'lodash/debounce'
import get from 'lodash/get'

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    headers: {
      type: Array,
      default: () => []
    },
    url: {
      type: String,
      default: null
    },
    urlID: {
      type: String,
      default: null
    },
    additionalButtons: {
      type: Array,
      default: () => []
    },
    filters: {
      type: Array,
      default: () => []
    },
    hideSearch: {
      type: Boolean,
      default: false
    },
    hideCreateButton: {
      type: Boolean,
      required: false
    },
    hideEditButton: {
      type: Boolean,
      required: false
    },
    hideDeleteButton: {
      type: Boolean,
      required: false
    },
    deleteUrl: {
      type: String,
      default: null
    },
    alignDateLeft: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      show: false,
      desserts: [],
      dialog: false,
      search: '',
      page: 1,
      limit: 50,
      order: null,
      orderBy: null,
      dataLoading: false,
      items: [],
      admin_table: false,
      pagination: {},
      filterModels: []
    }
  },
  computed: {
    computedHeaders() {
      return [
        ...this.headers,
        this.hideDeleteButton &&
        this.hideCreateButton &&
        this.hideEditButton &&
        !this.additionalButtons.length
          ? {}
          : { text: 'Akcije', width: '1px', sortable: false, align: 'center' }
      ]
    }
  },
  watch: {
    search: 'resetData',
    page: {
      handler: 'getData',
      immediate: true
    },
    orderBy: 'getData',
    order: 'getData'
  },
  created() {
    this.filters.forEach((f) => {
      f.default && this.setFilter(f, f.default)
    })
  },
  methods: {
    get,
    getFilter(item) {
      const model = this.filterModels.find((f) => f.key === item.key)
      return model ? model.value : null
    },
    setFilter(item, value) {
      const modelIndex = this.filterModels.findIndex((f) => f.key === item.key)
      const obj = { key: item.key, value }
      if (modelIndex > -1) {
        if (value) {
          this.filterModels.splice(modelIndex, 1, obj)
        } else {
          this.filterModels.splice(modelIndex, 1)
        }
      } else {
        this.filterModels.push(obj)
      }
      this.resetData()
    },
    resetData() {
      this.page = 1
      this.getData()
    },
    getData: debounce(async function () {
      const correctedOrder = Array.isArray(this.order)
        ? this.order[0]
        : this.order

      const orderBy = Array.isArray(this.orderBy)
        ? this.orderBy[0]
        : this.orderBy

      const order =
        correctedOrder === false ? 'asc' : this.order ? 'desc' : null

      const { page, limit, search } = this

      try {
        this.dataLoading = true
        const params = {
          limit,
          page,
          search,
          orderBy,
          order
        }

        this.filterModels.forEach((f) => {
          params[f.key] = f.value
        })

        const response = await this.$axios.get(this.url, {
          params
        })
        const { data, pagination } = response.data.data[0]
        this.items.splice(0, this.items.length, ...data)
        if (pagination) {
          this.pagination = pagination
        } else {
          const stupidPagination = response.data.data[0]
          delete stupidPagination.data
          this.pagination = stupidPagination
        }
      } catch (err) {
        this.$toast.error(err)
      } finally {
        this.dataLoading = false
      }
    }, 500),
    deleteItem(item) {
      this.Swal({
        text: `Jeste li sigurni da želite obrisati ovu stavku?`,
        title: 'Brisanje',
        confirmButtonColor: 'error',
        confirmButtonText: 'Obriši',
        cancelButtonText: 'Odustani',
        onConfirm: async () => {
          try {
            await this.$axios.delete(`${this.deleteUrl || this.url}/${item.id}`)
            this.getData()
            return true
          } catch (err) {
            this.$toast.error(err)
          }
        }
      })
    }
  }
}
</script>

<style scoped>
.tableRow:hover {
  background-color: #efefef;
}
.greenBackground {
  background-color: #a6ef93;
}
</style>
