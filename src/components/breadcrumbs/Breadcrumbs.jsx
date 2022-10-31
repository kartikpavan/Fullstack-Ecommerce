import React from "react";
import { Link, NavLink } from "react-router-dom";

const Breadcrumbs = ({ type, checkout, stripe }) => {
	const activeLink = ({ isActive }) => (isActive ? "text-secondary-content " : null);

	return (
		<section className="h-20 md:h-36 w-full bg-primary-content flex items-center">
			<div className="w-full mx-auto px-2 lg:w-9/12 md:px-6 ">
				<Link to="/" className="text-xl md:text-3xl font-bold ">
					Home /
				</Link>
				<NavLink to="/all" className={activeLink}>
					<span className="text-xl md:text-3xl font-bold"> Products </span>
				</NavLink>

				{type && (
					<NavLink to={{}} className={activeLink}>
						<span className="text-xl md:text-3xl font-bold">/ {type}</span>
					</NavLink>
				)}
				{checkout && (
					<NavLink to={{}} className={activeLink}>
						<span className="text-xl md:text-3xl font-bold"> / {checkout}</span>
					</NavLink>
				)}
				{stripe && (
					<NavLink to={{}} className={activeLink}>
						<span className="text-xl md:text-3xl font-bold"> / {stripe}</span>
					</NavLink>
				)}
			</div>
		</section>
	);
};

export default Breadcrumbs;
