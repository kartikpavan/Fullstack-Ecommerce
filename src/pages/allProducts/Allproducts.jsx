import React, { useEffect } from "react";
import { Breadcrumbs, ProductFilter, ProductList } from "../../components";
// custom Hook
import useFetchCollection from "../../hooks/useFetchCollection";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { storeProducts } from "../../redux/slice/productSlice";

const Allproducts = () => {
	const { data, isLoading } = useFetchCollection("products");
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(storeProducts({ products: data }));
	}, [dispatch, data]);

	const { products } = useSelector((store) => store.product);

	return (
		<main className="w-full">
			<Breadcrumbs />
			<section className="w-full mx-auto p-4 md:p-10 md:w-9/12 md:px-6 flex h-full">
				<aside className="w-24 md:w-64">
					<ProductFilter />
				</aside>
				<article className="flex-1">
					<ProductList products={products} />
				</article>
			</section>
		</main>
	);
};

export default Allproducts;
