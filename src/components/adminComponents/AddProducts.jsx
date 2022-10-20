import React, { useState } from "react";
import { toast } from "react-toastify";
import Loader from "../loader/Loader";
// utilities
import { categories } from "../../utils/adminProductCategories";
import { defaultValues } from "../../utils/adminAddProductDefaultValues";
// Firebase
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { storage, db } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

//! Handle Input Changes
const AddProducts = () => {
	const [uploadProgress, setUploadProgress] = useState(0);
	const [product, setProduct] = useState(defaultValues);
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	function handleInputChange(e) {
		const { name, value } = e.target;
		setProduct({ ...product, [name]: value });
	}
	//! File Upload to FireStorage
	function handleImageChange(e) {
		const file = e.target.files[0];
		const storageRef = ref(storage, `images/${Date.now()}${file.name}`);
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				setUploadProgress(progress);
			},
			(error) => {
				toast.error(error.code, error.message);
			},
			() => {
				// Handle successful uploads on complete
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					setProduct({ ...product, imageURL: downloadURL });
					toast.success("File Uploaded Successfully");
				});
			}
		);
	}
	//! Add Product to Firebase
	async function addProduct(e) {
		e.preventDefault();
		setIsLoading(true);
		try {
			const docRef = await addDoc(collection(db, "products"), {
				name: product.name,
				imageURL: product.imageURL,
				price: Number(product.price),
				category: product.category,
				brand: product.brand,
				description: product.description,
				createdAt: Timestamp.now().toDate(),
			});
			setUploadProgress(0);
			setProduct(defaultValues);
			setIsLoading(false);
			toast.success("Product added to Database Successfully");
			navigate("/admin/all-products");
		} catch (error) {
			console.log(error.message);
			toast.error("Something Went Wrong , Check Console");
			setIsLoading(false);
		}
	}
	//! Disable button until everything added to input fields
	const AllFieldsRequired =
		Boolean(product.brand) &&
		Boolean(product.category) &&
		Boolean(product.description) &&
		Boolean(product.imageURL) &&
		Boolean(product.name) &&
		Boolean(product.name);

	return (
		<>
			{isLoading && <Loader />}
			<h1 className="text-xl md:text-3xl font-semibold pb-3">Add a new Product</h1>
			<main className="max-w-[70vw] md:max-w-[50vw] h-full rounded-md shadow-lg p-2">
				<form className="form-control" onSubmit={addProduct}>
					<div className="py-2">
						<label className="label-text font-bold mb-2 block">Product Name: </label>
						<input
							className="input input-bordered max-w-lg w-full border-2"
							type="text"
							placeholder="Product Name"
							required
							name="name"
							value={product.name}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<label className="label-text font-bold mb-2 block">Product Image: </label>
					</div>
					<div className="py-2">
						<label className="label-text font-bold mb-2 block">Product Price: </label>
						<input
							className="input input-bordered max-w-lg w-full border-2"
							type="number"
							placeholder="Product Price"
							required
							name="price"
							value={product.price}
							onChange={handleInputChange}
						/>
					</div>
					<div className="py-2">
						<label className="label-text font-bold mb-2 block">Product Category:</label>
						<select
							className="select select-bordered w-full max-w-lg"
							required
							name="category"
							value={product.category}
							onChange={handleInputChange}
						>
							<option disabled value="">
								-- Choose a Product Category --
							</option>
							{categories.map((c) => {
								return (
									<option key={c.id} value={c.name}>
										{c.name}
									</option>
								);
							})}
						</select>
					</div>
					<div className="py-2">
						<label className="label-text font-bold mb-2 block">Product Brand: </label>
						<input
							className="input input-bordered max-w-lg w-full border-2"
							type="text"
							placeholder="Product Brand"
							required
							name="brand"
							value={product.brand}
							onChange={handleInputChange}
						/>
					</div>
					<div className="py-2">
						<label className="label-text font-bold mb-2 block">
							Product Description:{" "}
						</label>
						<textarea
							className="textarea textarea-bordered h-32 max-w-lg w-full"
							type="text"
							placeholder="Product Description"
							required
							name="description"
							value={product.description}
							onChange={handleInputChange}
						></textarea>
					</div>
					<div className="border-2 rounded-sm  max-w-xl w-full px-4 pb-2">
						<div>
							<progress
								className="progress progress-primary w-44 md:w-72 xl:w-full"
								value={uploadProgress}
								max="100"
							></progress>
						</div>
						<input
							className="max-w-lg w-full"
							accept="image/all"
							type="file"
							placeholder="IMAGE URL"
							name="image"
							onChange={handleImageChange}
						/>
						{product.imageURL === "" ? null : (
							<input
								className="input input-sm input-bordered max-w-lg w-full my-2"
								type="text"
								value={product.imageURL}
								required
								placeholder="Image URL"
								disabled
							/>
						)}
					</div>
					<button
						type="submit"
						className="btn btn-primary text-lg max-w-xs w-full mt-2"
						disabled={!AllFieldsRequired}
					>
						Add Product
					</button>
				</form>
			</main>
		</>
	);
};

export default AddProducts;
