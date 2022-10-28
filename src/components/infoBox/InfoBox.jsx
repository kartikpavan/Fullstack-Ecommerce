import React from "react";

const InfoBox = ({ color, title, count, icon }) => {
	return (
		<div className={`w-96 p-4 border-2 rounded-md shadow-lg border-b-8 border-${color}-600`}>
			<h4 className="text-lg font-light ">{title}</h4>
			<div className="flex justify-between items-center">
				<h1 className="text-2xl font-semibold ">{count}</h1>
				<h1 className="text-xl font-semibold rounded-full">{icon}</h1>
			</div>
		</div>
	);
};

export default InfoBox;
