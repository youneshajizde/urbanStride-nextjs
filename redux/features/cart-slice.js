import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      state.items.push(item);
    },
    removeFromCart(state, action) {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },

    clearCart(state) {
      state.items = [];
    },
  },
});
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
