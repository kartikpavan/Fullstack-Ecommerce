import React from "react";
import { BiSearch } from "react-icons/bi";
const Search = ({ value, onChange }) => {
	return (
		<div>
			<div className="input-group">
				<input
					type="text"
					value={value}
					onChange={onChange}
					placeholder="Search by name"
					className="input input-bordered w-[300px]"
				/>
				<button className="btn btn-square">
					<BiSearch size={24} />
				</button>
			</div>
		</div>
	);
};

export default Search;
