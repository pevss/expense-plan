import "./MovementTypeLabel.css";

export default function MovementTypeLabel({ mainColor, children }) {
	return (
		<h2
			className="movement-type-label"
			style={{ color: mainColor, backgroundColor: mainColor + 40 }}
		>
			{children}
		</h2>
	);
}
