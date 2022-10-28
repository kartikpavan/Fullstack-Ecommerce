import React from "react";
import useFetchCollection from "../../hooks/useFetchCollection";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top",
		},
		title: {
			display: true,
			text: "Order Status",
		},
	},
};

const chart = () => {
	const { orderHistory } = useSelector((store) => store.order);
	// Create new Array of  order status
	const filteredOrders = orderHistory.map((item) => item.orderStatus);
	console.log(filteredOrders);
	// Count the occurances of order status(s)
	const getOrderCount = (arr, value) => {
		return arr.filter((item) => item === value).length;
	};
	const [a, b, c, d] = ["Order Placed", "Processing...", "Processing...", "Item(s) Delivered"];

	const placed = getOrderCount(filteredOrders, a);
	const shipped = getOrderCount(filteredOrders, b);
	const processing = getOrderCount(filteredOrders, c);
	const delivered = getOrderCount(filteredOrders, d);

	const data = {
		labels: ["Order Places", "Processing", "Shipped", "Delivered"],
		datasets: [
			{
				label: "Order Count",
				data: [placed, shipped, processing, delivered],
				backgroundColor: "rgba(255, 99, 132, 0.5)",
			},
		],
	};
	return <Bar options={options} data={data} />;
};

export default chart;
