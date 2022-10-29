import { Link } from "react-router-dom";
// lazy load
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { formatPrice } from "../../utils/formatPrice";

const OrderTable = ({ user, order }) => {
	return (
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
	);
};

export default OrderTable;
