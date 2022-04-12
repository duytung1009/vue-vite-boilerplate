<template>
  <!-- Small -->
  <button
    v-if="size === 'SMALL'"
    type="button"
    class="px-3 py-2 text-xs font-medium text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-md dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
    @click="onClick"
  >
    {{ label }}
  </button>
  <!-- Medium -->
  <button
    v-if="size === 'MEDIUM'"
    type="button"
    class="px-5 py-2.5 text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-md dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
    @click="onClick"
  >
    {{ label }}
  </button>
  <!-- Large -->
  <button
    v-if="size === 'LARGE'"
    type="button"
    class="px-6 py-3.5 text-base font-medium text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-md dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export type AtomButtonSize = 'SMALL' | 'MEDIUM' | 'LARGE';

export default defineComponent({
  props: {
    label: { type: String },
    size: { type: String, default: 'MEDIUM' },
  },
  emits: ['click'],
  setup(props, { emit }) {
    return {
      onClick: ($event: MouseEvent) => emit('click', $event),
    };
  },
});
</script>
