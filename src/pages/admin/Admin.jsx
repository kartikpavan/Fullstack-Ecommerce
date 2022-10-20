import React from "react";
import { Route, Routes } from "react-router-dom";
import { AddProducts, AdminHome, AdminSidebar, Orders, ViewProducts } from "../../components";

const Admin = () => {
	return (
		<div className="max-w-[80vw] mx-auto w-full h-[88vh] flex bg-base-100 ">
			<div className="w-96 border-4 border-red-300 p-4">
				<AdminSidebar />
			</div>
			<div className="flex-1 p-4 border-green-400 border-4">
				<Routes>
					<Route path="home" element={<AdminHome />} />
					<Route path="all-products" element={<ViewProducts />} />
					<Route path="add-product" element={<AddProducts />} />
					<Route path="orders" element={<Orders />} />
				</Routes>
			</div>
		</div>
	);
};

export default Admin;
