import { RiAdminLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
	const { userName } = useSelector((store) => store.auth);

	// Active link class
	let activeStyle = {
		borderRight: "5px solid #181a2a",
		display: "block",
		// padding: "0.5rem 0",
	};
	return (
		<div className="w-full">
			<div className="w-full h-44 bg-primary flex items-center justify-center flex-col gap-2 text-center">
				<RiAdminLine size={40} color="white" />
				<h1 className="text-lg md:text-2xl font-bold text-gray-200">{userName}</h1>
			</div>
			<div className="text-md md:text-xl py-4 pl-2">
				<NavLink to="/admin/home" style={({ isActive }) => (isActive ? activeStyle : null)}>
					Home
				</NavLink>
			</div>
			<div className="text-md md:text-xl py-4 pl-2">
				<NavLink
					to="/admin/all-products"
					style={({ isActive }) => (isActive ? activeStyle : null)}
				>
					All Products
				</NavLink>
			</div>
			<div className="text-md md:text-xl py-4  pl-2">
				<NavLink
					to="/admin/add-product/ADD"
					style={({ isActive }) => (isActive ? activeStyle : null)}
				>
					Add Products
				</NavLink>
			</div>
			<div className="text-md md:text-xl py-4  pl-2">
				<NavLink
					to="/admin/orders"
					style={({ isActive }) => (isActive ? activeStyle : null)}
				>
					Orders
				</NavLink>
			</div>
		</div>
	);
};

export default AdminSidebar;
