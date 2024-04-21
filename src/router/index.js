import { createRouter, createWebHistory } from 'vue-router';

import MainView from '@/views/MainView.vue';
import PersonalitySelectView from '@/views/PersonalitySelectView.vue';
import PersonalInfoView from '@/views/PersonalInfoView.vue';
import MeetingSelectView from '@/views/MeetingSelectView.vue';
import ConfirmView from '@/views/ConfirmView.vue';


const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainView,
  },

  {
    path: '/personal-info',
    name: 'PersonalInfo',
    component: PersonalInfoView,
  },
  {
    path: '/personality-select',
    name: 'PersonalitySelect',
    component: PersonalitySelectView,
  },
  {
    path: '/meeting-select',
    name: 'MeetingSelect',
    component: MeetingSelectView,
  },
  {
    path: '/comfirm',
    name: 'Confirm',
    component: ConfirmView,
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
