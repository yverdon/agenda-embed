<template>
  <div v-if="event">
    <div class="grid md:grid-cols-[2fr_1fr] gap-x-24 gap-y-8 items-start">
      <div>
        <div class="flex items-start gap-5 mb-6">
          <a
            :href="eventsRoute.href"
            class="btn btn--primary btn--icon mt-1"
            @click.prevent="goBack"
          >
            <span class="sr-only">Retour à la liste</span>
            <ArrowLeft />
          </a>
          <h2 class="text-3xl md:text-5xl">{{ event.title }}</h2>
        </div>

        <div class="flex flex-wrap gap-6 mt-6">
          <div class="text-2xl">{{ event.datesHumanized }}</div>
          <EventStatus v-if="event.status" :status="event.status" />
        </div>

        <EventPicture :poster="event.poster" class="mt-6 md:hidden" />

        <template v-if="event instanceof Event">
          <div v-if="event.summary" class="mt-6 whitespace-pre-line">
            {{ event.summary }}
          </div>

          <div
            v-if="event.locationDetails || event.pricing || event.website"
            class="metadata grid mt-8"
          >
            <div v-if="event.locationDetails" class="metadata__item flex py-4">
              <div class="pt-0.5 mr-4">
                <PinAlt width="24" height="24" />
              </div>
              <div class="whitespace-pre-line">{{ event.locationDetails }}</div>
            </div>
            <div v-if="event.pricing" class="metadata__item flex py-4">
              <div class="pt-0.5 mr-4">
                <Wallet width="24" height="24" />
              </div>
              <div class="whitespace-pre-line">{{ event.pricing }}</div>
            </div>
            <div v-if="event.website" class="metadata__item flex py-4">
              <div class="pt-0.5 mr-4">
                <ArrowTrSquare width="24" height="24" />
              </div>
              <div>
                <a :href="event.website" target="_blank">{{
                  event.websiteFormatted
                }}</a>
              </div>
            </div>
          </div>

          <template v-if="event.schedule">
            <h3 class="text-3xl mt-8 mb-3">Horaires</h3>
            <div class="whitespace-pre-line">{{ event.schedule }}</div>
          </template>

          <div v-if="event.categories" class="grid sm:grid-cols-2 gap-8 mt-8">
            <div v-for="(category, k) in event.categories" :key="k">
              <h3 class="text-3xl mb-3">{{ category.label }}</h3>
              <ul class="flex flex-wrap gap-3">
                <li v-for="value in category.values" :key="value.id">
                  <RouterLink
                    :to="{ name: 'events', query: { [k]: value.id } }"
                    class="pill"
                    >{{ value.label }}</RouterLink
                  >
                </li>
              </ul>
            </div>
          </div>
        </template>
        <Loader v-else class="mt-6" />
      </div>

      <div>
        <EventPicture :poster="event.poster" class="hidden md:block" />

        <div
          v-if="event instanceof Event && event.organizer"
          class="mt-8 grid gap-3"
        >
          <h3 class="text-3xl">Organisateur</h3>
          <div v-if="event.organizer.name">
            {{ event.organizer.name }}
          </div>
          <div v-if="event.organizer.address" class="whitespace-pre-line">
            {{ event.organizer.address }}
          </div>
          <div v-if="event.organizer.phone">
            {{ event.organizer.phone }}
          </div>
          <div v-if="event.organizer.email">
            <a :href="`mailto:${event.organizer.email}`">{{
              event.organizer.email
            }}</a>
          </div>
          <div v-if="event.organizer.website">
            <a :href="event.organizer.website" target="_blank">{{
              event.organizerWebsiteFormatted
            }}</a>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-12 pt-6 border-t border-[--agd-color-depth-dark]">
      <a
        :href="eventsRoute.href"
        class="flex items-center gap-3 mb-6"
        @click.prevent="goBack"
      >
        <div class="btn btn--primary btn--icon">
          <ArrowLeft />
        </div>
        Retour à la liste
      </a>
    </div>
  </div>
  <Loader v-else />
</template>

<script lang="ts" setup>
import { ArrowLeft, ArrowTrSquare, PinAlt, Wallet } from '@iconoir/vue';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import useEvents from '@/composables/useEvents';

import { getEvent } from '@/services/eventsService';

import Event from '@/models/Event';
import EventLight from '@/models/EventLight';

import EventPicture from '../components/EventPicture.vue';
import Loader from '../components/Loader.vue';
import EventStatus from '@/components/EventStatus.vue';

const route = useRoute();
const router = useRouter();

const eventsCollection = useEvents();

const lightEvent = eventsCollection.events.value.find(
  (e) => e.id === Number(route.params.id)
);

const event = ref<Event | EventLight | null>(lightEvent ?? null);

onMounted(async () => {
  event.value = await getEvent(route.params.id as string);
});

const eventsRoute = router.resolve({ name: 'events' });

function goBack() {
  if (router.options.history.state.back) {
    router.back();
  } else {
    router.push({ name: 'events' });
  }
}
</script>
