<template lang="pug">
.d-flex.flex-column
  .pa-1.pagination-dot.pointer(
    v-for="(item, index) in sections"
    :key="item.id"
    :class="{ primary: activeSection === item.id, 'mb-2': index !== sections.length - 1 }"
    @click="$store.dispatch('home/setSection', item.id)"
  )
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AppPagination',
  computed: {
    ...mapState('home', ['activeSection', 'sections']),
  },
}
</script>

<style lang="scss" scoped>
.pagination-dot {
  border-radius: 50%;
  border: 1px solid $primary;
  transition: background-color 0.3s;
  &:hover {
    background-color: rgba(224, 253, 205, 0.3);
  }
}
</style>