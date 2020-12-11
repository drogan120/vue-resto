<template>
  <Navbar />
  <router-view />
  <Footer />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/components/NavbarComponent.vue';
import Footer from '@/components/FooterComponent.vue';

export default defineComponent({
  components: {
    Navbar,
    Footer,
  },
});
</script>
