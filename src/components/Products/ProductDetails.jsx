import { doc, getDoc } from "firebase/firestore";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import { Link, useParams } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";
import Loader from "../loader/Loader";
//Lazy Load
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// Firebase
import { useEffect, useState } from "react";
import { db } from "../../firebase/config";

const ProductDetails = () => {
	const [product, setProduct] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const { id } = useParams();

	async function getSingleDocument() {
		setIsLoading(true);
		const docRef = doc(db, "products", id);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			setProduct(docSnap.data());
			setIsLoading(false);
		} else {
			console.log("No such document!");
			setIsLoading(false);
		}
	}

	useEffect(() => {
		getSingleDocument();
	}, []);

	// const { imageURL, name, category, brand, price, description } = product;
	return (
		<>
			{isLoading && <Loader />}
			<Breadcrumbs type={product.name} />
			<section className="w-full mx-auto p-4 md:p-10 md:w-9/12 md:px-6 ">
				<h1 className="text-2xl">Product Details </h1>
				<Link to="/all" className="btn btn-sm btn-secondary">
					&larr; Back to All Products
				</Link>
				<article className="flex flex-col md:flex-row items-start justify-between py-4 gap-x-4">
					<div className=" w-full md:w-1/3 flex items-center justify-center border-2">
						<LazyLoadImage
							src={product.imageURL}
							alt={product.name}
							className="w-96 h-96 object-contain "
							placeholderSrc="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
							effect="blur"
						/>
					</div>
					<div className="flex-1">
						<h1 className="text-3xl  mb-2">{product.name}</h1>
						<h2 className="text-primary border-2 border-blue-500 px-2 py-2 max-w-max  font-bold text-lg mb-2">
							{formatPrice(product.price)}
						</h2>
						<p className="text-gray-500 mb-2">{product.description}</p>
						<p className="font-semibold mb-2">
							SKU : <span className="font-light">{id}</span>
						</p>
						<p className="font-semibold mb-2">
							Brand : <span className="font-light">{product.brand}</span>
						</p>
						{/* Button Group */}
						<div className="btn-group items-center mb-2">
							<button className="btn btn-sm btn-outline">-</button>
							<button className="btn btn-lg btn-ghost disabled">1</button>
							<button className="btn btn-sm btn-outline">+</button>
						</div>
						<div>
							<button className="btn btn-lg">Add to Cart</button>
						</div>
					</div>
				</article>
			</section>
		</>
	);
};

export default ProductDetails;
