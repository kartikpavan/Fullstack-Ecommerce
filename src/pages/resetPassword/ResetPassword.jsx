import React from "react";

const ResetPassword = () => {
	return (
		<main className="w-full page flex items-center justify-center">
			<div className="w-96 h-auto shadow-xl rounded-md px-4 py-6">
				<h1 className="text-2xl font-bold text-center ">RESET PASSWORD</h1>
				<div className="alert shadow-lg text-gray-700 border-l-4 border-primary my-4">
					Please enter your registered Email address. You will receive an email message
					with instructions on how to reset your password
				</div>

				<form className="form-control">
					<label className="label-text font-bold mb-2 block">Email Address</label>
					<input
						type="email"
						name=""
						id=""
						className="input input-bordered input-secondary w-full"
					/>
					<button className="btn mt-3">Get new Password</button>
				</form>
			</div>
		</main>
	);
};

export default ResetPassword;
