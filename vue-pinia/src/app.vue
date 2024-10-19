<template>
  <div>
    <h1>ContextAPI Example</h1>
    <ProductButton label="Product 1" :price="10" @click="handleProductClick" />
    <ProductButton label="Product 2" :price="20" @click="handleProductClick" />
    <DonateButton @click="handleDonateClick" />
    <Cart />
  </div>
</template>

<script>
import Cart from "@/component/cart.vue";
import DonateButton from "@/component/donation-button.vue";
import ProductButton from "@/component/product-button.vue";
import { useCartStore } from "./store";

export default {
  components: {
    Cart,
    DonateButton,
    ProductButton,
  },
  setup() {
    const cartStore = useCartStore();

    const handleProductClick = (label, price) => {
      cartStore.addItem({ label, price });
    };

    const handleDonateClick = () => {
      cartStore.addDonate();
    };

    return {
      handleProductClick,
      handleDonateClick,
      totalPrice: cartStore.totalPrice,
      cartStore,
    };
  },
};
</script>
