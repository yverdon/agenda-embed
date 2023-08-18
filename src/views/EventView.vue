<template>
  <div class="flex gap-5">
    <RouterLink :to="{ name: 'events' }" class="btn btn--primary btn--icon">
      <ArrowLeft />
    </RouterLink>
    <h2>This is the detail</h2>
  </div>
</template>

<script lang="ts" setup>
import { ArrowLeft } from '@iconoir/vue';
</script>
