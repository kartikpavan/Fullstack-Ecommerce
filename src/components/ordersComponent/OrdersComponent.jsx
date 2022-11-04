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
						const { id, orderDate, orderAmount, orderStatus, email } = order;
						return (
							<section
								className="w-full my-6 shadow-md rounded-md cursor-pointer hover:bg-base-200 duration-200"
								key={index}
								onClick={() => {
									user ? handleUserClick(id) : handleAdminClick(id);
								}}
							>
								<div className="p-4 bg-base-200">
									<div className="flex items-center justify-between gap-6">
										<div className="flex flex-col md:flex-row gap-x-10">
											<p className="text-gray-500 text-sm md:text-lg ">
												ORDER PLACED : <br />{" "}
												<span className="text-primary">{orderDate}</span>
											</p>
											<p className="text-gray-500 text-sm md:text-lg ">
												SHIP TO : <br />{" "}
												<span className="text-primary">
													{email.split("@")[0]}
												</span>
											</p>
										</div>

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
													? "text-neutral"
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
