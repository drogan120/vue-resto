<template>
  <div class="menu">
  <div class="container mt-5 mx-6">
    <input
      type="text"
      placeholder="Search menu.."
      v-model="keywordSearch"
      class="w-full p-3 rounded bg-green-50 text-gray-600
      border-gray-600 text-md focus:outline-none"
      @keyup="findProduct"
    />
  </div>

    <div class="grid grid-cols-2 md:grid-cols-4 mt-5 mb-5">
      <div v-for="product in products" :key="product.id">
        <Products :product="product"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import Products from '@/components/ProductComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Menu',
  components: {
    Products,
  },
  data() {
    return {
      products: [],
      keywordSearch: '',
    };
  },
  methods: {
    getProducts(data: []) {
      this.products = data;
    },
    async findProduct() {
      await axios.get(`http://localhost:3000/products?q=${this.keywordSearch}`)
        .then((res) => this.getProducts(res.data))
        .catch((err) => console.log(err));
    },
  },
  async mounted() {
    await axios.get('http://localhost:3000/products')
      .then((res) => this.getProducts(res.data))
      .catch((err) => console.log(err));
  },
});
</script>
