import { createRouter, createWebHistory } from 'vue-router';

import MainView from '@/views/MainView.vue';
import PersonalInfoView from '@/views/PersonalInfoView.vue';
import SelectView from '@/views/SelectView.vue';
import TimeSelectView from '@/views/TimeSelectView.vue';
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
    path: '/select',
    name: 'Select',
    component: SelectView,
  },
  {
    path: '/time-select',
    name: 'TimeSelect',
    component: TimeSelectView,
  },
  {
    path: '/comfirm',
    name: 'Confirm',
    component: ConfirmView,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
