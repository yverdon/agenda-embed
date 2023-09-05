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

<script lang="ts">
import router from '@/router';
import { IconoirProvider } from '@iconoir/vue';
import { createApp, defineComponent, getCurrentInstance } from 'vue';
import { RouterView } from 'vue-router';

export default defineComponent({
  components: {
    IconoirProvider,
    RouterView,
  },

  setup() {
    const app = createApp({});
    app.use(router);

    const inst = getCurrentInstance();
    if (inst) {
      Object.assign(inst.appContext, app._context);
      // @ts-ignore
      Object.assign(inst.provides, app._context.provides);
    }
  },
});
</script>

<style>
@import '@/assets/css/main.css';
</style>
