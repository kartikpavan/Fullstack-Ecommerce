import React from "react";
import { Link, NavLink } from "react-router-dom";

const Breadcrumbs = () => {
	const activeLink = ({ isActive }) => (isActive ? "text-secondary-content " : "text-secondary");

	return (
		<section className="h-44 w-full bg-primary-content flex items-center">
			<div className="w-full mx-auto px-2 md:w-9/12 md:px-6 ">
				<Link to="/" className="text-xl md:text-3xl font-bold text-secondary">
					Home /
				</Link>

				<NavLink to="/all" className={activeLink}>
					<span className="text-xl md:text-3xl font-bold"> Products</span>
				</NavLink>
			</div>
		</section>
	);
};

export default Breadcrumbs;
