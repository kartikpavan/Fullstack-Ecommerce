import React from "react";
import { Breadcrumbs, ProductFilter, ProductList } from "../../components";

const Allproducts = () => {
	return (
		<main className="w-full">
			<Breadcrumbs />
			<section className="w-full mx-auto p-4 md:p-10 md:w-9/12 md:px-6 flex h-full">
				<aside className="w-24 md:w-64">
					<ProductFilter />
				</aside>
				<article className="flex-1">
					<ProductList />
				</article>
			</section>
		</main>
	);
};

export default Allproducts;
