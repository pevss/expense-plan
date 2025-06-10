import "./Card.css";

export default function Card({ label, shouldStrech, children }) {
	return (
		<div
			className="card"
			style={{ ...(shouldStrech && { height: "100%" }) }}
		>
			{label && <p>{label}</p>}
			{children}
		</div>
	);
}
