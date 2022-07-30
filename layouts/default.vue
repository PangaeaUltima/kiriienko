<template lang="pug">
app-layout
  .d-flex.flex-grow-1
    app-side-menu
    .w-100
      nuxt
</template>

<script>
import AppHeader from '@/components/app/AppHeader'
import AppLayout from '@/components/app/AppLayout'
import AppSideMenu from '@/components/app/AppSideMenu'

export default {
  name: 'DefaultLayout',
  components: {
    AppHeader,
    AppLayout,
    AppSideMenu,
  },
}
</script>
