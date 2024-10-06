import Digit from "./Digit/Digit";

import "./Overview.css";

export default function Overview({ value, isNeutral = false }) {
	const isPositive = value > 0;

	//prettier-ignore
	const [wholePart, fractionalPart] = parseFloat(Math.abs(value)).toFixed(2).split(".");

	const wholeDigits = wholePart.split("");
	const fractionalDigits = fractionalPart.split("");

	while (wholeDigits.length < 5) wholeDigits.unshift(null);

	return (
		<h1
			className="overview"
			style={{
				//prettier-ignore
				color: isNeutral || value === 0 ? "var(--color-50)" : 
                isPositive ? "var(--color-500)" : "var(--color-outcome)",
			}}
		>
			{!isNeutral && value !== 0 && (isPositive ? "+" : "-")}R$
			<span>
				{wholeDigits.map((digit, i) => (
					<Digit digit={digit} key={i} />
				))}
				,
				{fractionalDigits.map((digit, i) => (
					<Digit digit={digit} key={i} />
				))}
			</span>
		</h1>
	);
}
