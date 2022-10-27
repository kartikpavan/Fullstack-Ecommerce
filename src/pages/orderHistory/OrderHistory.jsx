import React, { useEffect } from "react";
import { Header } from "../../components";

import useFetchCollection from "../../hooks/useFetchCollection";
import Loader from "../../components/loader/Loader";
import { useNavigate } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { storeOrders } from "../../redux/slice/orderSlice";

const OrderHistory = () => {
	const { data, isLoading } = useFetchCollection("orders");
	const { orderHistory } = useSelector((store) => store.order);
	const { userId } = useSelector((store) => store.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(storeOrders(data));
	}, [dispatch, data]);

	function handleClick(orderId) {
		navigate(`/order-details/${orderId}`);
	}

	const filteredOrders = orderHistory.filter((order) => order.userId === userId);

	return (
		<>
			{isLoading && <Loader />}
			<Header text="My Orders" />
			<main className="w-full mx-auto px-2 md:w-9/12 md:px-6 mt-6 ">
				{!filteredOrders.length ? (
					<h1 className="text-2xl font-bold"> No Orders found </h1>
				) : (
					<div>
						<p className="text-lg font-light">
							Click an order to leave a{" "}
							<span className="font-semibold text-primary">Product Review</span>
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
									{filteredOrders.map((order, index) => {
										const {
											id,
											orderTime,
											orderDate,
											orderAmount,
											orderStatus,
										} = order;
										return (
											<tr
												key={index}
												className="hover cursor-pointer"
												onClick={() => handleClick(id)}
											>
												<td>{index + 1}</td>
												<td className="font-light">
													{orderDate} at {orderTime}
												</td>
												<td className="font-light">{id}</td>
												<td className="font-light">{orderAmount}</td>
												<td className="font-bold">
													<p
														className={`${
															orderStatus !== "Delivered"
																? "text-primary"
																: "text-success"
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
		</>
	);
};

export default OrderHistory;
