import "./MovementTypeLabel.css";

export default function MovementTypeLabel({
	mainColor,
	isEditing,
	description,
	onUpdateDescription,
}) {
	return (
		<input
			type="text"
			className="movement-type-label"
			style={{
				color: mainColor,
				backgroundColor: mainColor + 40,
				...(isEditing && { textDecoration: "underline" }),
			}}
			readOnly={!isEditing}
			value={description}
			onChange={onUpdateDescription}
		/>
	);
}
