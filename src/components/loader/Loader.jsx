import ReactDOM from "react-dom";

const Loader = () => {
  return ReactDOM.createPortal(
    <div className="overlay">
      <div>
        <h1 className="text-xl font-semibold"> Please wait , This might take a while</h1>
        <div className="loader"></div>
      </div>
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
