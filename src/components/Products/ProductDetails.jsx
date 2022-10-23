import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useEffect, useState } from "react";
const ProductDetails = () => {
	const [product, setProduct] = useState(null);
	const { id } = useParams();

	async function getSingleDocument() {
		try {
			const docRef = doc(db, "products", id);
			const documentSnapshot = await getDoc(docRef);
			console.log(documentSnapshot.data());
			setProduct(documentSnapshot.data());
		} catch (error) {
			console.log(error.message, error.code);
		}
	}

	useEffect(() => {
		getSingleDocument();
	}, []);

	return (
		<main className="w-full">
			<Breadcrumbs type={"Single product"} />
			<section className="w-full mx-auto p-4 md:p-10 md:w-9/12 md:px-6 flex h-full">
				{product?.name}
			</section>
		</main>
	);
};

export default ProductDetails;
