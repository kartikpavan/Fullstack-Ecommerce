import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const Login = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("LOGGING IN...");
	};

	return (
		<>
			<div className="py-6 ">
				<div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-4xl">
					<div className="w-full px-8 py-10 ">
						<p className="text-xl text-gray-600 text-center">LOGIN</p>
						<a
							href="#"
							className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
						>
							<div className="px-4 py-3">
								<FcGoogle size={26} />
							</div>
							<h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
								Sign in with Google
							</h1>
						</a>
						<div className="mt-4 flex items-center justify-between">
							<span className="border-b w-1/5 lg:w-1/4"></span>
							<a href="#" className="text-xs text-center text-gray-500 uppercase">
								or login with email
							</a>
							<span className="border-b w-1/5 lg:w-1/4"></span>
						</div>
						<form onSubmit={handleSubmit}>
							<div className="mt-4">
								<label className="block text-gray-700 text-sm font-bold mb-2">
									Email Address
								</label>
								<input
									className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
									type="email"
									required
								/>
							</div>
							<div className="mt-4">
								<div className="flex justify-between">
									<label className="block text-gray-700 text-sm font-bold mb-2">
										Password
									</label>
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
									className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
									type="password"
									required
								/>
							</div>
							<div className="mt-8">
								<button
									type="submit"
									className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
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
