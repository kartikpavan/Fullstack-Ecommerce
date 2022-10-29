import React from "react";

const Steps = ({ order }) => {
	return (
		<>
			{order.orderStatus === "Order Placed" && (
				<ul className="steps steps-vertical lg:steps-horizontal ">
					<li data-content="●" className="step step-primary">
						<pre> Order-Placed </pre>
					</li>
					<li data-content="●" className="step ">
						<pre> Processing </pre>
					</li>
					<li data-content="●" className="step">
						<pre> Order-Shipped </pre>
					</li>
					<li data-content="✓" className="step">
						<pre> Order-Delivered </pre>
					</li>
				</ul>
			)}
			{order.orderStatus === "Processing..." && (
				<ul className="steps steps-vertical lg:steps-horizontal">
					<li data-content="●" className="step step-primary">
						<pre> Order-Placed </pre>
					</li>
					<li data-content="●" className="step step-primary">
						<pre> Processing </pre>
					</li>
					<li data-content="●" className="step">
						<pre> Order-Shipped </pre>
					</li>
					<li data-content="✓" className="step">
						<pre> Order-Delivered </pre>
					</li>
				</ul>
			)}
			{order.orderStatus === "Item(s) Shipped" && (
				<ul className="steps steps-vertical lg:steps-horizontal">
					<li data-content="●" className="step step-primary">
						<pre> Order-Placed </pre>
					</li>
					<li data-content="●" className="step step-primary">
						<pre> Processing </pre>
					</li>
					<li data-content="●" className="step step-primary">
						<pre> Order-Shipped </pre>
					</li>
					<li data-content="✓" className="step">
						<pre> Order-Delivered </pre>
					</li>
				</ul>
			)}
			{order.orderStatus === "Item(s) Delivered" && (
				<ul className="steps steps-vertical lg:steps-horizontal">
					<li data-content="●" className="step step-primary">
						<pre> Order-Placed </pre>
					</li>
					<li data-content="●" className="step step-primary">
						<pre> Processing </pre>
					</li>
					<li data-content="●" className="step step-primary">
						<pre> Order-Shipped </pre>
					</li>
					<li data-content="✓" className="step step-primary">
						<pre> Order-Delivered </pre>
					</li>
				</ul>
			)}
		</>
	);
};

export default Steps;
