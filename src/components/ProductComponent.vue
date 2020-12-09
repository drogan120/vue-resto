<template>
  <div class="grid container">
    <div class="grid-cols-4 mx-auto">
      <div class="w-2/12 shadow-lg p-3 rounded-md mr-6 ml-6">
        <img :src="`assets/images/${product.image}`" class="mx-auto" />
        <p class="mt-2 mb-2 text-gray-600 text-left text-sm">
          {{ product.name }}
        </p>
        <div>
          <router-link
            to="/twitter"
            class="rounded bg-blue-400 hover:bg-indigo-600 p-2 text-gray-100 text-xs mb-2 mt-2"
            >twitter
          </router-link>
        </div>
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
