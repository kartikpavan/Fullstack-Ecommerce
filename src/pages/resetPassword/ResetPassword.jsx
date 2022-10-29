import React, { useState } from "react";
import { toast } from "react-toastify";
// FIREBASE
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/config";
import Loader from "../../components/loader/Loader";

const ResetPassword = () => {
	const [email, setEmail] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [err, setErr] = useState("");
	const resetPasswordHandler = (e) => {
		e.preventDefault();
		setIsLoading(true);
		sendPasswordResetEmail(auth, email)
			.then(() => {
				toast.info("Check email for reset link");
				setErr("Check your Registered email address for reset link *(Check Spam)*");
				setIsLoading(false);
				setEmail("");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setErr(`${errorCode} : ${errorMessage}`);
				setIsLoading(false);
			});
	};

	return (
		<>
			{isLoading && <Loader />}

			<main className="w-full page flex items-center justify-center">
				<div className="w-96 h-auto shadow-xl rounded-md px-4 py-6">
					<h1 className="text-2xl font-bold text-center ">RESET PASSWORD</h1>
					{err && (
						<h1 className="alert shadow-lg text-gray-700 border-l-4 border-error my-4">
							{err}
						</h1>
					)}
					<div className="alert shadow-lg text-gray-700 border-l-4 border-primary my-4">
						Please enter your registered Email address. You will receive an email
						message with instructions on how to reset your password
					</div>

					<form className="form-control" onSubmit={resetPasswordHandler}>
						<label className="label-text font-bold mb-2 block">Email Address</label>
						<input
							type="email"
							className="input input-bordered input-secondary w-full"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<button type="submit" className="btn mt-3">
							Get new Password
						</button>
					</form>
				</div>
			</main>
		</>
	);
};

export default ResetPassword;
