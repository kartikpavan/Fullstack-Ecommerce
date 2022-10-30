import React, { useEffect } from "react";
import { InfoBox, Chart } from "../../components";
import { BiRupee } from "react-icons/bi";
import { FaCartArrowDown } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { formatPrice } from "../../utils/formatPrice";
//redux
import { useSelector, useDispatch } from "react-redux";
import { totalOrderAmount, storeOrders } from "../../redux/slice/orderSlice";
import useFetchCollection from "../../hooks/useFetchCollection";

const earningIcon = <BiRupee size={22} color="white" />;
const productIcon = <FaCartArrowDown size={22} color="white" />;
const orderIcon = <BsCart size={22} color="white" />;

const AdminHome = () => {
	const { data } = useFetchCollection("orders");
	const { products } = useSelector((store) => store.product);
	const { orderHistory, totalAmount } = useSelector((store) => store.order);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(storeOrders(data));
		dispatch(totalOrderAmount());
	}, [dispatch, data]);

	return (
		<main className="h-full border-r-2 p-1">
			<h1 className="text-xl md:text-3xl font-light mb-4">Admin Home</h1>
			<section className="flex flex-wrap gap-10">
				<InfoBox title={"Earnings"} count={formatPrice(totalAmount)} icon={earningIcon} />
				<InfoBox title={"Products"} count={products.length} icon={orderIcon} />
				<InfoBox title={"Orders"} count={orderHistory.length} icon={productIcon} />
			</section>
			<div>
				<Chart />
			</div>
		</main>
	);
};

export default AdminHome;
