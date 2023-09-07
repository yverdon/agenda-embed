import { ref } from 'vue';

import type EventLight from '../models/EventLight';

const domain = ref<string | null>(null);
const count = ref<number | null>(null);
const events = ref<EventLight[]>([]);
const page = ref(1);
const hasMore = ref(false);

export default function useEvents() {
  return {
    domain,
    count,
    events,
    page,
    hasMore,
  };
}
