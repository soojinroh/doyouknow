import { defineStore } from 'pinia';

export const usePersonalityStore = defineStore('personality', {
  state: () => ({
    selections: [],
  }),
  actions: {
    saveSelection(selection) {
      this.selections.push(selection);
    },
    clear() {
      this.selections = [];
    }
  },
});
