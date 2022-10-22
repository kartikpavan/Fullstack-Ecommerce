import React from "react";

const skeleton = () => {
	return (
		<div class="w-72 h-[300px] border-2 rounded-md mx-auto mt-20">
			<div class="flex flex-col animate-pulse items-center h-full justify-center space-x-5">
				<div class="bg-gray-300 h-32 "></div>
				<div class="flex flex-col space-y-3">
					<div class="w-36 bg-gray-300 h-6 rounded-md "></div>
					<div class="w-24 bg-gray-300 h-6 rounded-md "></div>
				</div>
			</div>
		</div>
	);
};

export default skeleton;
