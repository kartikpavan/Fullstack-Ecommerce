import ReactDOM from "react-dom";

const Loader = () => {
	return ReactDOM.createPortal(
		<div className="overlay">
			<div class="loader"></div>
		</div>,
		document.getElementById("loader")
	);
};

export default Loader;
