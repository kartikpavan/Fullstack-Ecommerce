import React from "react";
import { Route, Routes } from "react-router-dom";
import { AddProducts, AdminHome, AdminSidebar, Orders, ViewProducts } from "../../components";

const Admin = () => {
	return (
		<div>
			{/* Sidebar */}
			<div>
				<AdminSidebar />
			</div>
			{/* Main content */}
			<div>
				<Routes>
					<Route path="/home" element={<AdminHome />} />
					<Route path="/all-products" element={<ViewProducts />} />
					<Route path="/add-product" element={<AddProducts />} />
					<Route path="/orders" element={<Orders />} />
				</Routes>
			</div>
		</div>
	);
};

export default Admin;
