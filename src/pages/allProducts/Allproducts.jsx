import React from "react";
import { Breadcrumbs } from "../../components";

const Allproducts = () => {
	return (
		<main className="w-full">
			<Breadcrumbs />
			<section className="w-full mx-auto p-4 md:p-10 md:w-9/12 md:px-6 ">
				<h1 className="text-3xl">All products</h1>
			</section>
		</main>
	);
};

export default Allproducts;
