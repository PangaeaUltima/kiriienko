<template lang="pug">
section.fullscreen-page.w-100.d-flex.align-center
  .grid.align-center
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
      p Two years of commercial experience in two different companies. Engaged in development both complex applications for business automation and small selling pages.
      p.mb-0 Extensive development experience with Vue.js and Nuxt.js frameworks. Vuetify and Element UI libraries. Have experience writing tests for web application using Jest framework.
    .d-flex.flex-column
      .mb-5(v-for="(item, index) in skills" :key="index")
        p.text-alt.font-weight-bold.mb-3 {{ item.text }}
        v-progress-linear(:color="item.color" :value="item.value" :height="2")
      .grid-employers.mt-10
        .secondary-black.pa-4(v-for="(item, index) in employementHistory" :key="index")
          h3.text-h3.mb-2 {{ item.post }}
          p.text-caption.mb-1.text--disabled {{ item.company }}
          p.text-caption.text--disabled.mb-2 {{ item.dates }}
          p.text-alt {{ item.description }}
</template>

<script>
export default {
  name: 'HomeSkills',
  data() {
    return {
      employementHistory: [
        {
          post: 'Front-End Developer',
          company: 'Appelsin Tech',
          dates: '2020 - 2021',
          description:
            'Worked on an MLM web application that can be found on the Internet under the name NeoMAXs / ArpioSystem / Dazzling. Also engaged in the development of small landings.',
        },
        {
          post: 'Front-End Developer',
          company: 'metasharks',
          dates: '2022 - Current',
          description:
            'I am currently developing several business automation web applications. Behind already several finished projects. Some of them have experience in implementing interesting animations.',
        },
      ],
      skills: [
        {
          color: '#E6662B',
          text: 'HTML5',
          value: 90,
        },
        {
          color: '#0569B0',
          text: 'CSS3',
          value: 90,
        },
        {
          color: '#EBD41C',
          text: 'JavaScript',
          value: 70,
        },
        {
          color: '#42B883',
          text: 'Vue.js',
          value: 80,
        },
      ],
    }
  },
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
  grid-gap: 0 120px;
  grid-template-columns: repeat(2, 1fr);
}
.grid-employers {
  display: grid;
  grid-gap: 0 32px;
  grid-template-columns: repeat(2, 1fr);
}
</style>