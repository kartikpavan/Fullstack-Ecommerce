import React from "react";
import { formatPrice } from "../../utils/formatPrice";
import { useNavigate } from "react-router-dom";

const OrdersComponent = ({ orders, user, admin }) => {
	const navigate = useNavigate();

	function handleUserClick(orderId) {
		navigate(`/order-details/${orderId}`);
	}
	function handleAdminClick(orderId) {
		navigate(`/admin/order-details/${orderId}`);
	}
	console.log(orders);
	return (
		<main>
			{!orders.length ? (
				<h1 className="text-2xl font-bold"> No Orders found </h1>
			) : (
				<div>
					<p className="text-lg font-light">
						Open order to (
						{admin ? (
							<span className="font-semibold text-primary">Change Order Status</span>
						) : (
							<span className="font-semibold text-primary">Track Order Status</span>
						)}
						)
					</p>

					{orders.map((order, index) => {
						const { id, orderDate, orderAmount, orderStatus } = order;
						return (
							<section
								className="w-full my-2 shadow-md rounded-md cursor-pointer hover:scale-105 duration-300"
								key={index}
								onClick={() => {
									user ? handleUserClick(id) : handleAdminClick(id);
								}}
							>
								<div className="p-4 bg-base-200">
									<div className="flex items-center justify-between gap-6">
										<p className="text-gray-500 text-sm md:text-lg ">
											ORDER PLACED : <br /> <span>{orderDate}</span>
										</p>
										<p className="text-gray-500 text-sm md:text-lg">
											TOTAL :
											<span className="text-primary">
												{formatPrice(orderAmount)}
											</span>
										</p>
									</div>
								</div>
								<div className="p-4 flex items-center justify-between">
									<p className="text-sm md:text-lg">
										ID: <span className="font-semibold "> {id}</span>
									</p>
									<p className="text-sm md:text-lg ">
										Status: <br />{" "}
										<span
											className={`font-semibold ${
												orderStatus !== "Item(s) Delivered"
													? "text-primary"
													: "text-green-600"
											}`}
										>
											{orderStatus}
										</span>
									</p>
								</div>
							</section>
						);
					})}
				</div>
			)}
		</main>
	);
};

export default OrdersComponent;
