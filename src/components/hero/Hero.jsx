import hero from "../../assets/hero3.png";

const Hero = () => {
	return (
		<div className="hero min-h-screen bg-base-200 xl:relative overflow-hidden">
			<div className="hero-content flex-col xl:flex-row-reverse ">
				<img
					src={hero}
					className="max-w-screen lg:max-w-4xl absolute lg:right-10 opacity-30 lg:opacity-95 overflow-clip"
				/>
				<div className="xl:absolute xl:left-72 z-10">
					<h1 className="text-2xl font-bold font-mono">Limited Time Only</h1>
					<h2 className="logo text-[150px] xl:text-[200px]">Fashion</h2>
					<p className="py-6 max-w-[90%] md:max-w-[60%]">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
						exercitationem quasi.
					</p>
					<button className="btn btn-primary ">Shop Now</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
