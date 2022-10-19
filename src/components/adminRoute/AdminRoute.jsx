import React from "react";
import { useSelector } from "react-redux";

const AdminRoute = ({ children }) => {
	const { email } = useSelector((store) => store.auth);
	if (email === import.meta.env.VITE_ADMIN_KEY) return children;
	return null;
};

export default AdminRoute;
