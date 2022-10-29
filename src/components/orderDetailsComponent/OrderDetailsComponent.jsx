import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";
// lazy load
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ChangeOrderStatus from "../changeOrderStatus/ChangeOrderStatus";
import Steps from "../steps/Steps";

const OrderDetailsComponent = ({ order, admin, user, orderId }) => {
	return (
		<>
			<section className="p-4 w-full bg-primary-content flex items-center">
				<article className="w-full flex flex-col lg:flex-row items-center justify-between gap-y-5">
					{/* Order Details */}
					<div className="w-full mx-auto md:px-6 ">
						<section className="flex items-center justify-between ">
							<div>
								<h1 className="text-xl md:text-3xl font-bold text-secondary-content">
									Order Details
								</h1>
								<p className="font-semibold text-lg my-2">
									Order ID :
									<span className="font-light text-gray-500"> {order.id}</span>
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
							</div>
							{/* Steps for order traacking only for user */}
							{user && <Steps order={order} />}
						</section>

						{admin && (
							<div>
								{/* Recipient Name */}
								<p className="font-semibold text-lg">
									Recipient Name :
									<span className="font-light">{order.shippingAddress.name}</span>
								</p>
								{/* Phone Number */}
								<p className="font-semibold text-lg">
									Phone :
									<span className="font-light">
										{order.shippingAddress.phone}
									</span>
								</p>
								{/* Address */}
								<p className="font-semibold text-lg">
									Shipping Address :
									<span className="font-light">
										{order.shippingAddress.line1}, {order.shippingAddress.line2}{" "}
										,{order.shippingAddress.city},
										{order.shippingAddress.country}
									</span>
								</p>
							</div>
						)}
					</div>
					{/* Update order Status */}
					{admin && <ChangeOrderStatus order={order} orderId={orderId} />}
				</article>
			</section>
			<main>
				<p className="my-2">
					<Link to="/admin/orders" className="link active ">
						&larr; Back to All Orders
					</Link>
				</p>
				<div className="overflow-x-auto">
					<table className="table w-full">
						<thead>
							<tr>
								<th></th>
								<th className="text-sm md:text-lg">Product</th>
								<th className="text-sm md:text-lg">Price</th>
								<th className="text-sm md:text-lg">Qty</th>
								<th className="text-sm md:text-lg">Total</th>
								{user && <th className="text-sm md:text-lg">Actions</th>}
							</tr>
						</thead>
						<tbody>
							{order.cartItems.map((product, index) => {
								const { id: productId, name, price, imageURL, qty } = product;
								return (
									<tr key={index}>
										<td>{index + 1}</td>
										<td>
											<Link to={`/product-details/${productId}`}>
												<LazyLoadImage
													src={
														imageURL ||
														`https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png`
													}
													alt={name}
													className="w-10 sm:w-24 object-fill"
													placeholderSrc="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
													effect="blur"
												/>
												<h1>{name}</h1>
											</Link>
										</td>
										<td>{formatPrice(price)}</td>
										<td>{qty}</td>
										<td>{formatPrice(price * qty)}</td>
										{user && (
											<td>
												<Link
													to={`/review-product/${productId}`}
													className="btn btn-accent"
												>
													Add a review
												</Link>
											</td>
										)}
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</main>
		</>
	);
};

export default OrderDetailsComponent;
