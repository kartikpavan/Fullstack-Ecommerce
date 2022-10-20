import { useEffect, useState } from "react";
import Loader from "../loader/Loader";
import { toast } from "react-toastify";
// Firebase
import { doc, getDoc, collection, query, where, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/config";

const ViewProducts = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	async function fetchProducts() {
		setIsLoading(true);
		try {
			const productRef = collection(db, "products");
			const q = query(productRef, orderBy("createdAt", "desc"));
			onSnapshot(q, (querySnapshot) => {
				// console.log(querySnapshot.docs);
				const allProducts = [];
				querySnapshot.forEach((doc) => {
					allProducts.push({ id: doc.id, ...doc.data() });
				});
				console.log(allProducts);
			});
		} catch (error) {
			toast.error(error.code, error.message);
			setIsLoading(false);
		}
	}

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<>
			<h1 className="text-3xl font-semibold pb-3">All Products</h1>
			<main className="max-w-[70vw] md:max-w-[60vw] h-full rounded-md shadow-lg p-2"></main>
		</>
	);
};

export default ViewProducts;
