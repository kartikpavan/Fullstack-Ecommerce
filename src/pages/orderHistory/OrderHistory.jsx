import React, { useEffect } from "react";
import { Header, OrdersComponent } from "../../components";

import useFetchCollection from "../../hooks/useFetchCollection";
import Loader from "../../components/loader/Loader";
import { useNavigate } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { storeOrders } from "../../redux/slice/orderSlice";
import { formatPrice } from "../../utils/formatPrice";

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
			<main className="w-full mx-auto px-2 lg:w-9/12 md:px-6 mt-6 ">
				<OrdersComponent orders={filteredOrders} user={true} admin={false} />
			</main>
		</>
	);
};

export default OrderHistory;
