import React, { useState } from "react";
// utilities
import { categories } from "../../utils/adminProductCategories";
import { defaultValues } from "../../utils/adminAddProductDefaultValues";
// Firebase
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/config";

//! Handle Input Changes
const AddProducts = () => {
	function handleInputChange(e) {
		const { name, value } = e.target;
		setProduct({ ...product, [name]: value });
	}
	//! File Upload to FireStorage
	function handleImageChange(e) {
		const file = e.target.files[0];
		const storageRef = ref(storage, `images/${Date.now()}${file.name}`);
		const uploadTask = uploadBytesResumable(storageRef, file);
	}
	//! Add Product to Firebase
	function addProduct(e) {
		e.preventDefault();
		console.log(product);
	}

	const [product, setProduct] = useState(defaultValues);
	return (
		<>
			<h1 className="text-3xl font-semibold pb-3">Add a new Product</h1>
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
						<div className="border-2 rounded-sm  max-w-xl w-full px-4 pb-2">
							<div>
								<progress
									className="progress progress-primary w-44 md:w-72"
									value="40"
									max="100"
								></progress>
							</div>
							<input
								accept="image/all"
								type="file"
								placeholder="IMAGE URL"
								name="image"
								onChange={handleImageChange}
							/>
							<input
								className="input input-sm input-bordered max-w-lg w-full my-2"
								type="text"
								value={product.imageURL}
								required
								placeholder="Image URL"
								disabled
							/>
						</div>
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
					<button type="submit" className="btn btn-primary text-lg max-w-xs w-full">
						Add Product
					</button>
				</form>
			</main>
		</>
	);
};

export default AddProducts;
