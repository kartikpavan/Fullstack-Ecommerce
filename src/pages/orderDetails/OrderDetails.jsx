import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import { formatPrice } from "../../utils/formatPrice";
import Review from "../reviewProduct/Review";

//firebase
import useFetchDocument from "../../hooks/useFetchDocument";
// lazy load
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const OrderDetails = () => {
	const [order, setOrder] = useState(null);
	const { id } = useParams();
	const { document } = useFetchDocument("orders", id);

	useEffect(() => {
		setOrder(document);
	}, [document]);

	return (
		<>
			{order === null ? (
				<Loader />
			) : (
				<div>
					<section className="h-44 w-full bg-primary-content flex items-center">
						<div className="w-full mx-auto px-2 md:w-9/12 md:px-6 ">
							<h1 className="text-xl md:text-3xl font-bold text-secondary-content">
								Order Details
							</h1>
							<p className="font-semibold text-lg">
								Order ID :
								<span className="font-light text-gray-500"> {order.id}</span>
							</p>
							<p className="font-semibold text-lg">
								Order Amount :
								<span className="font-light text-gray-500">
									{formatPrice(order.orderAmount)}
								</span>
							</p>
							<p className="font-semibold text-lg">
								Order Status :
								<span
									className={`font-light ${
										order.orderStatus === "Delivered"
											? "text-success"
											: "text-primary"
									}`}
								>
									{order.orderStatus}
								</span>
							</p>
						</div>
					</section>

					<main className="w-full mx-auto px-2 md:w-9/12 md:px-6 mt-6 ">
						<p className="my-2">
							<Link to="/my-orders" className="link active ">
								&larr; Back to my Orders
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
										<th className="text-sm md:text-lg">Actions</th>
									</tr>
								</thead>
								<tbody>
									{order.cartItems.map((product, index) => {
										const {
											id: productId,
											name,
											price,
											imageURL,
											qty,
										} = product;
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
												<td>
													<Link
														to={`/review-product/${productId}`}
														className="btn btn-accent"
													>
														Add a review
													</Link>
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</main>
				</div>
			)}
		</>
	);
};

export default OrderDetails;
