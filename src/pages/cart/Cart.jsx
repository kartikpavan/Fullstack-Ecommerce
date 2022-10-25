import { Link } from "react-router-dom";
import { Breadcrumbs } from "../../components";
import { formatPrice } from "../../utils/formatPrice";
import { BiTrash } from "react-icons/bi";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseCart } from "../../redux/slice/cartSlice";
// lazy load
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Cart = () => {
	const { cartItems, totalAmount, totalQuantity } = useSelector((store) => store.cart);
	const dispatch = useDispatch();
	//! increase cart item Qty
	const increaseQty = (item) => {
		dispatch(addToCart(item));
	};
	//! Decrease Cart Item Qty
	const decreaseQty = (item) => {
		dispatch(decreaseCart(item));
	};

	return (
		<main className="w-full">
			<Breadcrumbs type="Cart" />
			<section className="w-full mx-auto p-4 md:p-10 md:w-9/12 md:px-6 flex flex-col h-full">
				<h1 className="text-3xl font-semibold mb-4">Shopping Cart</h1>
				<button className="btn btn-sm btn-error max-w-[200px] w-full mb-2 ">
					Clear Cart{" "}
				</button>
				{!cartItems.length ? (
					<h1> Your Cart Is Empty </h1>
				) : (
					<article className="flex flex-col xl:flex-row justify-between gap-4">
						<div className="overflow-x-auto w-full flex-1">
							<table className="table table-zebra w-full ">
								{/* Head */}
								<thead>
									<tr>
										<th className="text-sm md:text-lg">Item</th>
										<th className="text-sm md:text-lg">Total</th>
										<th className="text-sm md:text-lg">Actions</th>
									</tr>
								</thead>
								{/* Body */}
								<tbody>
									{cartItems.map((item, index) => {
										const { imageURL, name, price, qty } = item;
										return (
											<tr key={index}>
												<td className="flex gap-x-2 ">
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

													<div>
														<h1 className=" md:text-lg">{name}</h1>
														<p className="font-light md:text-lg">
															{formatPrice(price)}
														</p>
														<p>Qty: </p>
														<div className="btn-group items-center mb-2">
															<button
																className="btn btn-xs btn-outline"
																onClick={() => decreaseQty(item)}
															>
																-
															</button>
															<button className="btn btn-xs btn-ghost disabled">
																{qty}
															</button>
															<button
																className="btn btn-xs btn-outline"
																onClick={() => increaseQty(item)}
															>
																+
															</button>
														</div>
													</div>
												</td>

												<td className=" md:text-lg">
													{formatPrice(price * qty)}
												</td>
												<td>
													<BiTrash size={24} color="red" />
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
								<p className="text-primary text-2xl">{formatPrice(totalAmount)}</p>
							</div>
							<p className="text-gray-400">Tax and Shipping calculated at checkout</p>
							<button className="btn btn-primary w-full ">Checkout</button>
						</div>
					</article>
				)}
			</section>
		</main>
	);
};

export default Cart;
