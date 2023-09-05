<template>
  <div class="grid sm:grid-cols-[1fr_auto] gap-6 items-end mb-8">
    <ActiveFilters />
    <div v-if="count !== null" class="col-start-2 text-right">
      {{ count === 1 ? '1 Résultat' : `${count} Résultats` }}
    </div>
  </div>

  <div
    v-if="events.length"
    class="grid sm:grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-6"
  >
    <EventCard
      v-for="event in events"
      :key="event.id"
      :event="event"
      :class="{ 'col-span-2 row-span-2': false && event.featured }"
    />
  </div>
  <div v-if="hasMore" class="flex justify-center mt-12">
    <button type="button" class="btn btn--primary" @click="fetchEvents">
      Charger plus de résultats
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import useFilters from '@/composables/useFilters';

import { getEvents } from '@/services/eventsService';

import type EventLight from '@/models/EventLight';

import ActiveFilters from './ActiveFilters.vue';
import EventCard from './EventCard.vue';

const { activeFilters, updateFilters } = useFilters();
const count = ref<number | null>(null);
const events = ref<EventLight[]>([]);
const page = ref(1);
const hasMore = ref(false);
let ignoreFiltersWatcher: boolean = false;

/**
 * Set initial filter values based on eventual URL params
 */

const route = useRoute();
const { query, startsAt, endsAt, ...categories } = route.query;

if (query) {
  activeFilters.query = query as string;
}
if (startsAt) {
  activeFilters.startsAt = startsAt as string;
}
if (endsAt) {
  activeFilters.endsAt = endsAt as string;
}
if (categories) {
  Object.entries(categories).forEach(([key, value]) => {
    if (!value) return;
    activeFilters.categories[key] = Array.isArray(value)
      ? (value.filter((v) => !!v) as string[])
      : [value];
  });
}

/**
 * Fetch events when filters change
 */

watch(
  () => activeFilters,
  () => {
    if (ignoreFiltersWatcher) {
      ignoreFiltersWatcher = false;
      return;
    }

    page.value = 1;
    fetchEvents();
  },
  {
    deep: true,
    immediate: true,
  }
);

function fetchEvents() {
  getEvents({ filters: activeFilters, page: page.value }).then(
    ({
      events: newEvents,
      hasMore: newHasMore,
      filters: newFilters,
      count: newCount,
    }) => {
      if (page.value === 1) {
        events.value = newEvents;
      } else {
        events.value.push(...newEvents);
      }

      count.value = newCount;
      hasMore.value = newHasMore;
      page.value += 1;

      ignoreFiltersWatcher = true;
      updateFilters(newFilters);
    }
  );
}
</script>
