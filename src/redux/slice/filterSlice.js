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
		sortProducts(state, action) {
			const { products, sort } = action.payload;
			let tempProducts = [];
			let newProductsArray = [...products]; //! do not mutate the products array
			if (sort === "latest") {
				tempProducts = products;
			}
			if (sort === "lowest-price") {
				tempProducts = newProductsArray.sort((a, b) => a.price - b.price);
			}
			if (sort === "highest-price") {
				tempProducts = newProductsArray.sort((a, b) => b.price - a.price);
			}
			if (sort === "a2z") {
				tempProducts = newProductsArray.sort((a, b) => a.name.localeCompare(b.name));
			}
			if (sort === "z2a") {
				tempProducts = newProductsArray.sort((a, b) => b.name.localeCompare(a.name));
			}

			state.filteredProducts = tempProducts;
		},
	},
});

export const { filterBySearch, sortProducts } = filterSlice.actions;

export default filterSlice.reducer;
