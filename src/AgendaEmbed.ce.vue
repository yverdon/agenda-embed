<template>
  <IconoirProvider
    :icon-props="{
      color: 'currentColor',
      'stroke-width': 1.5,
      width: 20,
      height: 20,
    }"
  >
    <RouterView />
  </IconoirProvider>
</template>

<script lang="ts" setup>
import router from '@/router';
import { IconoirProvider } from '@iconoir/vue';
import { createApp, getCurrentInstance } from 'vue';
import { RouterView } from 'vue-router';

import { API_BASE_URL } from '@/helpers/options';

import { activeFilters } from '@/composables/useFilters';

const props = defineProps<{
  domain?: 'sports' | 'culture';
  apiBaseUrl?: string;
}>();

// Explicitely not `useFilter()` here as it triggers the router in the background
// but it’s not initialized yet
if (props.domain) {
  activeFilters.domain = props.domain;
}

if (props.apiBaseUrl) {
  API_BASE_URL.value = props.apiBaseUrl;
}

/**
 * Encapsulate the whole app inside the Web Component
 * essentially to have the router, which requires an app
 */

const app = createApp({});
app.use(router);

const inst = getCurrentInstance();
if (inst) {
  Object.assign(inst.appContext, app._context);
  // @ts-ignore
  Object.assign(inst.provides, app._context.provides);
}
</script>

<style>
@import '@/assets/css/main.css';
</style>
