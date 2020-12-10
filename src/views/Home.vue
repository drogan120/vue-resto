<template>
  <div class="home">
    <Header />
    <div class="grid grid-cols-2 md:grid-cols-4 mt-5 mb-5 mx-auto">
      <div v-for="product in products" :key="product.id">
        <BestProduct :product="product"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import Header from '@/components/HeaderComponent.vue';
import BestProduct from '@/components/BestProductComponent.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    BestProduct,
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
  mounted() {
    axios.get('http://localhost:3000/best-products')
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
});
</script>
