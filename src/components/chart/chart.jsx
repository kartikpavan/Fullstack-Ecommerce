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

	// Count the occurances of order status(s)
	const getOrderCount = (arr, value) => {
		return arr.filter((item) => item === value).length;
	};

	const placed = getOrderCount(filteredOrders, "Order Placed");
	const processing = getOrderCount(filteredOrders, "Processing...");
	const shipped = getOrderCount(filteredOrders, "Item(s) Shipped");
	const delivered = getOrderCount(filteredOrders, "Item(s) Delivered");

	const data = {
		labels: ["Order Places", "Processing", "Shipped", "Delivered"],
		datasets: [
			{
				label: "Order Count",
				data: [placed, shipped, processing, delivered],
				backgroundColor: "#191a3ed6",
			},
		],
	};
	return <Bar options={options} data={data} />;
};

export default chart;
