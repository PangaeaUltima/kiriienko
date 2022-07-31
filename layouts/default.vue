<template lang="pug">
app-layout
  .d-flex.flex-grow-1.align-center
    app-side-menu
    app-pagination.pagination
    .w-100
      nuxt
</template>

<script>
import AppHeader from '@/components/app/AppHeader'
import AppLayout from '@/components/app/AppLayout'
import AppPagination from '~/components/app/AppPagination'
import AppSideMenu from '@/components/app/AppSideMenu'

export default {
  name: 'DefaultLayout',
  components: {
    AppHeader,
    AppLayout,
    AppPagination,
    AppSideMenu,
  },
}
</script>

<style lang="scss" scoped>
.pagination {
  position: absolute;
  right: 10px;
}
</style>
