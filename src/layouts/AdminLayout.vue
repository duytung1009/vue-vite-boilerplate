<template>
  <!-- <AdminLayoutNavBar /> -->
  <!-- <AdminLayoutAsideMenu :menu="menu" /> -->
  <router-view />
  <AdminLayoutFooterBar />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import AdminLayoutNavBar from '@/components/layouts/AdminLayoutNavBar.vue';
// import AdminLayoutAsideMenu from '@/components/layouts/AdminLayoutAsideMenu.vue';
import AdminLayoutFooterBar from '@/components/layouts/AdminLayoutFooterBar.vue';

export default defineComponent({
  name: 'AdminLayout',
  components: {
    // AdminLayoutNavBar,
    // AdminLayoutAsideMenu,
    AdminLayoutFooterBar,
  },
});
</script>
