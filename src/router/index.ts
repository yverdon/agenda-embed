import { createRouter, createWebHashHistory } from 'vue-router';

import EventsView from '@/views/EventsView.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'events',
      component: EventsView,
    },
    {
      path: '/event/:id',
      name: 'event',
      component: () => import('../views/EventView.vue'),
    },
  ],
});

export default router;
