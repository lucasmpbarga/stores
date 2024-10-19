<template>
  <div>
    <p>Items in cart: {{ items.length }}</p>
    <p>Items list renders: {{ itemsListRenders }}</p>
  </div>
</template>

<script>
import { ref } from "vue";
// import { useStore } from "vuex";

export default {
  name: "ItemsList",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const itemsListRenders = ref(0);
    itemsListRenders.value += 1;

    return {
      itemsListRenders,
    };
  },
};
</script>
