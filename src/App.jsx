import { Routes, Route } from "react-router-dom";
import { Navbar, Footer, Modal } from "./components";
import { About, Home, OrderHistory, Cart, ResetPassword } from "./pages";

const App = () => {
	return (
		<>
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/my-orders" element={<OrderHistory />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/reset" element={<ResetPassword />} />
			</Routes>
			<Modal />
			<Footer />
		</>
	);
};

export default App;
