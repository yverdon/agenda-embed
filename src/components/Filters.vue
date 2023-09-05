<template>
  <div
    class="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-x-12 gap-y-6"
  >
    <fieldset v-for="filter in availableFilters" :key="filter.slug">
      <legend class="mb-2 text-lg font-bold">
        {{ filter.label }}
      </legend>
      <ul class="grid gap-1">
        <li v-for="option in filter.options" :key="option.id">
          <label
            :for="`filter-${filter.slug}-${option.id}`"
            class="flex gap-2 items-baseline"
          >
            <input
              :id="`filter-${filter.slug}-${option.id}`"
              v-model="activeFilters.categories[filter.slug]"
              type="checkbox"
              :value="option.id"
            />
            {{ option.label }}
          </label>
        </li>
      </ul>
    </fieldset>
  </div>
</template>

<script lang="ts" setup>
import useFilters from '@/composables/useFilters';

const { activeFilters, availableFilters } = useFilters();
</script>
