import React from "react";
import { formatPrice } from "../../utils/formatPrice";
const SingleProduct = ({ product }) => {
	const { imageURL, name, price } = product;

	return (
		<>
			<div className="card w-72 shadow-md relative hover:scale-105 duration-300">
				<img src={imageURL} alt={name} className="block h-60 object-contain rounded-md" />
				<div className=" absolute top-0 right-0">
					<span className="badge ">Free Delivery</span>
				</div>
				<div className="my-4 items-center text-center">
					<h1 className="font-semibold py-2">{name}</h1>
					<p className="py-2 text-lg">{formatPrice(price)}</p>
				</div>
			</div>
		</>
	);
};

export default SingleProduct;
