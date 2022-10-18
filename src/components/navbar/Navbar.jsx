import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
	return (
		<nav className="h-20">
			<div className="navbar bg-neutral ">
				<div className="flex-1">
					<Link to="/" className="btn btn-ghost ">
						<img src={logo} alt="logo" className="h-10" />
					</Link>
				</div>
				<div className="flex-none ">
					<div className="dropdown dropdown-end ">
						<label tabIndex={0} className="btn btn-ghost btn-circle">
							<div className="indicator">
								<AiOutlineShoppingCart color="white" size={26} />
								<span className="badge badge-md indicator-item">8</span>
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
					<div className="dropdown dropdown-end">
						<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
							<div className="w-10 rounded-full">
								<img src="https://placeimg.com/80/80/people" />
							</div>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
						>
							<li>
								<p>
									Welcome,
									<span className="badge font-bold">user</span>
								</p>
							</li>
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
								>
									LOGOUT
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
