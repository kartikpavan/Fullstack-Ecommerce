import React from "react";

const InfoBox = ({ color, title, count, icon }) => {
	return (
		<div className={`w-60 md:w-96 p-4 border-2 rounded-md shadow-lg border-b-8 border-primary`}>
			<h4 className="text-lg font-light">{title}</h4>
			<div className="flex justify-between items-center">
				<h1 className={`text-green-600 text-2xl font-semibold`}>{count}</h1>
				<h1 className="text-xl p-2 font-semibold bg-neutral rounded-full">{icon}</h1>
			</div>
		</div>
	);
};

export default InfoBox;
