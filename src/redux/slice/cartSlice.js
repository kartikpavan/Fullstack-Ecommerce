import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
	cartItems: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
	totalQuantity: 0,
	totalAmount: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			// Check if item exists in local Storage Cart
			const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
			// item Already exists in the cart
			if (itemIndex >= 0) {
				state.cartItems[itemIndex].qty += 1;
				toast.success(`${action.payload.name} quantity increased `);
			} else {
				// item does not exist in the cart
				const tempProduct = { ...action.payload, qty: 1 };
				state.cartItems.push(tempProduct);
				toast.success(`${action.payload.name} Added to cart`);
			}
			// Add item to local Storaeg
			localStorage.setItem("cart", JSON.stringify(state.cartItems));
		},
	},
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
