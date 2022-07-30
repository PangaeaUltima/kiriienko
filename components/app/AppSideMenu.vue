<template lang="pug">
.side-menu
  .d-flex.flex-column.pa-3.deep-black
    .logo-wrapper
      logo-svg
    span.text-h3.text-center.mb-2 Ruslan
    span.text-center.text-caption Web Developer
  .d-flex.flex-column.justify-center.secondary-black
    v-list.pa-0.secondary-black(nav dense flat)
      v-list-item-group(color="primary")
        v-divider
        .d-flex.flex-column(v-for="item in sections" :key="item.id")
          v-list-item.mb-0.py-2(
            :class="{ 'v-list-item--active': item.id === activeSection }"
            @click="setSection(item)"
          )
            v-list-item-content.text-center.text-body 
              span.text-alt {{ item.name }}
          v-divider
  .d-flex.align-end.justify-space-between.pa-3.secondary-black
    v-btn(
      v-for="item in social"
      :key="item.id"
      color="primary"
      icon
      :href="item.link"
      target="_blank"
    )
      v-icon(small) {{ item.icon }}
</template>

<script>
import { mapState } from 'vuex'
import LogoSvg from '@/assets/img/logo.svg?inline'

export default {
  name: 'AppSideMenu',
  components: {
    LogoSvg,
  },
  data() {
    return {
      social: [
        {
          id: 1,
          link: 'https://www.linkedin.com/in/edgeofuniverse/',
          icon: 'mdi-linkedin',
        },
        {
          id: 2,
          link: 'https://t.me/live_fast_die_young',
          icon: 'mdi-send',
        },
        {
          id: 3,
          link: 'https://www.instagram.com/edge_of_universe/',
          icon: 'mdi-instagram',
        },
      ],
    }
  },
  computed: {
    ...mapState('home', ['activeSection', 'sections']),
  },
  methods: {
    setSection(section) {
      this.$store.dispatch('home/setSection', section.id)
    },
  },
}
</script>

<style lang="scss" scoped>
.side-menu {
  height: 100%;
  width: 140px;
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  .logo-wrapper {
    svg {
      width: 116px;
    }
  }
}
</style>