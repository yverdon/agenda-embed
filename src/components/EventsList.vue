<template>
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

import useFilters from '@/composables/useFilters';

import { getEvents } from '@/services/eventsService';

import type EventLight from '@/models/EventLight';

import EventCard from './EventCard.vue';

const { activeFilters, updateFilters } = useFilters();
const events = ref<EventLight[]>([]);
const page = ref(1);
const hasMore = ref(false);
let ignoreFiltersWatcher: boolean = false;

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
    ({ events: newEvents, hasMore: newHasMore, filters: newFilters }) => {
      if (page.value === 1) {
        events.value = newEvents;
      } else {
        events.value.push(...newEvents);
      }

      hasMore.value = newHasMore;
      page.value += 1;

      ignoreFiltersWatcher = true;
      updateFilters(newFilters);
    }
  );
}
</script>
