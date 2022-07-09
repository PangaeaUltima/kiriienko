export const state = () => ({
  activeSection: 0,
  sections: [
    {
      id: 0,
      component: 'home-about',
      name: 'About Me',
    },
    {
      id: 1,
      component: 'home-skills',
      name: 'My Skills',
    },
    {
      id: 2,
      component: 'home-work',
      name: 'Work',
    },
    {
      id: 3,
      component: 'home-contact',
      name: 'Contact',
    },
  ],
})

export const actions = {
  setSection({ commit }, id) {
    commit('SET_SECTION', id)
  },
}

export const mutations = {
  SET_SECTION(state, id) {
    state.activeSection = id
  },
}
