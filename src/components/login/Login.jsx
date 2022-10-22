import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Loader from "../loader/Loader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//Firebase
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/config";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		//* Custom User login
		setIsLoading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;

				toast.success("Login Successful");
				setIsLoading(false);
				document.getElementById("my-modal-4").checked = false;
				navigate("/");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				toast.error(errorCode, errorMessage);
				setIsLoading(false);
			});

		setEmail("");
		setPassword("");
	};

	//* Login with Google
	const provider = new GoogleAuthProvider();
	const googleSignIn = () => {
		setIsLoading(true);
		signInWithPopup(auth, provider)
			.then((result) => {
				const user = result.user;
				console.log(user);
				toast.success("Login Successful");
				setIsLoading(false);
				document.getElementById("my-modal-4").checked = false;
				navigate("/");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				toast.error(errorCode, errorMessage);
				setIsLoading(false);
			});
	};

	const AllFieldsRequired = Boolean(email) && Boolean(password);

	return (
		<>
			{isLoading && <Loader />}
			<div className="py-6 ">
				<div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-4xl">
					<div className="w-full px-8 pt-4 pb-6">
						<p className="text-xl text-gray-600 text-center">Welcome back</p>
						<button className="btn w-full mt-4 gap-2">
							<FcGoogle size={22} onClick={googleSignIn} />
							Sign in with google
						</button>
						<div className="divider text-xs text-gray-400 uppercase">
							or login with email
						</div>
						<form className="form-control" onSubmit={handleSubmit}>
							<div>
								<label className="label-text font-bold mb-2 block">
									Email Address
								</label>
								<input
									className="input input-bordered w-full border-2"
									type="email"
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="mt-4 relative">
								<div className="flex justify-between">
									<label className="label-text font-bold mb-2">Password</label>
									<Link
										to="/reset"
										className="text-xs text-gray-500"
										onClick={() =>
											(document.getElementById("my-modal-4").checked = false)
										}
									>
										Forget Password?
									</Link>
								</div>
								<input
									className="input input-bordered w-full border-2 "
									type={`${showPassword ? "test" : "password"}`}
									required
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
								<span onClick={() => setShowPassword((prev) => !prev)}>
									{showPassword ? (
										<AiFillEye
											className="absolute top-10 right-3 "
											size={26}
											color="gray"
										/>
									) : (
										<AiFillEyeInvisible
											className="absolute top-10 right-3 "
											size={26}
											color="gray"
										/>
									)}
								</span>
							</div>
							<div className="mt-4">
								<button
									type="submit"
									className="btn w-full"
									disabled={!AllFieldsRequired}
								>
									Login
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
