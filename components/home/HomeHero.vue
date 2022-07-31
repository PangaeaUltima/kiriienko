<template lang="pug">
section.fullscreen-page.w-100.d-flex.align-center
  .d-flex.flex-column.align-start
    h1.text-h1.mb-4.headline
      .d-flex.align-center(v-for="(row, index) in title" :key="index")
        v-hover(v-for="(el, index) in row" :key="index" v-slot="{ hover }" :close-delay="700")
          span(:class="{ 'mx-3': el === ' ', 'squeeze-animation primary--text': hover }") {{ el }}
    .d-flex.align-center.text-h3.text--disabled.mb-8
      span < Front-End Developer
      span.mx-3 /
      span Vue.js Developer >
    app-glitch-button(
      min-width="420"
      x-large
      outlined
      @click.native="$store.dispatch('home/setSection', 4)"
    ) Get in touch
</template>

<script>
import AppGlitchButton from '~/components/app/AppGlitchButton'

export default {
  name: 'HomeHero',
  components: {
    AppGlitchButton,
  },
  computed: {
    title() {
      const text = ['Hi,', "I'm Ruslan,", 'web developer']
      return text.map((item) => item.split(''))
    },
  },
}
</script>