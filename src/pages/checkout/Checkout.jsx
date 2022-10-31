import React, { useState, useEffect } from "react";
import Loader from "../../components/loader/Loader";
import { CheckoutForm } from "../../components";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./stripe.css";
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
//Redux
import { useSelector, useDispatch } from "react-redux";
import { calculateSubtotal, calculateTotalQuantity } from "../../redux/slice/cartSlice";
import { formatPrice } from "../../utils/formatPrice";

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
	const [clientSecret, setClientSecret] = useState("");

	const description = `Payment of ${formatPrice(totalAmount)} from ${email}`;
	useEffect(() => {
		// Create PaymentIntent as soon as the page loads
		fetch("https://ecom-stripe-server.onrender.com/create-payment-intent", {
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
