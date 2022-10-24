import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	filteredProducts: [],
};

const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		filterBySearch(state, action) {
			const { products, search } = action.payload;
			const tempProducts = products.filter(
				(item) =>
					item.name.toLowerCase().includes(search.toLowerCase()) ||
					item.category.toLowerCase().includes(search.toLowerCase()) ||
					item.brand.toLowerCase().includes(search.toLowerCase())
			);
			state.filteredProducts = tempProducts;
		},
	},
});

export const { filterBySearch } = filterSlice.actions;

export default filterSlice.reducer;
