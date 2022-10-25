export const getUniqueValues = (products, type) => {
	if (type === "category") {
		return ["All", ...new Set(products.map((item) => item.category))];
	}
	if (type === "brand") {
		return ["all", ...new Set(products.map((item) => item.brand))];
	}
};
