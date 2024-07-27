import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart-slice"; // Adjust the path as necessary

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
