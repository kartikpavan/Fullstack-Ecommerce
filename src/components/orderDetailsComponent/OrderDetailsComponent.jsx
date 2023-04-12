import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";

import ChangeOrderStatus from "../changeOrderStatus/ChangeOrderStatus";
// import Steps from "../steps/Steps";
import { OrderTable, Steps } from "../../components";

const OrderDetailsComponent = ({ order, admin, user, orderId }) => {
   return (
      <>
         <section className="p-4 w-full bg-primary-content flex items-center">
            <article className="w-full flex flex-col lg:flex-row items-center justify-between gap-y-5">
               {/* Order Details */}
               <div className="w-full mx-auto md:px-6 ">
                  <section>
                     <h1 className="text-xl md:text-3xl font-bold text-secondary-content">
                        Order Details
                     </h1>
                     <p className="font-semibold text-lg my-2">
                        Order ID :<span className="font-light text-gray-500"> {order.id}</span>
                     </p>
                     <p className="font-semibold text-lg my-2">
                        Order Amount :
                        <span className="font-light text-gray-500">
                           {formatPrice(order.orderAmount)}
                        </span>
                     </p>
                     <p className="font-semibold text-lg my-2">
                        Order Status :
                        <span
                           className={`font-bold ${
                              order.orderStatus === "Item(s) Delivered"
                                 ? "text-green-600"
                                 : "text-primary"
                           }`}
                        >
                           {order.orderStatus}
                        </span>
                     </p>
                  </section>
                  {/* Steps for order traacking only for user */}
                  {user && <Steps order={order} />}
                  {admin && (
                     <div>
                        {/* Recipient Name */}
                        <p className="font-semibold text-lg">
                           Recipient Name :
                           <span className="font-light">{order.shippingAddress.name}</span>
                        </p>
                        {/* Phone Number */}
                        <p className="font-semibold text-lg">
                           Phone :<span className="font-light">{order.shippingAddress.phone}</span>
                        </p>
                        {/* Address */}
                        <p className="font-semibold text-lg">
                           Shipping Address :
                           <span className="font-light">
                              {order.shippingAddress.line1}, {order.shippingAddress.line2},
                              {order.shippingAddress.city},{order.shippingAddress.country}
                           </span>
                        </p>
                     </div>
                  )}
               </div>
               {/* Update order Status */}
               {admin && <ChangeOrderStatus order={order} orderId={orderId} />}
            </article>
         </section>
         <main className="py-5">
            <div className="pb-5">
               {admin ? (
                  <Link to="/admin/orders" className="link active my-2">
                     &larr; Back to All Orders
                  </Link>
               ) : (
                  <Link to="/my-orders" className="link active my-2">
                     &larr; Back to All Orders
                  </Link>
               )}
            </div>

            <OrderTable order={order} user={user} />
         </main>
      </>
   );
};

export default OrderDetailsComponent;
