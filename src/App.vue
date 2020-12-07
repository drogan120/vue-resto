<template>
  <Navbar />
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/components/NavbarComponent.vue';

export default defineComponent({
  components: {
    Navbar,
  },
});
</script>
