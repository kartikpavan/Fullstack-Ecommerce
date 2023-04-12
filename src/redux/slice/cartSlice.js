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
            toast.info(`${action.payload.name} quantity increased `);
         } else {
            // item does not exist in the cart
            const tempProduct = { ...action.payload, qty: 1 };
            state.cartItems.push(tempProduct);
            toast.info(`${action.payload.name} Added to cart`);
         }
         // Add item to local Storaeg
         localStorage.setItem("cart", JSON.stringify(state.cartItems));
      },
      decreaseCart: (state, action) => {
         const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
         // item has more than 1 qty present
         if (state.cartItems[itemIndex].qty > 1) {
            state.cartItems[itemIndex].qty -= 1;
            toast.error(`${action.payload.name} quantity Decreased `);
            // item has only 1 qty
         } else if (state.cartItems[itemIndex].qty === 1) {
            const newCartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
            state.cartItems = newCartItems;
            toast.error(`${action.payload.name} removed from Cart`);
         }
         // new Cart item array after removing items
         // Add item to local Storaeg
         localStorage.setItem("cart", JSON.stringify(state.cartItems));
      },
      removeCartItem: (state, action) => {
         const newCartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
         state.cartItems = newCartItems;
         localStorage.setItem("cart", JSON.stringify(state.cartItems));
         toast.error(`${action.payload.name} removed from Cart`);
      },
      clearCart: (state) => {
         state.cartItems = [];
         localStorage.setItem("cart", JSON.stringify(state.cartItems));
         toast.info(`All Items removed from Cart`);
      },
      calculateSubtotal: (state) => {
         const newArr = [];
         state.cartItems.map((item) => {
            const { price, qty } = item;
            const amount = price * qty;
            newArr.push(amount);
         });
         const totalAmount = newArr.reduce((total, curr) => total + curr, 0);
         state.totalAmount = totalAmount;
      },
      calculateTotalQuantity: (state) => {
         let newArr = [];
         state.cartItems.map((item) => {
            newArr.push(item.qty);
         });
         const totalQty = newArr.reduce((total, curr) => total + curr, 0);
         state.totalQuantity = totalQty;
      },
   },
});

export const {
   addToCart,
   decreaseCart,
   removeCartItem,
   clearCart,
   calculateSubtotal,
   calculateTotalQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
