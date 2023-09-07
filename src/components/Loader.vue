<template>
  <div class="flex items-center gap-5">
    <div class="loader"></div>
    {{ label }}
  </div>
</template>

<script lang="ts" setup>
const { label } = defineProps({
  label: {
    type: String,
    default: 'Chargement en cours…',
  },
});
</script>
