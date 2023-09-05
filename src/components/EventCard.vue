<template>
  <RouterLink
    :to="{ name: 'event', params: { id: event.id } }"
    class="card grid grid-rows-[auto,1fr] group bg-depth"
  >
    <picture class="aspect-[2.1/2.97] object-cover overflow-hidden card__media">
      <img
        v-if="event.poster"
        :src="event.poster.src"
        :width="event.poster.width"
        :height="event.poster.height"
        alt=""
        loading="lazy"
        class="h-full object-cover group-hover:scale-110 transition duration-300 ease-out"
      />
    </picture>
    <div class="grid content-between p-5 md:p-7">
      <div>
        <h2 class="text-2xl md:text-3xl">{{ event.title }}</h2>
        <div class="mt-3 font-bold">{{ event.datesHumanized }}</div>
        <div v-if="event.location" class="mt-3">{{ event.location }}</div>
      </div>
      <div class="mt-6 md:mt-12 flex items-center">
        <EventStatus v-if="event.status" :status="event.status" />
        <div class="btn btn--primary btn--icon ml-auto">
          <ArrowRight />
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<script lang="ts" setup>
import { ArrowRight } from '@iconoir/vue';
import { RouterLink } from 'vue-router';

import type EventLight from '@/models/EventLight';

import EventStatus from './EventStatus.vue';

defineProps<{ event: EventLight }>();
</script>
