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
						Open order to
						<span className="font-semibold text-primary">Change Order Status</span>
					</p>
					<div className="overflow-x-auto">
						<table className="table  w-full">
							{/* thead */}
							<thead>
								<tr>
									<th></th>
									<th className="text-sm md:text-lg">Date</th>
									<th className="text-sm md:text-lg">Order id</th>
									<th className="text-sm md:text-lg">Total Amount</th>
									<th className="text-sm md:text-lg">Order Status</th>
								</tr>
							</thead>
							{/* tbody */}
							<tbody>
								{orders.map((order, index) => {
									const { id, orderTime, orderDate, orderAmount, orderStatus } =
										order;
									return (
										<tr
											key={index}
											className="hover cursor-pointer"
											onClick={() => {
												user ? handleUserClick(id) : handleAdminClick(id);
											}}
										>
											<td>{index + 1}</td>
											<td className="font-light">
												{orderDate} at {orderTime}
											</td>
											<td className="font-light">{id}</td>
											<td className="font-light">
												{formatPrice(orderAmount)}
											</td>
											<td className="font-bold">
												<p
													className={`${
														orderStatus !== "Item(s) Delivered"
															? "text-primary"
															: "text-green-600"
													}`}
												>
													{orderStatus}
												</p>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			)}
		</main>
	);
};

export default OrdersComponent;
