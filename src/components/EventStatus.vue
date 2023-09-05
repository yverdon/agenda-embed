<template>
  <div
    class="badge inline-block px-4 py-1 text-base"
    :class="`badge--${variant}`"
  >
    {{ labels[status] }}
  </div>
</template>

<script lang="ts" setup>
import { EventStatus } from '@/models/EventLight';

const { status } = defineProps<{ status: EventStatus }>();

const labels = {
  [EventStatus.CANCELLED]: 'Annulé',
  [EventStatus.SOLDOUT]: 'Complet',
};
const variants = {
  [EventStatus.CANCELLED]: 'danger',
  [EventStatus.SOLDOUT]: 'warning',
};
const variant = variants[status];
</script>
