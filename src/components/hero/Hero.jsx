import hero from "../../assets/hero3.png";
import { Link } from "react-router-dom";
import { TbArrowNarrowRight } from "react-icons/tb";
const Hero = () => {
	return (
		<div className="hero min-h-[91vh] bg-base-200 xl:relative overflow-clip">
			<div className="hero-content flex-col xl:flex-row-reverse ">
				<img
					src={hero}
					className="max-w-screen md:max-w-4xl absolute lg:right-10 opacity-30 lg:opacity-95 "
				/>
				<div className="xl:absolute xl:left-72 z-10">
					<h1 className="text-2xl font-bold font-mono">Limited Time Only</h1>
					<h2 className="logo text-[120px] xl:text-[200px]">Fashion</h2>
					<p className="py-6 max-w-[90%] md:max-w-[60%]">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
						exercitationem quasi.
					</p>
					<Link
						to="/all"
						className="btn  btn-active text-xl flex items-center gap-2 max-w-[200px]"
					>
						Shop Now
						<TbArrowNarrowRight />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;
