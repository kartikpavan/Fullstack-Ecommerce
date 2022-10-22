import { useEffect } from "react";
import Loader from "../loader/Loader";
import { toast } from "react-toastify";
import { formatPrice } from "../../utils/formatPrice";
import { BiEdit, BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
import ConfirmModal from "../confirmModal/ConfirmModal";
import useFetchCollection from "../../hooks/useFetchCollection";
// Firebase
import { doc, deleteDoc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";
import { db, storage } from "../../firebase/config";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { storeProducts } from "../../redux/slice/productSlice";

const ViewProducts = () => {
	const dispatch = useDispatch();

	//! Fetching Products from collection using Custom Hook
	const { data, isLoading } = useFetchCollection("products");
	const { products } = useSelector((store) => store.product);

	useEffect(() => {
		dispatch(storeProducts({ products: data }));
	}, [dispatch, data]);

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
	return (
		<>
			{isLoading && <Loader />}
			<h1 className="text-xl md:text-3xl font-semibold ">All Products</h1>
			{products.length && (
				<div>
					<div className="underline">
						<span className="text-lg font-bold ">{products.length} </span> products
						found
					</div>
				</div>
			)}
			<main className="md:max-w-[100vw] max-h-[70vh] py-4 overflow-y-scroll ">
				{products.length === 0 ? (
					<h1 className="text-4xl font-bold text-red-500">NO PRODUCTS FOUND</h1>
				) : (
					<div className="overflow-x-auto mt-2 w-full">
						<table className="table table-compact w-full">
							{/* TABLE HEAD */}
							<thead>
								<tr>
									<th className="text-md sm:text-lg "></th>
									<th className="text-md sm:text-lg">Image</th>
									<th className="text-md sm:text-lg ">Name</th>
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
										<tr key={id} className="hover">
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
												</div>
											</td>
											<td className="text-lg font-light w-[200px] ">
												{name}
											</td>
											<td className="text-lg font-light">{category}</td>
											<td className="text-lg font-light">
												{formatPrice(price)}
											</td>
											<td>
												<div className="flex flex-col md:flex-row gap-2 ">
													<Link to={`/admin/add-product/${id}`}>
														<BiEdit size={24} color="blue" />
													</Link>
													<label
														htmlFor="my-modal-6"
														className="modal-button"
													>
														<BiTrash
															size={24}
															color="red"
															className="cursor-pointer"
															onClick={() => {
																deleteSingleProduct(id, imageURL);
															}}
														/>
													</label>
													{/* 
													<ConfirmModal
														deleteSingleProduct={deleteSingleProduct}
														id={id}
														imageURL={imageURL}
														name={name}
													/> */}
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
