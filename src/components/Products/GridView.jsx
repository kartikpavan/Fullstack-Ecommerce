import React from "react";
import SingleProduct from "./SingleProduct";

const GridView = ({ products }) => {
	if (!products.length) {
		return <h1 className="text-3xl font-bold">No Products Found</h1>;
	}

	return (
		<div className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-5 ">
			{products.map((product) => {
				return (
					<div key={product.id} className="mx-auto">
						<SingleProduct product={product} />
					</div>
				);
			})}
		</div>
	);
};

export default GridView;
