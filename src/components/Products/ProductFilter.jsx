import React from "react";

const ProductFilter = () => {
	return (
		<div className="flex flex-col gap-y-5">
			{/* Categories */}
			<div>
				<h1 className="font-bold">CATEGORIES</h1>
				<button>All</button>
			</div>
			{/* Brand */}
			<div>
				<h1 className="font-bold">BRAND</h1>
				<select className="select select-bordered w-full" name="brand">
					<option value="all">All</option>
				</select>
			</div>
			{/* Price */}
			<div>
				<h1 className="font-bold">PRICE</h1>
				<input
					className="range"
					type="range"
					name="price"
					min={100}
					max={130000}
					step={500}
				/>
			</div>
			<div>
				<button className="btn btn-error">Clear Filters</button>
			</div>
		</div>
	);
};

export default ProductFilter;
