import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	products: [],
};

const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		storeProducts(state, action) {
			console.log(action.payload);
			state.products = action.payload.products;
		},
	},
});

export const { storeProducts } = productSlice.actions;

export default productSlice.reducer;
