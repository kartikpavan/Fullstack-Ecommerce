import React from "react";
import { formatPrice } from "../../utils/formatPrice";
import SingleProduct from "./SingleProduct";

const ListView = ({ products }) => {
	if (!products.length) {
		return <h1 className="text-3xl font-bold">No Products Found</h1>;
	}

	return (
		<div className="w-full flex flex-col gap-y-5 py-10">
			{products.map((product) => {
				return (
					<div key={product.id} className="mx-auto ">
						{/* <SingleProduct product={product} /> */}
						<div className="flex flex-col xl:flex-row gap-x-5 relative shadow-md hover:scale-105 duration-300">
							<img
								src={product.imageURL}
								alt={product.name}
								className="block w-60 h-60 object-contain rounded-md"
							/>
							<div className=" absolute top-0 right-0">
								<span className="badge ">Free Delivery</span>
							</div>
							<div className="flex-1">
								<h1 className="font-semibold py-2">{product.name}</h1>
								<p className="py-2 text-xl font-semibold">
									{formatPrice(product.price)}
								</p>
								<p>{product.description.slice(0, 150)}...</p>
								<button className="btn btn-sm btn-primary mt-2">
									View Details
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ListView;
