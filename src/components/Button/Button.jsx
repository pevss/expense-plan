import "./Button.css";

export default function Button({ type, isDisabled, onClick, children }) {
	if (type === "primary")
		return (
			<button
				className="button primary"
				disabled={isDisabled}
				onClick={onClick}
			>
				{children}
			</button>
		);
	else if (type === "secondary")
		return (
			<button
				className="button secondary"
				disabled={isDisabled}
				onClick={onClick}
			>
				{children}
			</button>
		);
}
