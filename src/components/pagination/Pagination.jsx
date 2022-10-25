import React from "react";

const Pagination = ({ productPerPage, currentPage, setCurrentPage, totalProducts }) => {
	function prevPage() {
		setCurrentPage((prev) => {
			if (prev <= 1) {
				return prev;
			} else {
				return prev - 1;
			}
		});
	}
	function nextPage() {
		setCurrentPage((prev) => {
			if (prev >= Math.ceil(totalProducts / productPerPage)) {
				return prev;
			} else {
				return prev + 1;
			}
		});
	}
	return (
		<div className="w-full flex flex-col items-center justify-center">
			<div className="btn-group">
				<button className="btn" onClick={prevPage}>
					«
				</button>
				<button className="btn">Page {currentPage}</button>
				<button className="btn" onClick={nextPage}>
					»
				</button>
			</div>
			<p className="font-semibold">
				<span className="text-primary">Page {currentPage} </span> of
				<span> {Math.ceil(totalProducts / productPerPage)} </span>
			</p>
		</div>
	);
};

export default Pagination;
