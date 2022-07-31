<template lang="pug">
.relative
  v-btn.glitch-main(
    color="primary-font-light"
    :class="buttonClass"
    :outlined="outlined"
    :block="block"
    :min-width="minWidth"
    :x-small="xSmall"
    :small="small"
    :large="large"
    :x-large="xLarge"
  )
    slot
  v-btn.glitch.glitch-primary(
    color="primary"
    :class="buttonClass"
    :outlined="outlined"
    :block="block"
    :min-width="minWidth"
    :x-small="xSmall"
    :small="small"
    :large="large"
    :x-large="xLarge"
  )
    slot
  v-btn.glitch.glitch-red(
    color="light-red"
    :class="buttonClass"
    :outlined="outlined"
    :block="block"
    :min-width="minWidth"
    :x-small="xSmall"
    :small="small"
    :large="large"
    :x-large="xLarge"
  )
    slot
</template>

<script>
export default {
  name: 'AppGlitchButton',
  props: {
    block: {
      type: Boolean,
      default: false,
    },
    buttonClass: {
      type: String,
      default: '',
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: null,
    },
    minWidth: {
      type: [String, Number],
      default: 'auto',
    },
    xSmall: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
    xLarge: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.relative {
  .glitch {
    position: absolute;
    top: 0;
    left: 0;
  }
  .glitch-main {
    position: relative;
    z-index: 999;
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
}
</style>