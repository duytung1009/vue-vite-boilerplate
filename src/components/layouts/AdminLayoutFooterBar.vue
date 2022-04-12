<template>
  <footer v-show="isFooterBarVisible" class="bg-white py-2 px-6 dark:bg-gray-900/70">
    <div class="text-center md:text-left">
      <b>&copy; {{ year }}, <a href="https://justboil.me/" target="_blank">JustBoil.me</a>.</b>
      Get more with
      <a href="https://justboil.me/tailwind-admin-templates/vue-dashboard/" target="_blank" class="text-blue-600"
        >Premium version</a
      >
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'AdminLayoutFooterBar',
  setup() {
    const store = useStore();
    const year = computed(() => new Date().getFullYear());
    const isFooterBarVisible = computed(() => !store.state.isFullScreen);
    return {
      store,
      year,
      isFooterBarVisible,
    };
  },
});
</script>
