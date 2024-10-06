import "./Digit.css";

export default function Digit({ digit }) {
	return (
		<span
			className="digit"
			data-digit={digit ?? 0}
			style={{ opacity: digit ? 1 : 0.3 }}
		>
			<span className="digit-options">
				{Array.from({ length: 10 }).map((_, i) => (
					<span key={i}>{i}</span>
				))}
			</span>
		</span>
	);
}
