import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
	const { isUserLoggedIn } = useSelector((store) => store.auth);
	if (isUserLoggedIn) {
		return children;
	}
	return <Navigate to="/" replace={true} />;
};

export default ProtectedRoute;
