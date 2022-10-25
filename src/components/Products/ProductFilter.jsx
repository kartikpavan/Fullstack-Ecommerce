import { useState } from "react";
//  Utilities
import { getUniqueValues } from "../../utils/uniqueValues";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { filterByCategory } from "../../redux/slice/filterSlice";

const ProductFilter = () => {
	const { products } = useSelector((store) => store.product);
	const [category, setCategory] = useState("All");
	const dispatch = useDispatch();
	// Getting new Categories Array
	const allCategories = getUniqueValues(products, "category");
	let allBrands;

	const filterProducts = (c) => {
		setCategory(c);
		dispatch(filterByCategory({ products, category: c }));
	};

	return (
		<div className="flex flex-col gap-y-5">
			{/* Categories */}
			<div>
				<h1 className="font-bold">CATEGORIES</h1>
				<div className="flex flex-col gap-y-2 items-start">
					{allCategories.map((c, index) => {
						return (
							<button
								key={index}
								type="button"
								className={`w-full text-left ${
									category === c
										? "border-l-4 border-blue-500 px-2 font-semibold"
										: null
								}`}
								onClick={() => filterProducts(c)}
							>
								{c}
							</button>
						);
					})}
				</div>
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
