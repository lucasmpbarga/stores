<template>
  <div>
    <h1>Total Price</h1>
    <p>Total Price: ${{ cartStore.totalPrice }}</p>
    <p>Total Price renders: {{ totalPriceRenders }}</p>
  </div>
</template>

<script>
import { useCartStore } from "@/store";
import { ref } from "vue";

export default {
  name: "TotalPrice",
  setup() {
    const totalPriceRenders = ref(0);
    totalPriceRenders.value += 1;

    const cartStore = useCartStore();

    return {
      totalPriceRenders,
      cartStore,
    };
  },
};
</script>
