import React from "react";

const ConfirmModal = ({ deleteSingleProduct, id, imageURL, name }) => {
	return (
		<>
			<input type="checkbox" id="my-modal-6" className="modal-toggle" />
			<div className="modal modal-bottom sm:modal-middle">
				<div className="modal-box">
					<h3 className="font-bold text-lg">Delete item ? </h3>
					<div className="alert shadow-lg text-gray-700 border-l-4 border-red-600 my-4">
						Are You sure you want to delete the item
					</div>

					<div className="modal-action">
						<label
							htmlFor="my-modal-6"
							className="btn"
							onClick={() => deleteSingleProduct(id, imageURL)}
						>
							CONFIRM
						</label>
						<label htmlFor="my-modal-6" className="btn btn-error">
							Close
						</label>
					</div>
				</div>
			</div>
		</>
	);
};

export default ConfirmModal;
