<template>
  <div>
    <h1>Cart</h1>
    <ItemsList :items="cart.items" />
    <TotalPrice :total-price="cart.totalPrice" />
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
  props: {
    cart: {
      type: Object, // Change to Object if `cart` has a structure with `items` as a property
      required: true,
    },
  },
};
</script>
