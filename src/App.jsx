import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { About, Home } from "./pages";

const App = () => {
	return (
		<>
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	);
};

export default App;
