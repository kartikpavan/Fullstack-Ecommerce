import React from "react";

const Header = ({ text }) => {
	return (
		<section className="h-20 md:h-36 w-full bg-primary-content flex items-center">
			<div className="w-full mx-auto px-2 lg:w-9/12 md:px-6 ">
				<h1 className="text-xl md:text-3xl font-bold text-secondary-content">{text}</h1>
			</div>
		</section>
	);
};

export default Header;
