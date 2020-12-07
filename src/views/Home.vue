<template>
  <div class="home">
    <Navbar />
    <Header />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '../components/HeaderComponent.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Header,
  },
});
</script>
