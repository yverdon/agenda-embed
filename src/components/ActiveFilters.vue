<template>
  <div
    v-if="dates || activeFilters.query || activeCategories?.length"
    class="flex flex-wrap items-center gap-x-4 gap-y-3"
  >
    <ul
      class="flex flex-wrap items-center gap-x-4 gap-y-3"
      aria-label="Filtres actifs"
      role="list"
    >
      <li v-if="dates">
        <button type="button" class="pill" @click="resetDates">
          <span class="sr-only">Supprimer</span>
          {{ dates }}
          <Cancel />
        </button>
      </li>
      <li v-if="activeFilters.query" @click="resetQuery">
        <button type="button" class="pill">
          <span class="sr-only">Supprimer</span>
          “{{ activeFilters.query }}”
          <Cancel />
        </button>
      </li>
      <li v-for="({ option, reset }, k) in activeCategories" :key="k">
        <button type="button" class="pill" @click="reset">
          <span class="sr-only">Supprimer</span>
          {{ option.label }}
          <Cancel />
        </button>
      </li>
    </ul>

    <button type="button" class="btn btn--link p-0" @click="resetAll">
      <span class="sr-only">Supprimer</span>
      <Cancel />
      Réinitialiser les filtres
    </button>
  </div>
</template>

<script lang="ts" setup>
import { Cancel } from '@iconoir/vue';
import { computed } from 'vue';

import { humanizeDatesPair } from '@/helpers/date';

import useFilters from '../composables/useFilters';

import type { EventFilterOption } from '../services/eventsService';

const { activeFilters, availableFilters, resetDates, resetQuery, resetAll } =
  useFilters();

const activeCategories = computed(() => {
  const activeCategories: Array<{
    option: EventFilterOption;
    reset: () => void;
  }> = [];

  Object.entries(activeFilters.categories).forEach(
    ([slug, selectedOptions]) => {
      if (selectedOptions.length) {
        const filter = availableFilters.value.find(
          (filter) => filter.slug === slug
        );

        selectedOptions.forEach((optionId) => {
          const option = filter?.options.find((o) => o.id === Number(optionId));
          if (option)
            activeCategories.push({
              option,
              reset: () => {
                const values = activeFilters.categories[slug];
                const valueIndex = values.findIndex((v) => v === optionId);
                values.splice(valueIndex, 1);
              },
            });
        });
      }
    }
  );

  return activeCategories;
});

const dates = computed(() => {
  if (activeFilters.startsAt && activeFilters.endsAt) {
    return humanizeDatesPair(activeFilters.startsAt, activeFilters.endsAt);
  }
  return '';
});
</script>
