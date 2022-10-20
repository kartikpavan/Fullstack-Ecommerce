import { useEffect, useState } from "react";
import Loader from "../loader/Loader";
import { toast } from "react-toastify";
import { formatPrice } from "../../utils/formatPrice";
import { BiEdit, BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";

// Firebase
import {
	doc,
	getDoc,
	collection,
	query,
	where,
	orderBy,
	onSnapshot,
	deleteDoc,
} from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";
import { db, storage } from "../../firebase/config";

const ViewProducts = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	async function fetchProducts() {
		setIsLoading(true);
		try {
			const productRef = collection(db, "products");
			// const q = query(productRef);
			const q = query(productRef, orderBy("createdAt", "desc"));
			onSnapshot(q, (querySnapshot) => {
				const allProducts = [];
				querySnapshot.forEach((doc) => {
					allProducts.push({ id: doc.id, ...doc.data() });
				});
				setProducts(allProducts);
				setIsLoading(false);
			});
		} catch (error) {
			toast.error(error.code, error.message);
			setIsLoading(false);
		}
	}
	//! Delete single product
	const deleteSingleProduct = async (id, imageURL) => {
		try {
			// deleting a document from product collection
			await deleteDoc(doc(db, "products", id));
			// deleting image from database storage
			const storageRef = ref(storage, imageURL);
			await deleteObject(storageRef);
			toast.info("Product deleted successfully");
		} catch (error) {
			toast.error(error.message);
			console.log(error.message);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<>
			{isLoading && <Loader />}
			<h1 className="text-xl md:text-3xl font-semibold ">All Products</h1>
			<main className="max-w-[70vw] md:max-w-[50vw] max-h-[80vh] p-2 overflow-y-scroll ">
				{products.length && (
					<div>
						<div className="underline">
							<span className="text-lg font-bold ">{products.length} </span> products
							found
						</div>
					</div>
				)}

				{products.length === 0 ? (
					<h1 className="text-4xl font-bold text-red-500">NO PRODUCTS FOUND</h1>
				) : (
					<div className="overflow-x-auto mt-2 w-full">
						<table className="table table-zebra w-full">
							{/* TABLE HEAD */}
							<thead>
								<tr>
									<th className="text-md sm:text-lg "></th>
									<th className="text-md sm:text-lg">Image</th>
									<th className="text-md sm:text-lg">Name</th>
									<th className="text-md sm:text-lg">Category</th>
									<th className="text-md sm:text-lg">Price</th>
									<th className="text-md sm:text-lg">Options</th>
								</tr>
							</thead>
							{/* TABLE BODY */}
							<tbody>
								{products?.map((p, index) => {
									const { id, name, category, price, imageURL } = p;
									return (
										<tr key={id}>
											<td>{index + 1}</td>
											<td>
												<div>
													<img
														src={
															imageURL ||
															`https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png`
														}
														alt={name}
														className="w-10 sm:w-16 object-fill"
													/>
													<p>{imageURL}</p>
												</div>
											</td>
											<td>{name}</td>
											<td>{category}</td>
											<td>{formatPrice(price)}</td>
											<td>
												<div className="flex flex-col md:flex-row gap-2 ">
													<Link to="/admin/add-product">
														<BiEdit size={24} color="blue" />
													</Link>

													<BiTrash
														size={24}
														color="red"
														className="cursor-pointer"
														onClick={() =>
															deleteSingleProduct(id, imageURL)
														}
													/>
												</div>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				)}
			</main>
		</>
	);
};

export default ViewProducts;
