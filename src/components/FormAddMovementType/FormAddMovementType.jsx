import { useState } from "react";

import Button from "../Button/Button";
import InputChar from "../inputs/InputChar/InputChar";
import InputColor from "../inputs/InputColor/InputColor";
import InputRadio from "../inputs/InputRadio/InputRadio";

import "./FormAddMovementType.css";

const movementTypeTypes = [
	{
		label: "+ Income",
		value: "income",
		color: "var(--color-500)",
		bgColor: "var(--color-950)",
	},
	{
		label: "- Outcome",
		value: "outcome",
		color: "var(--color-outcome)",
		bgColor: "var(--color-outcome-bg)",
	},
];

const normalizeMovementTypeDescription = function (description) {
	return description
		.trim()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/[^a-zA-Z0-9\s]/g, "")
		.replace(/\s+/g, "-")
		.toLowerCase();
};

export default function FormAddMovementType({ onAddMovementType }) {
	const [description, setDescription] = useState("");
	const [type, setType] = useState("");
	const [mainColor, setMainColor] = useState("#000000");

	const isSubmitable = Boolean(description && type);

	const newMovementType = {
		id: crypto.randomUUID(),
		description,
		mainColor,
		type,
		value: normalizeMovementTypeDescription(description),
	};

	const handleSubmit = function (e) {
		e.preventDefault();

		onAddMovementType(newMovementType);

		setDescription("");
		setType("");
		setMainColor("#000000");
	};

	return (
		<form className="form-add-movement-type" onSubmit={handleSubmit}>
			<div className="line line-1">
				<InputChar
					placeholder="Name a new movement type"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<Button type="primary" isDisabled={!isSubmitable}>
					{"->"}
				</Button>
			</div>
			<div className="line line-2">
				<InputRadio
					options={movementTypeTypes}
					currChecked={type}
					onChange={(e) => setType(e.target.value)}
				/>
				<InputColor
					value={mainColor}
					onChange={(e) => setMainColor(e.target.value)}
				/>
			</div>
		</form>
	);
}
