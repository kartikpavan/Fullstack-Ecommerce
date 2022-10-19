import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// firebase
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";

const Navbar = () => {
	const [userName, setUserName] = useState("");
	const [userImage, setUserImage] = useState("");
	const navigate = useNavigate();

	//* Monitor currentl;y signed USER
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log(user.email.split("@")[0]);
				setUserName(user.email.split("@")[0]);
				setUserImage(user.photoURL);
			} else {
				setUserName("");
			}
		});
	}, []);

	function logOutUser() {
		signOut(auth)
			.then(() => {
				toast.success("User Signed Out ");
				navigate("/");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				toast.error(errorCode, errorMessage);
			});
	}

	return (
		<>
			{/* {isLoading && <Loader />} */}
			<nav className="h-16 bg-neutral  ">
				<div className="navbar w-full md:w-9/12 mx-auto flex items-center justify-between">
					<section className="w-full md:gap-4">
						<Link to="/" className="btn btn-ghost ">
							<img src={logo} alt="logo" className="h-6 md:h-10" />
						</Link>
						<div className="form-control max-w-sm w-full ">
							<div className="input-group ">
								<input
									type="text"
									placeholder="Search…"
									className="input input-sm input-bordered w-full "
								/>
								<button className="btn btn-square btn-sm btn-primary">
									<AiOutlineSearch size={26} />
								</button>
							</div>
						</div>
					</section>
					<div className="md:gap-2">
						<div className="dropdown dropdown-end ">
							<label tabIndex={0} className="btn btn-ghost btn-circle">
								<div className="indicator">
									<AiOutlineShoppingCart color="white" size={26} />
									<span className="badge badge-primary indicator-item">8</span>
								</div>
							</label>
							<div
								tabIndex={0}
								className="mt-3 card card-compact dropdown-content w-52 bg-neutral text-neutral-content shadow "
							>
								<div className="card-body">
									<span className="font-bold text-lg">8 Items</span>
									<span className="text-info">Subtotal: $999</span>
									<div className="card-actions">
										<Link to="/cart" className="btn btn-primary btn-block">
											View cart
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="dropdown dropdown-end ml-4">
							<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
								<div className="w-10 rounded-full">
									<img
										src={`${
											userImage
												? userImage
												: "https://placeimg.com/80/80/people"
										}`}
									/>
								</div>
							</label>
							<ul
								tabIndex={0}
								className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
							>
								{userName && (
									<li>
										<p>
											Hi,
											<span className="badge font-bold">{userName}</span>
										</p>
									</li>
								)}

								<li>
									<Link to="/my-orders">My Orders</Link>
								</li>
								<li>
									<label htmlFor="my-modal-4" className="modal-button">
										Login / Register
									</label>
								</li>
								<li>
									<Link
										to="/"
										className="flex justify-between hover:bg-red-100  text-red-500"
										onClick={logOutUser}
									>
										LOGOUT
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
