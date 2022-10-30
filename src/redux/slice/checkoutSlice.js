import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	shippingAddress: {},
	billingAddress: {},
};

const checkoutSlice = createSlice({
	name: "checkout",
	initialState,
	reducers: {
		saveShippingAddress: (state, action) => {
			state.shippingAddress = action.payload;
		},
		saveBillingAddress: (state, action) => {
			state.billingAddress = action.payload;
		},
	},
});

export const { saveShippingAddress, saveBillingAddress } = checkoutSlice.actions;

export default checkoutSlice.reducer;
