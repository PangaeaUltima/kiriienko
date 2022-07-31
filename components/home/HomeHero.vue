<template lang="pug">
section.fullscreen-page.w-100.d-flex.align-center
  .d-flex.flex-column.align-start
    h1.text-h1.mb-4.headline
      span Hi,
      span I'm
        .relative.ml-6
          span Ruslan,
          span.glitch.glitch-primary Ruslan
          span.glitch.glitch-red Ruslan
      | web developer
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
}
</script>

<style lang="scss" scoped>
.headline {
  .glitch {
    position: absolute;
    top: 0;
    left: 0;
  }
  .glitch-main {
    animation: glitchMain 8s infinite;
  }
  .glitch-primary {
    color: $primary;
    animation: glitchPrimary 8s infinite;
  }
  .glitch-red {
    color: $light-red;
    animation: glitchRed 8s infinite;
  }
  span {
    display: flex;
  }
}
</style>