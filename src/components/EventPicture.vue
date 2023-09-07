<template>
  <picture v-if="poster">
    <img
      :src="poster.src"
      :width="poster.width"
      :height="poster.height"
      alt=""
      v-bind="$attrs"
    />
  </picture>
</template>

<script lang="ts" setup>
import { type RawEventLightProps } from '../models/EventLight';

defineProps<{ poster: RawEventLightProps['poster'] }>();
</script>
