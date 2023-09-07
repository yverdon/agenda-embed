<template>
  <div
    class="grid sm:grid-cols-[1fr_auto] gap-6 items-end mb-8 text-base min-h-[calc(1.75rem+2px)]"
  >
    <ActiveFilters />
    <div v-if="count !== null" class="col-start-2 text-right">
      {{ count === 1 ? '1 Résultat' : `${count} Résultats` }}
    </div>
  </div>

  <Loader v-if="loading" class="justify-center" />
  <template v-else>
    <template v-if="events.length">
      <div
        class="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3 md:gap-5"
      >
        <EventCard v-for="event in events" :key="event.id" :event="event" />
      </div>
      <div v-if="hasMore" class="flex justify-center mt-12">
        <Loader v-if="loadingMore" />
        <button v-else type="button" class="btn btn--primary" @click="loadMore">
          Charger plus de résultats
        </button>
      </div>
    </template>
    <div v-else class="py-2 text-center italic">
      Il n’y a actuellement aucun événement pour les critères sélectionnés.
    </div>
  </template>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import useEvents from '@/composables/useEvents';
import useFilters from '@/composables/useFilters';

import { getEvents } from '@/services/eventsService';

import ActiveFilters from './ActiveFilters.vue';
import EventCard from './EventCard.vue';
import Loader from './Loader.vue';

const { activeFilters, updateFilters } = useFilters();
const { count, events, page, hasMore } = useEvents();
const loading = ref(events.value.length === 0);
const loadingMore = ref(false);
let lastRequestId: Record<string, unknown> | null = null;
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
  activeFilters.categories = {};
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
  activeFilters,
  () => {
    if (ignoreFiltersWatcher) {
      ignoreFiltersWatcher = false;
      return;
    }

    page.value = 1;
    loading.value = true;

    fetchEvents().finally(() => {
      loading.value = false;
    });
  },
  {
    deep: true,
  }
);

function fetchEvents() {
  const requestId = {};
  lastRequestId = requestId;

  return getEvents({ filters: activeFilters, page: page.value }).then(
    ({
      events: newEvents,
      hasMore: newHasMore,
      filters: newFilters,
      count: newCount,
    }) => {
      // Ignore results if another request was fired since
      if (requestId !== lastRequestId) return;

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

function loadMore() {
  loadingMore.value = true;

  fetchEvents().finally(() => {
    loadingMore.value = false;
  });
}

onMounted(() => {
  if (!events.value.length) {
    fetchEvents().finally(() => {
      loading.value = false;
    });
  }
});
</script>
