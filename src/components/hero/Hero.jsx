import hero from "../../assets/hero3.png";
import { Link } from "react-router-dom";
import { TbArrowNarrowRight } from "react-icons/tb";
import { useEffect, useState } from "react";
const tags = ["Mobiles", "Electronics", "Bags", "Clothes", "Jwellery"];

let currentIndex = 0;
const Hero = () => {
   const [tagName, setTagName] = useState("");
   function updateCountdown() {
      const currentItem = tags[currentIndex];
      setTagName(currentItem);
      currentIndex = (currentIndex + 1) % tags.length;
      setTimeout(updateCountdown, 2000);
   }

   useEffect(() => {
      updateCountdown();
   }, []);

   return (
      // <div className="hero min-h-[91vh] bg-base-200 xl:relative overflow-clip">
      // 	<div className="hero-content flex-col xl:flex-row-reverse ">
      // 		<img
      // 			src={hero}
      // 			className="max-w-screen md:max-w-4xl absolute lg:right-10 opacity-30 lg:opacity-95 "
      // 		/>
      // 		<div className="xl:absolute xl:left-72 z-10">
      // 			<h1 className="text-2xl font-bold font-mono">Limited Time Only</h1>
      // 			<h2 className="logo text-[120px] xl:text-[200px]">Fashion</h2>
      // 			<p className="py-6 max-w-[90%] md:max-w-[60%]">
      // 				Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
      // 				exercitationem quasi.
      // 			</p>
      // 			<Link
      // 				to="/all"
      // 				className="btn  btn-active text-xl flex items-center gap-2 max-w-[200px]"
      // 			>
      // 				Shop Now
      // 				<TbArrowNarrowRight />
      // 			</Link>
      // 		</div>
      // 	</div>
      // </div>
      <>
         <main className="bg-base-100 w-full md:w-9/12 min-h-[92vh] mx-auto flex flex-col items-start justify-center ">
            <div className="container px-6 py-16 mx-auto">
               <div className="items-center lg:flex">
                  <div className="w-full lg:w-1/2">
                     <div className="lg:max-w-lg">
                        <p className="text-4xl font-bold text-neutral lg:text-4xl">
                           Best place to choose <br /> your{" "}
                           <span className="text-blue-500 opacity-100 transition-opacity duration-2000">
                              {tagName}
                           </span>
                        </p>

                        <p className="mt-3 text-gray-600 dark:text-gray-400">
                           Lorem ipsum dolor sit amet, consectetur adipisicing
                           elit. Porro beatae error laborum ab amet sunt
                           recusandae? Reiciendis natus perspiciatis optio.
                        </p>

                        <Link to="/all">
                           <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                              Shop Now
                           </button>
                        </Link>
                     </div>
                  </div>

                  <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                     <img
                        className="w-full h-full lg:max-w-3xl"
                        src="https://merakiui.com/images/components/Catalogue-pana.svg"
                        alt="Catalogue-pana.svg"
                     />
                  </div>
               </div>
            </div>
         </main>
      </>
   );
};

export default Hero;
