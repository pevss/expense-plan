import "./EmptyListMessage.css";

export default function EmptyListMessage({ children }) {
	return (
		<div className="empty-list-message">
			<p>{children ?? "There's nothing here yet!"}</p>
		</div>
	);
}
