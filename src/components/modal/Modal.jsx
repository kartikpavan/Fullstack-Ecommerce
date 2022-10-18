import React, { useState } from "react";
import Login from "../login/Login";
import Register from "../register/Register";
const Modal = () => {
	const [isLogin, setIsLogin] = useState(true);

	return (
		<>
			<input type="checkbox" id="my-modal-4" className="modal-toggle" />
			<label htmlFor="my-modal-4" className="modal cursor-pointer">
				<label className="relative w-96 ">
					<div className="absolute top-6 tabs">
						<button
							className={`tab tab-lifted ${isLogin ? "tab-active" : null}`}
							onClick={() => setIsLogin(true)}
						>
							Login
						</button>
						<button
							className={`tab tab-lifted ${isLogin ? null : "tab-active"}`}
							onClick={() => setIsLogin(false)}
						>
							Register
						</button>
					</div>
					{isLogin ? <Login /> : <Register />}
				</label>
			</label>
		</>
	);
};

export default Modal;
