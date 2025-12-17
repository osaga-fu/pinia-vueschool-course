<script setup>
// imports
import { ref } from "vue";
import AppCountInput from "./AppCountInput.vue";
import { useCartStore } from "../stores/CartStore";

// props
const props = defineProps({
  product: Object,
});

// data
const count = ref(0);
const cartStore = useCartStore();

// methods
function addToCart() {
  if (count.value < 1) return;
  cartStore.addItems(count.value, props.product);
  count.value = 0; // reset count after adding to cart
}
</script>
<template>
  <li class="card">
    <img :src="`/images/${product.image}`" class="mb-3" width="300" />
    <div>
      {{ product.name }} -
      <span class="text-green-500">${{ product.price }}</span>
      <div class="text-center m-4">
        <AppCountInput v-model="count" />
      </div>
      <AppButton class="primary" @click="addToCart">Add to Cart</AppButton>
    </div>
  </li>
</template>
