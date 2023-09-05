import { reactive, ref, watch } from 'vue';
import { useRouter } from 'vue-router';

import type { EventFilter } from '../services/eventsService';

export type ActiveFilters = {
  query: string;
  startsAt: string | null;
  endsAt: string | null;
  categories: Record<string, Array<string | number>>;
};

const availableFilters = ref<EventFilter[]>([]);
const activeFilters = reactive<ActiveFilters>({
  query: '',
  startsAt: null,
  endsAt: null,
  categories: {},
});

export default function useFilters() {
  const router = useRouter();

  watch(
    () => activeFilters,
    () => {
      const { categories, ...otherFilters } = activeFilters;
      router.replace({ query: { ...otherFilters, ...categories } });
    },
    {
      deep: true,
    }
  );

  function updateFilters(filters: EventFilter[]) {
    const newCategories: ActiveFilters['categories'] = {};

    filters.forEach((f) => {
      newCategories[f.slug] = activeFilters.categories[f.slug] || [];
    });

    activeFilters.categories = newCategories;
    availableFilters.value = filters;
  }

  function resetDates(): void {
    activeFilters.startsAt = null;
    activeFilters.endsAt = null;
  }

  function resetQuery(): void {
    activeFilters.query = '';
  }

  function resetCategories(): void {
    const categories: ActiveFilters['categories'] = {};

    availableFilters.value.forEach((f) => {
      categories[f.slug] = [];
    });

    activeFilters.categories = categories;
  }

  function resetAll() {
    resetDates();
    resetQuery();
    resetCategories();
  }

  return {
    availableFilters,
    activeFilters,
    updateFilters,
    resetDates,
    resetQuery,
    resetCategories,
    resetAll,
  };
}
