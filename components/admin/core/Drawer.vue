<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    :value="drawer"
    :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
    :expand-on-hover="expandOnHover"
    :right="$vuetify.rtl"
    :src="barImage"
    mobile-break-point="960"
    app
    width="260"
    v-bind="$attrs"
  >
    <template v-slot:img="props">
      <v-img
        :gradient="`to bottom, ${barColor}`"
        v-bind="props"
      />
    </template>

    <v-divider class="mb-1" />

    <v-list
      dense
      nav
    >
      <v-list-item>
        <v-list-item-content>
          <img  src="@/static/images/main-logo.png" alt="logo"  style="max-height: 75px;border-radius: 10px" />
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider class="mb-2" />

    <v-list
      expand
      nav
    >
      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
      <div />

      <template v-for="(item, i) in items">
        <v-list-item-group
          v-if="item.children"
          :key="`group-${i}`"
          :item="item"
        >
          <!--  -->
        </v-list-item-group>

        <v-list-item
          v-else
          dark
          :to="item.to"
          :key="`item-${i}`"
          :item="item"
          class="white--text"
        >
          <v-list-item-icon><v-icon>{{item.icon}}</v-icon></v-list-item-icon> <v-list-item-title class="white--text text-fix">{{item.title}}</v-list-item-title>
        </v-list-item>
      </template>

      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
      <div />
    </v-list>

  </v-navigation-drawer>
</template>

<script>
// Utilities
import {
  mapState,
} from 'vuex'

export default {
  name: 'DashboardCoreDrawer',

  props: {
    expandOnHover: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    items: [
      {
        icon: 'mdi-view-dashboard',
        title: 'Poslovi',
        to: '/admin/poslovi-admin',
      },
      {
        icon: 'mdi-format-font',
        title: 'Vijesti',
        to: '/admin/vijesti-admin',
      },
      {
        title: 'Team',
        icon: 'mdi-clipboard-outline',
        to: '/admin/team-admin',
      },
    ],
  }),

  computed: {
    ...mapState('navigation',['barColor', 'barImage','drawer']),
    profile () {
      return {
        avatar: true,
        title: this.$t('avatar'),
      }
    },
  },

  methods: {
  },
}
</script>

<style lang="scss">
@import "@/assets/styles/colors.scss";
.v-list-item--link:before {
  background-color: $mainColor;
}

.theme--dark.v-list-item--active:hover::before, .theme--dark.v-list-item--active::before {
  opacity: 1;
  color: $tertiaryColor !important;
}
.text-fix{
  position:relative;
}


</style>
