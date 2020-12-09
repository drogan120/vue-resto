<template>
  <div class="home">
    <Navbar />
    <Header />
    <div v-for="product in products" :key="product.id">
      <CardProduct :product="product"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import Header from '@/components/HeaderComponent.vue';
import CardProduct from '@/components/ProductComponent.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    CardProduct,
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
    axios.get('http://localhost:3000/products')
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
});
</script>
