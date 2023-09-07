<template>
  <div class="filters-bar grid gap-3 lg:gap-x-6 relative">
    <button
      type="button"
      class="btn btn--primary"
      :class="{ active: filtersOpen }"
      aria-controls="filters-collapse"
      :aria-expanded="filtersOpen ? 'true' : 'false'"
      @click="
        filtersOpen = !filtersOpen;
        datesOpen = false;
      "
    >
      Filtrer
      <div class="ml-auto">
        <NavArrowUp v-if="filtersOpen" />
        <NavArrowDown v-else />
      </div>
    </button>

    <Filters
      v-show="filtersOpen"
      id="filters-collapse"
      class="filters-bar__collapse p-5 bg-depth"
    />

    <fieldset class="max-lg:hidden flex gap-x-1">
      <legend class="sr-only">Raccourci dates</legend>
      <label
        for="today"
        class="btn btn--secondary"
        :class="{ active: quickDate === 'today' }"
      >
        <input
          id="today"
          v-model="quickDate"
          type="radio"
          value="today"
          name="quick-dates"
        />
        Aujourd’hui
      </label>
      <label
        for="tomorrow"
        class="btn btn--secondary"
        :class="{ active: quickDate === 'tomorrow' }"
      >
        <input
          id="tomorrow"
          v-model="quickDate"
          type="radio"
          value="tomorrow"
          name="quick-dates"
        />
        Demain
      </label>
      <label
        for="weekend"
        class="btn btn--secondary"
        :class="{ active: quickDate === 'weekend' }"
      >
        <input
          id="weekend"
          v-model="quickDate"
          type="radio"
          value="weekend"
          name="quick-dates"
        />
        Ce week-end
      </label>
      <label
        for="week"
        class="btn btn--secondary"
        :class="{ active: quickDate === 'week' }"
      >
        <input
          id="week"
          v-model="quickDate"
          type="radio"
          value="week"
          name="quick-dates"
        />
        Cette semaine
      </label>
    </fieldset>

    <button
      type="button"
      class="btn btn--primary"
      :class="{ active: datesOpen }"
      aria-controls="dates-collapse"
      :aria-expanded="datesOpen ? 'true' : 'false'"
      @click="
        datesOpen = !datesOpen;
        filtersOpen = false;
      "
    >
      Choisir une période
      <div class="ml-auto">
        <NavArrowUp v-if="datesOpen" />
        <NavArrowDown v-else />
      </div>
    </button>

    <div
      v-show="datesOpen"
      id="dates-collapse"
      class="filters-bar__collapse p-5 bg-depth"
    >
      <div class="flex flex-wrap items-end gap-6 lg:gap-x-12">
        <div class="flex-auto w-full md:w-auto md:max-w-[220px]">
          <label for="date-from" class="block mb-3 font-bold text-lg">
            Date de début
          </label>
          <input
            id="date-from"
            v-model="activeFilters.startsAt"
            type="date"
            name="date-from"
            class="field"
          />
        </div>

        <div class="flex-auto w-full md:w-auto md:max-w-[220px]">
          <label for="date-from" class="block mb-3 font-bold text-lg">
            Date de fin
          </label>
          <input
            id="date-to"
            v-model="activeFilters.endsAt"
            type="date"
            name="date-to"
            class="field"
          />
        </div>

        <div class="flex-auto">
          <button
            type="button"
            class="btn btn--link px-0 sm:min-h-[45px]"
            @click="resetDates"
          >
            <Cancel /> Réinitialiser les dates
          </button>
        </div>
      </div>
    </div>

    <div class="filters-bar__search">
      <label for="search" class="sr-only">Rechercher</label>
      <div class="relative flex items-center">
        <input
          id="search"
          :value="activeFilters.query"
          type="search"
          name="search"
          placeholder="Rechercher"
          class="field px-10"
          @input="handleQueryChange(($event.target as HTMLInputElement).value)"
        />
        <Search class="absolute left-3 pointer-events-none" />
        <button
          v-if="activeFilters.query"
          type="button"
          class="p-3 absolute right-0"
          @click="activeFilters.query = ''"
        >
          <Cancel />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NavArrowDown, NavArrowUp } from '@iconoir/vue';
import { Cancel, Search } from '@iconoir/vue';
import { useDebounceFn } from '@vueuse/core/index.cjs';
import { ref, watch } from 'vue';

import { today, tomorrow, week, weekend } from '@/helpers/date';

import useFilters from '../composables/useFilters';

import Filters from './Filters.vue';

const filtersOpen = ref(false);
const datesOpen = ref(false);
const quickDate = ref<'today' | 'tomorrow' | 'weekend' | 'week' | null>(null);

const { activeFilters } = useFilters();

/**
 * Set the dates filter when a shortcut is clicked
 */
watch(quickDate, () => {
  switch (quickDate.value) {
    case 'today': {
      activeFilters.startsAt = activeFilters.endsAt = today();
      break;
    }

    case 'tomorrow': {
      activeFilters.startsAt = activeFilters.endsAt = tomorrow();
      break;
    }

    case 'weekend': {
      const { start, end } = weekend();
      activeFilters.startsAt = start;
      activeFilters.endsAt = end;
      break;
    }

    case 'week': {
      const { start, end } = week();
      activeFilters.startsAt = start;
      activeFilters.endsAt = end;
      break;
    }
  }
});

/**
 * Update the shortcut to match current dates filter
 */
watch(
  () => [activeFilters.startsAt, activeFilters.endsAt],
  () => {
    const tod = today();
    if (activeFilters.startsAt === tod && activeFilters.endsAt === tod) {
      quickDate.value = 'today';
      return;
    }

    const tom = tomorrow();
    if (activeFilters.startsAt === tom && activeFilters.endsAt === tom) {
      quickDate.value = 'tomorrow';
      return;
    }

    const wkd = weekend();
    if (
      activeFilters.startsAt === wkd.start &&
      activeFilters.endsAt === wkd.end
    ) {
      quickDate.value = 'weekend';
      return;
    }

    const wk = week();
    if (
      activeFilters.startsAt === wk.start &&
      activeFilters.endsAt === wk.end
    ) {
      quickDate.value = 'week';
      return;
    }

    quickDate.value = null;
  }
);

function resetDates() {
  activeFilters.startsAt = null;
  activeFilters.endsAt = null;
}

const handleQueryChange = useDebounceFn((value: string) => {
  activeFilters.query = value;
}, 500);
</script>
