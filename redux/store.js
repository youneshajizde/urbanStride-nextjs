import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart-slice"; // Adjust the path as necessary
import shopReducer from "./features/shop-slice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    shop: shopReducer,
  },
});

export default store;
