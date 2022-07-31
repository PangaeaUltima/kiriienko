<template lang="pug">
section.fullscreen-page.w-100.d-flex.align-center
  .grid
    .d-flex.flex-column
      h2.text-h2.primary--text.mb-4
        .d-flex.align-center(v-for="(row, index) in title" :key="index")
          v-hover(
            v-for="(el, elIndex) in row"
            :key="elIndex"
            v-slot="{ hover }"
            :close-delay="700"
          )
            span(:class="{ 'mx-3': el === ' ', 'squeeze-animation': hover }") {{ el }}
      p.mb-0 Engaged in development both complex applications for business automation and small selling pages. Extensive development experience with Vue.js and Nuxt.js frameworks. Have experience writing tests for web application using Jest framework.
</template>

<script>
export default {
  name: 'HomeSkills',
  computed: {
    title() {
      const text = ['Skills &', 'Expirience']
      return text.map((item) => item.split(''))
    },
  },
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>