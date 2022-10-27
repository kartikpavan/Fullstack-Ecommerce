import React, { useEffect, useState } from "react";
import { Hero } from "../../components";
import Loader from "../../components/loader/Loader";
// custom Hook
import useFetchCollection from "../../hooks/useFetchCollection";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { storeProducts, getPriceRange } from "../../redux/slice/productSlice";

const Home = () => {
	const { data, isLoading } = useFetchCollection("products");
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(storeProducts({ products: data }));
		dispatch(getPriceRange({ products: data }));
	}, [dispatch, data]);

	return (
		<div>
			<Hero />
		</div>
	);
};

export default Home;
