import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "../../components";
import { formatPrice } from "../../utils/formatPrice";
import { BiTrash } from "react-icons/bi";
import emptyCart from "../../assets/empty-cart.png";
// Redux
import { useDispatch, useSelector } from "react-redux";
import {
	addToCart,
	decreaseCart,
	removeCartItem,
	clearCart,
	calculateSubtotal,
	calculateTotalQuantity,
} from "../../redux/slice/cartSlice";
// lazy load
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Cart = () => {
	const { cartItems, totalAmount, totalQuantity } = useSelector((store) => store.cart);
	const { isUserLoggedIn } = useSelector((store) => store.auth);
	const dispatch = useDispatch();
	//! increase cart item Qty
	const increaseQty = (item) => {
		dispatch(addToCart(item));
	};
	//! Decrease Cart Item Qty
	const decreaseQty = (item) => {
		dispatch(decreaseCart(item));
	};
	//! Remove Single Item
	const removeItem = (item) => {
		dispatch(removeCartItem(item));
	};

	useEffect(() => {
		dispatch(calculateSubtotal());
		dispatch(calculateTotalQuantity());
	}, [dispatch, cartItems]);

	return (
		<main className="w-full">
			<Breadcrumbs type="Cart" />
			<section className="w-full mx-auto p-4 md:p-10 lg:w-9/12 md:px-6 flex flex-col h-full">
				{!cartItems.length ? (
					<div className="w-full mx-auto h-max flex flex-col items-center justify-center ">
						<img src={emptyCart} alt="empty-Cart" />
						<h1 className="mt-4 text-xl">
							Looks like you have not added anything to your cart{" "}
						</h1>
						<br />
						<Link to="/all" className="link link-primary">
							Click here to Explore more
						</Link>
					</div>
				) : (
					<div>
						<h1 className="text-3xl font-semibold mb-4">Shopping Cart</h1>
						<article className="flex flex-col xl:flex-row justify-between gap-y-10 gap-x-5">
							<div className="overflow-x-auto w-full flex-1">
								<table className="table table-zebra w-full ">
									{/* Head */}
									<thead>
										<tr>
											<th className="text-sm md:text-lg">Item</th>
											<th className="text-sm md:text-lg">Actions</th>
										</tr>
									</thead>
									{/* Body */}
									<tbody>
										{cartItems.map((item, index) => {
											const { imageURL, name, price, qty, id } = item;
											return (
												<tr key={index}>
													<td className="flex gap-x-2 ">
														<Link
															to={`/product-details/${id}`}
															className="flex items-center"
														>
															<LazyLoadImage
																src={
																	imageURL ||
																	`https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png`
																}
																alt={name}
																className="w-24 object-fill"
																placeholderSrc="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
																effect="blur"
															/>
														</Link>

														<div>
															<Link to={`/product-details/${id}`}>
																<h1 className=" md:text-lg">
																	{name}
																</h1>
															</Link>

															<p className="font-light md:text-lg">
																{formatPrice(price)}
															</p>
															<p>Qty: </p>
															<div className="btn-group items-center mb-2">
																<button
																	className="btn btn-xs btn-outline"
																	onClick={() =>
																		decreaseQty(item)
																	}
																>
																	-
																</button>
																<button className="btn btn-xs btn-ghost disabled">
																	{qty}
																</button>
																<button
																	className="btn btn-xs btn-outline"
																	onClick={() =>
																		increaseQty(item)
																	}
																>
																	+
																</button>
															</div>
															<p className="font-light">
																Total:
																<span className=" text-lg text-primary">
																	{formatPrice(price * qty)}
																</span>
															</p>
														</div>
													</td>

													<td>
														<BiTrash
															size={24}
															color="red"
															onClick={() => removeItem(item)}
														/>
													</td>
												</tr>
											);
										})}
									</tbody>
								</table>
							</div>

							<div className="w-88 md:w-96 h-56 shadow-lg rounded-sm p-2 flex flex-col gap-3 ">
								<Link to="/all" className="link italic text-gray-400">
									&larr; Continue Shopping
								</Link>
								<p>
									Cart items : <span className="font-light">{totalQuantity}</span>{" "}
								</p>
								<div className="flex items-center justify-between">
									<h2 className="text-xl font-semibold">Subtotal</h2>
									<p className="text-primary text-2xl">
										{formatPrice(totalAmount)}
									</p>
								</div>
								<p className="text-gray-400">
									Tax and Shipping calculated at checkout
								</p>
								{isUserLoggedIn ? (
									<Link to="/checkout-details" className="btn btn-primary w-full">
										Checkout
									</Link>
								) : (
									<label
										htmlFor="my-modal-4"
										className="modal-button btn btn-primary w-full"
									>
										Login To Checkout
									</label>
								)}
							</div>
						</article>
					</div>
				)}
			</section>
		</main>
	);
};

export default Cart;
