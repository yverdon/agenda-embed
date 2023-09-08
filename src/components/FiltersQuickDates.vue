<template>
  <fieldset class="flex flex-wrap gap-1">
    <legend class="sr-only">Raccourci dates</legend>
    <label
      class="btn btn--secondary flex-auto"
      :class="{ active: value === 'today' }"
    >
      <input
        v-model="value"
        type="radio"
        value="today"
        :name="`quick-dates-${id}`"
      />
      Aujourd’hui
    </label>
    <label
      class="btn btn--secondary flex-auto"
      :class="{ active: value === 'tomorrow' }"
    >
      <input
        v-model="value"
        type="radio"
        value="tomorrow"
        :name="`quick-dates-${id}`"
      />
      Demain
    </label>
    <label
      class="btn btn--secondary flex-auto"
      :class="{ active: value === 'weekend' }"
    >
      <input
        v-model="value"
        type="radio"
        value="weekend"
        :name="`quick-dates-${id}`"
      />
      Ce week-end
    </label>
    <label
      class="btn btn--secondary flex-auto"
      :class="{ active: value === 'week' }"
    >
      <input
        v-model="value"
        type="radio"
        value="week"
        :name="`quick-dates-${id}`"
      />
      Cette semaine
    </label>
  </fieldset>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
  modelValue: string | null;
  id: string;
}>();

const emit = defineEmits(['update:modelValue']);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});
</script>
