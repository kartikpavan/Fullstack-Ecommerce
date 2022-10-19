import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Register = () => {
	const [showPassword, setShowPassword] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("registering  IN...");
	};
	return (
		<>
			<div className="py-6">
				<div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-4xl">
					<div className="w-full px-8 pt-12 pb-6">
						<p className="text-lg text-gray-600 text-center">Create a new Account</p>
						<button className="btn btn-sm btn-outline w-full rounded-full mt-4 gap-x-4">
							<FcGoogle size={22} />
							Sign in with google
						</button>
						<div className="divider text-xs text-gray-400 uppercase">
							or login with email
						</div>
						<form onSubmit={handleSubmit} className="form-control">
							<div>
								<label className="label-text font-bold mb-2 block">
									Email Address
								</label>
								<input
									className="input input-bordered w-full border-2"
									type="email"
									required
								/>
							</div>
							<div className="mt-4 relative">
								<div className="flex justify-between">
									<label className="label-text font-bold mb-2">Password</label>
								</div>
								<input
									className="input input-bordered w-full border-2"
									type={`${showPassword ? "test" : "password"}`}
									required
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
								<div className="flex justify-between">
									<label className="label-text font-bold mb-2">
										Confirm Password
									</label>
								</div>
								<input
									className="input input-bordered w-full border-2"
									type="password"
									required
								/>
							</div>
							<div className="mt-4">
								<button type="submit" className="btn w-full">
									REGISTER
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
