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

  scrollBehavior(to, from, savedPosition) {
    // Ignore navigation caused just by query change
    if (
      to.name === from.name &&
      JSON.stringify(to.params) === JSON.stringify(from.params)
    ) {
      return false;
    }

    if (savedPosition) {
      return savedPosition;
    }

    return {
      top: 0,
    };
  },
});

export default router;
