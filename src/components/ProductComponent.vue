<template>
      <div class="shadow-lg rounded-md mr-6 ml-6 mt-3 pb-6">
        <img :src="`assets/images/${product.image}`" class="rounded-t-lg" />
        <div class="p-3">
          <p class="mt-2 mb-2 text-gray-600 text-left text-xl font-semibold">
          {{ product.name }}
        </p>
        <div>
          <!-- <router-link
            to="/twitter"
            class="rounded bg-blue-400 hover:bg-indigo-600 p-2 text-gray-100 text-xs mb-2 mt-2"
            >twitter
          </router-link> -->
        </div>
        </div>
      </div>
</template>
<script>
export default {
  name: 'CardProduct',
  props: [
    'product',
  ],
};
</script>
