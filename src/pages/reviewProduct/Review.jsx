import React from "react";
import { useParams } from "react-router-dom";

const Review = () => {
	const { id } = useParams();
	return (
		<div>
			<h1 className="text-2xl fonr-semibold">Review for({id})</h1>
		</div>
	);
};

export default Review;
