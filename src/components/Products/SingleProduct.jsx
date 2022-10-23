import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";

const SingleProduct = ({ product }) => {
	const { id, imageURL, name, price } = product;
	return (
		<div className="group">
			<div className="card w-72 shadow-md relative hover:scale-105 duration-300">
				<img src={imageURL} alt={name} className="h-60 object-contain rounded-md" />
				<div className=" absolute top-0 right-0">
					<span className="badge ">Free Delivery</span>
				</div>
				<div className="my-4 items-center text-center">
					<h1 className="font-semibold py-2">{name}</h1>
					<p className="py-2 text-lg">{formatPrice(price)}</p>
				</div>
				<div className="absolute top-0 right-0 h-full w-full group-hover:bg-[rgba(0,0,0,0.5)] duration-300"></div>
				<Link to={`/product-details/${id}`}>
					<button className="absolute top-1/3 left-1/4 btn btn-primary hidden group-hover:block transition-all ease-in duration-300">
						View Details
					</button>
				</Link>
			</div>
		</div>
	);
};

export default SingleProduct;
