import { defineStore } from "pinia";

export const useCartStore = defineStore("CartStore", {
  // state
  state: () => {
    return {
      items: [],
    };
  },
  // getters
  getters: {
    count() {
      return this.items.length;
    },
    // With arrow function
    // count: (state)=> state.items.length

    isEmpty() {
      return this.count === 0;
    },
    totalPrice() {
      return this.items.reduce(
        (accumulator, item) => accumulator + item.price,
        0
      );
    },
  },

  // actions
  actions: {
    addItems(count, item) {
      count = parseInt(count);
      for (let index = 0; index < count; index++) {
        this.items.push({ ...item });
      }
    },
  },
});
