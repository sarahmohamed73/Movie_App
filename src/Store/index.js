import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./Slices/wishlistSlice";

export default configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
});