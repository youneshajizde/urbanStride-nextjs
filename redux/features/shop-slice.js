import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {
    name: "",
    price: 0,
    brand: "",
    size: "",
  },
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addToShop(state, action) {
      state.product = action.payload;
    },
    clearShop(state) {
      state.product = initialState.product;
    },
  },
});

export const { addToShop, clearShop } = shopSlice.actions;
export default shopSlice.reducer;
