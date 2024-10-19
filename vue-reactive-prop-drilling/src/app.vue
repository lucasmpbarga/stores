<template>
  <div>
    <h1>ContextAPI Example</h1>
    <ProductButton label="Product 1" :price="10" @click="handleProductClick" />
    <ProductButton label="Product 2" :price="20" @click="handleProductClick" />
    <DonateButton @click="handleDonateClick" />
    <Cart :cart="cart" />
  </div>
</template>

<script>
import Cart from "@/component/cart.vue";
import DonateButton from "@/component/donation-button.vue";
import ProductButton from "@/component/product-button.vue";
import { reactive } from "vue";

export default {
  components: {
    Cart,
    DonateButton,
    ProductButton,
  },
  setup() {
    const state = reactive({
      cart: {
        items: [],
        totalPrice: 0,
      },
    });

    const handleProductClick = (label, price) => {
      console.log("Product clicked", label, price);
      state.cart.items.push({ label, price });
      state.cart.totalPrice += price;
    };

    const handleDonateClick = () => {
      console.log("Donate clicked");
      state.cart.totalPrice += 10;
    };

    return {
      handleProductClick,
      handleDonateClick,
      cart: state.cart,
    };
  },
};
</script>
