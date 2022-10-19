import ReactDOM from "react-dom";

const Loader = () => {
	return ReactDOM.createPortal(
		<div className="overlay">
			<div className="loader"></div>
		</div>,
		document.getElementById("loader")
	);
	// return (
	// 	<div className="overlay">
	// 		<div class="loader"></div>
	// 	</div>
	// );
};

export default Loader;
