import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components";
// Star rating library
import StarsRating from "react-star-rate";

//redux
import { useSelector } from "react-redux";

const Review = () => {
	const [rating, setRating] = useState(0);
	const [review, setReview] = useState("");

	const { id } = useParams();
	const { products } = useSelector((store) => store.product);
	const { userId, userName } = useSelector((store) => store.auth);

	//! find the the matching product from the productsSlice
	const filteredProduct = products.find((item) => item.id === id);
	console.log(filteredProduct);
	return (
		<>
			<Header text="Review" />
			<main className="w-full mx-auto px-2 md:w-9/12 md:px-6 mt-6 ">
				<h1 className="text-2xl fonr-semibold">Rate this Product</h1>
				<section className="flex justify-around ">
					<div className="w-96">
						<h2 className="text-xl font-semibold">
							Product Name : <span className="text-light"></span>
						</h2>
					</div>

					<div className="p-4 rounded-md shadow-lg w-max flex flex-col">
						<h1 className="font-semibold">Rating : </h1>
						<StarsRating
							value={rating}
							onChange={(rating) => {
								setRating(rating);
							}}
						/>
						<textarea
							className="textarea textarea-secondary mt-4"
							placeholder="Review"
							rows={10}
							cols={50}
							value={review}
							onChange={(e) => setReview(e.target.value)}
						></textarea>
					</div>
				</section>
			</main>
		</>
	);
};

export default Review;
