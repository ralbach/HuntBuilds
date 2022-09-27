import { defineStore } from 'pinia'

export const useBuildStore = defineStore({
  id: 'build',
  state: () => ({
    skin: null,
    mainWeapon: null,
    secondaryWeapon: null,
    consumables: [],
    tools: [],
    buildName: null,
    traits: []
  }),
  getters: {
    
  },
  actions: {
  }
})
