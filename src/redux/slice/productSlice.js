import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	products: localStorage.getItem("product") ? JSON.parse(localStorage.getItem("product")) : [],
	minPrice: 0,
	maxPrice: 0,
};

const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		storeProducts(state, action) {
			state.products = action.payload.products;
			localStorage.setItem("product", JSON.stringify(action.payload.products));
		},
		getPriceRange(state, action) {
			const { products } = action.payload;
			const priceArray = products.map((item) => item.price);
			const max = Math.max(...priceArray);
			const min = Math.min(...priceArray);
			state.minPrice = min;
			state.maxPrice = max;
		},
	},
});

export const { storeProducts, getPriceRange } = productSlice.actions;

export default productSlice.reducer;
