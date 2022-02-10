<template>
  <Transition
    enter-active-class="duration-0 opacity-100 animate-pulse"
    leave-active-class="duration-300 ease-in-out"
    leave-from-class="opacity-100"
    leave-to-class="transform opacity-0"
  >
    <div v-if="isFetching" class="fixed top-4 left-4 bg-gray-500 px-3 py-1 rounded-sm">
      <span class="text-white text-sm font-medium">Fetching data...</span>
    </div>
  </Transition>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useIsFetching } from 'vue-query';

export default defineComponent({
  setup() {
    return {
      isFetching: useIsFetching(),
    };
  },
});
</script>
