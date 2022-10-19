import { Routes, Route } from "react-router-dom";
import { Navbar, Modal } from "./components";
import { About, Home, OrderHistory, Cart, ResetPassword } from "./pages";
import { ToastContainer } from "react-toastify";

const App = () => {
	return (
		<>
			<ToastContainer position="bottom-right" autoClose={2000} closeOnClick />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/my-orders" element={<OrderHistory />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/reset" element={<ResetPassword />} />
			</Routes>
			<Modal />
		</>
	);
};

export default App;
