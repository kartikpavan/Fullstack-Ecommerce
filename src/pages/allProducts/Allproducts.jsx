import React, { useEffect, useState } from "react";
import { Breadcrumbs, ProductFilter, ProductList } from "../../components";
import Loader from "../../components/loader/Loader";

// custom Hook
import useFetchCollection from "../../hooks/useFetchCollection";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { storeProducts, getPriceRange } from "../../redux/slice/productSlice";

const Allproducts = () => {
	const { data, isLoading } = useFetchCollection("products");
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(storeProducts({ products: data }));
		dispatch(getPriceRange({ products: data }));
	}, [dispatch, data]);

	const { products } = useSelector((store) => store.product);

	return (
		<>
			{isLoading && <Loader />}
			<main className="w-full">
				<Breadcrumbs />
				<section className="w-full mx-auto p-4 md:p-10 lg:w-9/12 md:px-6 flex h-full">
					<aside className="hidden sm:block sm:w-64 mx-2 ">
						<ProductFilter />
					</aside>
					<article className="flex-1">
						<ProductList products={products} />
					</article>
				</section>
			</main>
		</>
	);
};

export default Allproducts;
