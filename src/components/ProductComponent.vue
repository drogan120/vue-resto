<template>
    <div
      class="shadow-lg rounded-md mr-6 ml-6 mt-3 mb-3 pb-6 bg-green-100 text-gray-600"
    >
      <img :src="`assets/images/${product.image}`" class="rounded-t-lg" />
      <div class="p-3 mt-2 mb-2">
        <p class="text-gray-600 text-left text-xl font-semibold">
          {{ product.name }}
        </p>
        <p class="mt-2 mb-2">Rp. {{ product.price }}</p>
        <router-link
          :to="`/menu/${product.id}`"
          class="rounded mt-3 bg-green-500 hover:bg-green-800 p-2 h-1 w-3 text-gray-100 text-xs"
          >Get
        </router-link>
      </div>
    </div>
</template>

<script lang="ts">
export default {
  name: 'Product',
  props: [
    'product',
  ],
};
</script>
