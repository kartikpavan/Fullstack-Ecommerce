import { useEffect, useState } from "react";
//  Utilities
import { getUniqueValues } from "../../utils/uniqueValues";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { filterByCategory, filterByBrand, filterByprice } from "../../redux/slice/filterSlice";
import { formatPrice } from "../../utils/formatPrice";

const ProductFilter = () => {
	const { products } = useSelector((store) => store.product);
	const { minPrice, maxPrice } = useSelector((store) => store.product);
	const dispatch = useDispatch();

	const [category, setCategory] = useState("All");
	const [brand, setBrand] = useState("All");
	const [price, setPrice] = useState(maxPrice);

	// Getting new Category and  brand Array
	const allCategories = getUniqueValues(products, "category");
	const allBrands = getUniqueValues(products, "brand");
	//! Categi
	const filterProducts = (c) => {
		setCategory(c);
		dispatch(filterByCategory({ products, category: c }));
	};
	//! Brand
	useEffect(() => {
		dispatch(filterByBrand({ products, brand }));
	}, [dispatch, products, brand]);

	//!Price
	useEffect(() => {
		dispatch(filterByprice({ products, price }));
	}, [dispatch, products, price]);

	function clearFilter() {
		setCategory("All");
		setBrand("All");
		setPrice(maxPrice);
	}

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
										? "border-l-4 border-primary px-2 font-semibold"
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
				<select
					className="select select-bordered w-full"
					name="brand"
					onChange={(e) => setBrand(e.target.value)}
				>
					{allBrands.map((b, index) => {
						return (
							<option key={index} value={b}>
								{b}
							</option>
						);
					})}
				</select>
			</div>
			{/* Price */}
			<div>
				<h1 className="font-bold">PRICE</h1>
				<p>{formatPrice(price)}</p>
				<input
					className="range range-primary"
					type="range"
					value={price}
					min={minPrice}
					max={maxPrice}
					onChange={(e) => setPrice(e.target.value)}
				/>
			</div>
			<div>
				<button className="btn btn-error" onClick={clearFilter}>
					Clear Filters
				</button>
			</div>
		</div>
	);
};

export default ProductFilter;
