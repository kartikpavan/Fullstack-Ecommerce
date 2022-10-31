import { useEffect, useState } from "react";
import { ListView, GridView, Search, ProductFilter, Pagination } from "../../components";
import { BsFillGridFill, BsFilter } from "react-icons/bs";
import { MdOutlineSubject } from "react-icons/md";
// Redux
import { filterBySearch, sortProducts } from "../../redux/slice/filterSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductList = ({ products }) => {
	const { filteredProducts } = useSelector((store) => store.filter);
	const [grid, setGrid] = useState(true);
	const [search, setSearch] = useState("");
	const [sort, setSort] = useState("latest");
	// Pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [productPerPage, setProductPerPage] = useState(9);
	// Scroll To Top
	const [bacToTop, setBackToTop] = useState(false);
	const dispatch = useDispatch();

	//! Search
	useEffect(() => {
		dispatch(filterBySearch({ products, search }));
	}, [dispatch, products, search]);
	//! Sort
	useEffect(() => {
		dispatch(sortProducts({ products, sort }));
	}, [dispatch, products, sort]);

	useEffect(() => {
		// Scroll back to top
		const event = window.addEventListener("scroll", () => {
			if (pageYOffset > 400) {
				setBackToTop(true);
			} else {
				setBackToTop(false);
			}
			() => removeEventListener(event);
		});
	}, []);

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

	//get current product
	const indexOfLastProduct = currentPage * productPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productPerPage;
	const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

	return (
		<main className="relative">
			<header className="flex flex-col gap-y-4 xl:flex-row xl:items-center justify-between border-b pb-2">
				{/* Grid or List layout */}
				<div className="flex gap-2 items-center">
					<div className="flex gap-4">
						<BsFillGridFill
							size={28}
							onClick={() => setGrid(true)}
							className={` rounded-md p-1 ${grid ? "bg-neutral text-white" : null}`}
						/>
						<MdOutlineSubject
							size={28}
							onClick={() => setGrid(false)}
							className={` rounded-md p-1 ${grid ? null : "bg-neutral text-white"}`}
						/>
					</div>
					<h1>
						<span className="font-bold">{filteredProducts.length} </span>- Products
						Found
					</h1>
				</div>
				{/* Search Bar */}
				<Search value={search} onChange={(e) => setSearch(e.target.value)} />
				{/* Sorting List */}
				<div className="flex gap-2 items-center">
					<label>Sort by:</label>
					<select
						value={sort}
						className="select select-sm select-bordered"
						onChange={(e) => setSort(e.target.value)}
					>
						<option value="latest">Latest</option>
						<option value="lowest-price">Lowest Price</option>
						<option value="highest-price">Highest Price</option>
						<option value="a2z">Name(a - z)</option>
						<option value="z2a">Name(z - a)</option>
					</select>
				</div>
				{/* Collapse for Filter  */}
				<div className="collapse sm:hidden">
					<input type="checkbox" className="peer" />
					<div className="collapse-title rounded-sm bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content w-80 flex items-center justify-between">
						<p>Show Filters</p>
						<BsFilter size={28} />
					</div>
					<div className="collapse-content bg-primary text-primary-content peer-checked:bg-white peer-checked:text-black w-80 border-2 ">
						{/* Filter Component */}
						<ProductFilter />
					</div>
				</div>
			</header>
			<section>
				{grid ? (
					<GridView products={currentProducts} />
				) : (
					<ListView products={currentProducts} />
				)}
			</section>
			{bacToTop && (
				<div className="fixed bottom-5 right-5">
					<button
						className="btn btn-primary sm:btn-lg rounded-full"
						onClick={scrollToTop}
					>
						&uarr; Back to Top
					</button>
				</div>
			)}
			<Pagination
				productPerPage={productPerPage}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				totalProducts={filteredProducts.length}
			/>
		</main>
	);
};

export default ProductList;
