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
      p I'm Front-End developer from Ukraine. Started studying web development in my last year of university in 2020.
      p Quite punctual, responsible and creative guy. I like video games, outdoor activities, TV series / movies, and travels.
      p.mb-0 Interested in gaining new experience in development area and improvement English skills.
</template>

<script>
export default {
  name: 'HomeAbout',
  computed: {
    title() {
      const text = ['Let me', 'introduce myself']
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