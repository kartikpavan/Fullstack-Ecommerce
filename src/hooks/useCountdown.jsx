import { useState } from "react";
import { useEffect } from "react";

const useCountdown = () => {
	const now = new Date().getTime();
	const deadline = new Date("12 jan,2023,00:15:00").getTime();

	const [countDown, setCountDown] = useState(deadline - now);

	useEffect(() => {
		const timer = setInterval(() => {
			setCountDown(deadline - now);
		}, 1000);
		return () => clearInterval(timer);
	}, [deadline]);

	return getRealTime(countDown);
};

const getRealTime = (countDown) => {
	const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
	const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

	return [days, hours, minutes, seconds];
};

export { useCountdown };
