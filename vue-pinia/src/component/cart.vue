<template>
  <div>
    <h1>Cart</h1>
    <ItemsList />
    <TotalPrice />
  </div>
</template>

<script>
import ItemsList from "./items-list.vue";
import TotalPrice from "./total-price.vue";

export default {
  name: "Cart",
  components: {
    ItemsList,
    TotalPrice,
  },
};
</script>
