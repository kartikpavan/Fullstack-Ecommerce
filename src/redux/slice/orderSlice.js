import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	orderHistory: [],
	totalAmount: null,
};

const orderSlice = createSlice({
	name: "orders",
	initialState,
	reducers: {
		storeOrders: (state, action) => {
			state.orderHistory = action.payload;
		},
		totalOrderAmount: (state, action) => {
			const newArray = [];
			state.orderHistory.map((item) => {
				const { orderAmount } = item;
				newArray.push(orderAmount);
			});
			const total = newArray.reduce((total, curr) => total + curr, 0);
			state.totalAmount = total;
		},
	},
});

export const { storeOrders, totalOrderAmount } = orderSlice.actions;

export default orderSlice.reducer;
