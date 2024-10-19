import { defineStore } from "pinia";

// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useCartStore = defineStore("cart", {
  // a function that returns a fresh state
  state: () => ({
    items: [],
    totalPrice: 0,
  }),
  actions: {
    addItem(item) {
      console.log("Adding item", item);

      this.items.push(item);
      this.totalPrice = this.totalPrice + item.price;
    },
    addDonate() {
      this.totalPrice = this.totalPrice + 10;
    },
  },
});
