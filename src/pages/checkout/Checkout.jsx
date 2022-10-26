import React, { useState, useEffect } from "react";
import Loader from "../../components/loader/Loader";
import { CheckoutForm } from "../../components";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./stripe.css";
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
const stripePromise = loadStripe(
	"pk_test_51IhD2ISEIMxXwIhEbF3F1RJovmp613mt1x3vyZGjKqoYqe5pGc9C2cTxN3uNPGIkiTuo815fej7RzpHQE15H7NYb00siStbRNX"
);
//Redux
import { useSelector, useDispatch } from "react-redux";
import { calculateSubtotal, calculateTotalQuantity } from "../../redux/slice/cartSlice";
import { formatPrice } from "../../utils/formatPrice";
import { toast } from "react-toastify";

const Checkout = () => {
	// Redux states
	const { cartItems, totalQuantity, totalAmount } = useSelector((store) => store.cart);
	const { shippingAddress, billingAddress } = useSelector((store) => store.checkout);
	const { email } = useSelector((store) => store.auth);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(calculateSubtotal());
		dispatch(calculateTotalQuantity());
	}, [dispatch, cartItems]);
	// local States
	const [message, setMessage] = useState("Initializing Checkout... ");
	const [clientSecret, setClientSecret] = useState("");

	const description = `Payment of ${formatPrice(totalAmount)} from ${email}`;
	useEffect(() => {
		// Create PaymentIntent as soon as the page loads
		fetch("http://localhost:4242/create-payment-intent", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				items: cartItems,
				userEmail: email,
				shippingAddress,
				billingAddress,
				description,
			}),
		})
			.then((res) => res.json())
			.then((data) => setClientSecret(data.clientSecret));
	}, []);

	const appearance = {
		theme: "stripe",
	};
	const options = {
		clientSecret,
		appearance,
	};
	return (
		<main>
			{/* {!clientSecret && <h3 className="text-2xl text-red-500">{message} </h3>} */}
			{!clientSecret && <Loader />}
			<div>
				{clientSecret && (
					<Elements options={options} stripe={stripePromise}>
						<CheckoutForm />
					</Elements>
				)}
			</div>
		</main>
	);
};

export default Checkout;
