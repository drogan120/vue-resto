<template>
  <div class="home">
    <Header />
    <div class="grid grid-cols-2 md:grid-cols-4 mt-5 mb-5">
      <div v-for="product in products" :key="product.id">
        <Products :product="product"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import Header from '@/components/HeaderComponent.vue';
import Products from '@/components/ProductComponent.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    Products,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProduct(data: []) {
      this.products = data;
    },
  },
  async mounted() {
    await axios.get('http://localhost:3000/best-products')
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
});
</script>
