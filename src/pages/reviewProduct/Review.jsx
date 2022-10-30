import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../../components";
import { formatPrice } from "../../utils/formatPrice";
import { toast } from "react-toastify";
// lazy load
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// Star rating library
import StarsRating from "react-star-rate";
//redux
import { useSelector } from "react-redux";
// firebase
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebase/config";

const Review = () => {
	const [rating, setRating] = useState(0);
	const [review, setReview] = useState("");
	const navigate = useNavigate();
	const { id } = useParams();
	const { products } = useSelector((store) => store.product);
	const { userId, userName } = useSelector((store) => store.auth);

	//! find the the matching product from the productsSlice
	const filteredProduct = products.find((item) => item.id === id);

	function submitReview(e) {
		e.preventDefault();
		const date = new Date().toDateString();
		const time = new Date().toLocaleTimeString();
		const reviewConfig = {
			userId,
			userName,
			productId: id,
			review,
			rating,
			reviewDate: date,
			reviewTime: time,
			createdAt: Timestamp.now().toDate(),
		};
		try {
			addDoc(collection(db, "reviews"), reviewConfig);
			toast.success("Thanks for Sharing your feedback");
			setRating(0);
			setReview("");
			navigate(`/product-details/${id}`);
		} catch (error) {
			toast.error(error.message);
		}
	}

	return (
		<>
			<Header text="Review" />
			{filteredProduct === null ? (
				<h1 className="text-2xl font-bold"> No product Found </h1>
			) : (
				<main className="w-full mx-auto px-2 md:w-9/12 md:px-6 mt-6 ">
					<section className="flex justify-evenly items-center flex-col lg:flex-row p-6">
						<div className="">
							<div className="flex flex-col gap-5">
								<h1 className="font-light text-primary text-xl">
									{filteredProduct.name}
								</h1>
								<div className="flex gap-4 items-center">
									<LazyLoadImage
										src={filteredProduct.imageURL}
										alt={"image"}
										className="w-10 sm:w-32 object-fill"
										placeholderSrc="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
										effect="blur"
									/>
									<div>
										<p className="font-semibold">{filteredProduct.brand}</p>
										<p className="font-semibold">
											{formatPrice(filteredProduct.price)}
										</p>
									</div>
								</div>
							</div>
						</div>

						<form
							onSubmit={submitReview}
							className="p-4 w-full md:w-[30rem] rounded-md shadow-lg flex flex-col"
						>
							<h1 className="font-semibold">Rating : </h1>
							<StarsRating
								value={rating}
								onChange={(rating) => {
									setRating(rating);
								}}
							/>
							<textarea
								className="textarea textarea-secondary mt-2 max-w-[100%] w-full"
								placeholder="Review"
								rows={10}
								value={review}
								onChange={(e) => setReview(e.target.value)}
							></textarea>
							<button type="submit" className="btn btn-primary mt-3">
								Submit review
							</button>
						</form>
					</section>
				</main>
			)}
		</>
	);
};

export default Review;
