<template>
  <div
    class="badge inline-block px-4 py-1 text-base"
    :class="`badge--${variant}`"
  >
    {{ label }}
  </div>
</template>

<script lang="ts" setup>
import { EventStatus } from '@/models/EventLight';

const { status } = defineProps<{ status: EventStatus }>();

// TODO: Localize
const label = status;
const variants = {
  [EventStatus.CANCELLED]: 'danger',
  [EventStatus.SOLDOUT]: 'warning',
};
const variant = variants[status];
</script>
