<template>
  <div>
    <h1>Total Price</h1>
    <p>Total Price: ${{ totalPrice }}</p>
    <p>Total Price renders: {{ totalPriceRenders }}</p>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "TotalPrice",
  props: {
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  setup() {
    const totalPriceRenders = ref(0);
    totalPriceRenders.value += 1;

    return {
      totalPriceRenders,
    };
  },
};
</script>
