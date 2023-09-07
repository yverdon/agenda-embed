import { reactive, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import type { EventFilter } from '../services/eventsService';

export type ActiveFilters = {
  domain: string | null;
  query: string;
  startsAt: string | null;
  endsAt: string | null;
  categories: Record<string, Array<string | number>>;
};

const availableFilters = ref<EventFilter[]>([]);
export const activeFilters = reactive<ActiveFilters>({
  domain: null,
  query: '',
  startsAt: null,
  endsAt: null,
  categories: {},
});

export default function useFilters() {
  const router = useRouter();
  const route = useRoute();

  watch(
    activeFilters,
    () => {
      // Purposefuly do not persist `domain` in the URL, its an internal filter
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { domain, categories, ...otherFilters } = activeFilters;
      const query = { ...otherFilters, ...categories };

      Object.entries(query).forEach(([key, value]) => {
        if (!value || value.length === 0) {
          delete query[key as keyof typeof query];
        }
      });

      // Avoid triggering router navigation if nothing changed
      // it tends to freak out the scroll behavior
      if (JSON.stringify(route.query) !== JSON.stringify(query)) {
        router.replace({ query: query });
      }
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
