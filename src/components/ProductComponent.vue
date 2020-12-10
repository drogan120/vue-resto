<template>
<div class="grid grid-cols-2 md:grid-cols-4 mt-5 mb-5 mx-auto">
  <div
    class="shadow-lg rounded-md mr-6 ml-6 mt-3 mb-3 pb-6"
    v-for="product in products"
    :key="product.id"
  >
    <img :src="`assets/images/${product.image}`" class="rounded-t-lg" />
    <div class="p-3 mt-2 mb-2">
      <p class="text-gray-600 text-left text-xl font-semibold">
        {{ product.name }}
      </p>
      <p class="mt-2 mb-2">Rp. {{ product.price }}</p>
      <router-link
        to="`/products/${product.id}`"
        class="rounded bg-blue-400 hover:bg-indigo-600 p-2 text-gray-100 text-xs"
        >Get
      </router-link>
    </div>
  </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'CardProduct',
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getProducts(data) {
      this.products = data;
    },
  },
  mounted() {
    axios.get('http://localhost:3000/products')
      .then((res) => this.getProducts(res.data))
      .catch((err) => console.log(err));
  },
};
</script>
