import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import productReducer from "./slice/productSlice";
import filterSlice from "./slice/filterSlice";

export const store = configureStore({
	reducer: { auth: authReducer, product: productReducer, filter: filterSlice },
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
