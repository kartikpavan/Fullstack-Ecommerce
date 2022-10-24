import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";
//  lazy load
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const GridView = ({ products }) => {
	if (!products.length) {
		return <h1 className="text-3xl font-bold">No Products Found</h1>;
	}

	return (
		<div className=" flex flex-wrap gap-y-5 py-10 ">
			{products.map((product) => {
				const { id, imageURL, name, price } = product;
				return (
					<div key={id} className="mx-auto ">
						<div className="group">
							<div className="card w-72 shadow-md relative hover:scale-105 duration-300">
								<LazyLoadImage
									src={imageURL}
									alt={name}
									className="h-60 object-contain rounded-md"
									placeholderSrc="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
									effect="blur"
								/>
								<div className=" absolute top-0 right-0">
									<span className="badge ">Free Delivery</span>
								</div>
								<div className="my-4 items-center text-center">
									<h1 className="font-semibold py-2">{name}</h1>
									<p className="py-2 text-lg">{formatPrice(price)}</p>
								</div>
								<div className="absolute top-0 right-0 h-full w-full group-hover:bg-[rgba(0,0,0,0.5)] duration-300"></div>
								<Link to={`/product-details/${id}`}>
									<button className="absolute top-1/3 left-1/4 btn btn-primary hidden group-hover:block transition-all ease-in duration-300">
										View Details
									</button>
								</Link>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default GridView;
