import React from "react";
import { useSelector } from "react-redux";
import { formatPrice } from "../../utils/formatPrice";

const CheckoutSummary = () => {
   const { cartItems, totalQuantity, totalAmount } = useSelector(
      (store) => store.cart
   );
   return (
      <>
         <h1 className="text-3xl font-light">Checkout Summary</h1>
         <div className="mt-2">
            <p className="text-sm font-light text-gray-500">
               Cart Item(s): {totalQuantity}{" "}
            </p>
            <div className="flex items-center justify-between">
               <h1 className="text-xl font-light">Subtotal: </h1>
               <p className="text-primary text-xl font-semibold">
                  {formatPrice(totalAmount)}
               </p>
            </div>
            {cartItems.map((item) => {
               const { id, name, price, qty } = item;
               return (
                  <section
                     className="border-2 border-secondary-content rounded-md my-2 p-2"
                     key={id}
                  >
                     <h1 className="text-lg md:text-2xl text-primary">
                        {name}
                     </h1>
                     <p>Quantity: {qty}</p>
                     <p>Unit Price : {formatPrice(price)}</p>
                     <p>Total Price: {formatPrice(price * qty)}</p>
                  </section>
               );
            })}
         </div>
      </>
   );
};

export default CheckoutSummary;
