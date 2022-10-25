import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import productReducer from "./slice/productSlice";
import filterReducer from "./slice/filterSlice";
import cartReducer from "./slice/cartSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		product: productReducer,
		filter: filterReducer,
		cart: cartReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
