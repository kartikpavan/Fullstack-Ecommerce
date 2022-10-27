import React from "react";
import StarsRating from "react-star-rate";

const ReviewComponent = ({ review }) => {
	const { userName, rating, review: comments, reviewDate, reviewTime } = review;
	return (
		<main className="p-4 w-full lg:w-[30rem] border-2 rounded-md">
			<section className="flex items-start gap-2">
				<img
					src="https://placeimg.com/80/80/people"
					alt="dp"
					className="rounded-full w-14"
				/>
				<div>
					<h1 className="text-lg font-semibold">{userName || "Anonymous"}</h1>
					<p className="text-gray-400">{reviewDate}</p>
				</div>
			</section>
			<section>
				<StarsRating disabled value={rating} />
				<p className="text-lg">{comments}</p>
			</section>
		</main>
	);
};

export default ReviewComponent;
