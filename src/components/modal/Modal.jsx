import React from "react";

const Modal = ({ body, heading }) => {
	return (
		<>
			<input type="checkbox" id="my-modal-4" className="modal-toggle" />
			<label htmlFor="my-modal-4" className="modal cursor-pointer">
				<label className="modal-box relative">
					<h3 className="text-xl font-bold">{heading}</h3>
					<p className="py-4 ">{body}</p>
				</label>
			</label>
		</>
	);
};

export default Modal;
