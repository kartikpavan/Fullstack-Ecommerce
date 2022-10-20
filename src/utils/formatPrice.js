export function formatPrice(price) {
	const formatter = Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "INR",
	}).format(price);
	return formatter;
}
