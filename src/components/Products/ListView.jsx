import React from "react";

const ListView = ({ products }) => {
	if (!products.length) {
		return <h1 className="text-3xl font-bold">No Products Found</h1>;
	}

	return <div>ListView</div>;
};

export default ListView;
