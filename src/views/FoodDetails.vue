<template>
  <div class="container w-8/12 mx-auto detail mt-5 mb-5">
    <div class="bg-gray-200 rounded-md p-4 mt-2 mb-2">Menu / Order</div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <img
          :src="`assets/images/${products.image}`"
          :alt="products.image"
          class="rounded"
        />
      </div>
      <div class="text-gray-600">
        <h4 class="text-2xl font-bold">{{ products.name }}</h4>
        <h4 class="text-xl font-semibold">Price : {{ products.price }}</h4>
        <form action="" v-on:submit.prevent>
          <div class="mt-3 mb-3">
            <label for="qty" class="text-sm block mt-2 mb-2">Quantitiy</label>
            <input
              type="text"
              name="qty"
              class="w-full p-2 rounded bg-green-50 border-gray-600 text-md focus:outline-green-200"
              v-model="orders.qty"
            />
          </div>
          <div class="mt-3 mb-3">
            <label for="notes" class="text-sm block mt-2 mb-2">Notes</label>
            <textarea
              name="notes"
              class="w-full p-2 rounded bg-green-50 border-gray-600 text-md focus:outline-green-200"
              v-model="orders.notes"
            ></textarea>
          </div>
          <div class="mt-3 mb-3">
            <button
              type="submit"
              class="rounded bg-green-200 p-2 hover:bg-green-400 hover:text-white"
              @click="Order"
            >
              Order
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Food Detail',
  methods: {
    getProduct(data: []) {
      this.products = data;
    },
    Order() {
      this.orders = this.products;
      axios
        .post('http://localhost:3000/carts', this.orders)
        .then((res) => this.getProduct(res.data))
        .catch((err) => alert(`failed to create an order ${err}`));
    },
  },
  data() {
    return {
      products: [],
      orders: [],
    };
  },
  async mounted() {
    await axios
      .get(`http://localhost:3000/products/${this.$route.params.id}`)
      .then((res) => this.getProduct(res.data))
      .catch((err) => console.log(err));
  },
});
</script>
