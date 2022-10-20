import { RiAdminLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
	const { userName } = useSelector((store) => store.auth);

	// Active link class
	const activeLink = ({ isActive }) =>
		isActive ? "border-b-4 border-blue-500 duration-300 " : "null";
	return (
		<div className="w-full">
			<div className="w-full h-44 bg-primary flex items-center justify-center flex-col gap-2 text-center">
				<RiAdminLine size={40} color="white" />
				<h1 className="text-lg md:text-2xl font-bold text-gray-200">{userName}</h1>
			</div>
			<nav>
				<div className="text-lg md:text-2xl p-4 hover:translate-x-4 hover:scale-105 duration-300">
					<NavLink to="/admin/home" className={activeLink}>
						Home
					</NavLink>
				</div>
				<div className="text-lg md:text-2xl hover:translate-x-4 hover:scale-105 duration-300  p-4">
					<NavLink to="/admin/all-products" className={activeLink}>
						All Products
					</NavLink>
				</div>
				<div className="text-lg md:text-2xl hover:translate-x-4 hover:scale-105 duration-300  p-4">
					<NavLink to="/admin/add-product" className={activeLink}>
						Add Products
					</NavLink>
				</div>
				<div className="text-lg md:text-2xl hover:translate-x-4 hover:scale-105 duration-300  p-4">
					<NavLink to="/admin/orders" className={activeLink}>
						Orders
					</NavLink>
				</div>
			</nav>
		</div>
	);
};

export default AdminSidebar;
