<template lang="pug">
.flex-grow-1.wrapper
  component.section(
    v-for="section in sections"
    :key="section.id"
    :is="section.component"
    :style="calcStyle(activeSection, section)"
  )
</template>

<script>
import { mapState } from 'vuex'
import HomeAbout from '@/components/home/HomeAbout'
import HomeSkills from '@/components/home/HomeSkills'
import HomeWork from '@/components/home/HomeWork'
import HomeContact from '@/components/home/HomeContact'

export default {
  name: 'PageIndex',
  components: {
    HomeAbout,
    HomeSkills,
    HomeWork,
    HomeContact,
  },
  computed: {
    ...mapState('home', ['activeSection', 'sections']),
  },
  methods: {
    calcStyle(activeSection, section) {
      return `transform: translateY(${
        section.id === activeSection
          ? section.id * -100 + 'vh'
          : section.id > activeSection
          ? (section.id - activeSection) * 100 + 'vh'
          : section.id * -100 + (activeSection - section.id) * -100 + 'vh'
      })`
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  overflow: hidden;
  .section {
    transition: transform 0.3s;
  }
}
</style>