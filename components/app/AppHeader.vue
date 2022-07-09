<template lang="pug">
header
  v-container
    .d-flex.align-center
      a.mr-2(v-for="item in menu" :key="item.id" :href="item.href") {{ item.name }}
</template>

<script>
import { MENU_LINKS } from '@/helpers/const'

export default {
  name: 'AppHeader',
  data() {
    return {
      menu: MENU_LINKS,
    }
  },
}
</script>