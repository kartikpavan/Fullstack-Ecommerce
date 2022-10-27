import React, { useEffect } from "react";
import { Hero } from "../../components";
// custom Hook
import useFetchCollection from "../../hooks/useFetchCollection";
// Redux
import { useDispatch } from "react-redux";
import { storeProducts, getPriceRange } from "../../redux/slice/productSlice";

const Home = () => {
	const { data } = useFetchCollection("products");
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
