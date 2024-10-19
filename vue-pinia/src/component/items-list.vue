<template>
  <div>
    <p>Items in cart: {{ items.length }}</p>
    <p>Items list renders: {{ itemsListRenders }}</p>
  </div>
</template>

<script>
import { useCartStore } from "@/store";
import { ref } from "vue";

export default {
  name: "ItemsList",
  setup() {
    const itemsListRenders = ref(0);
    itemsListRenders.value += 1;

    const cartStore = useCartStore();

    return {
      itemsListRenders,
      items: cartStore.items,
    };
  },
};
</script>
