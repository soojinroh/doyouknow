import { defineStore } from 'pinia';

export const usePersonalInfoStore = defineStore('personalInfo', {
  state: () => ({
    name: '',
    occupation: '',
    phoneNumber: '',
    gender: '',
    age: ''
  }),
  getters: {},
  actions: {
    setPersonalInfo(name, occupation, phoneNumber, gender, age) {
      this.name = name;
      this.occupation = occupation;
      this.phoneNumber = phoneNumber;
      this.gender = gender;
      this.age = age;
    },
    clear() {
      this.name = '';
      this.occupation = '';
      this.phoneNumber = '';
      this.gender = '';
      this.age = '';
    }
  },
});