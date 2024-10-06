import { useState } from "react";
import { Check, Crosshair, CrosshairSimple } from "@phosphor-icons/react";

import Button from "../Button/Button";
import MovementTypeLabel from "../MovementTypeLabel/MovementTypeLabel";
import InputRadio from "../inputs/InputRadio/InputRadio";
import InputColor from "../inputs/InputColor/InputColor";

import "./MovementType.css";

const movementTypeTypes = [
	{
		label: "+",
		value: "income",
		color: "var(--color-500)",
		bgColor: "var(--color-950)",
	},
	{
		label: "-",
		value: "outcome",
		color: "var(--color-outcome)",
		bgColor: "var(--color-outcome-bg)",
	},
];

export default function MovementType({
	movementType: { id, description, mainColor, type },
	selectedMovementType,
	onSelectMovementType,
	onUpdateMovementType,
}) {
	const [currMovementType, setCurrMovementType] = useState(type);
	const [currMainColor, setCurrMainColor] = useState(mainColor);
	const [currDescription, setCurrDescription] = useState(description);

	const isEditing =
		currMovementType !== type ||
		currMainColor !== mainColor ||
		currDescription !== description;

	const isSelected = selectedMovementType?.id === id;

	const updatedMovementType = {
		id,
		description: currDescription,
		mainColor: currMainColor,
		type: currMovementType,
	};

	return (
		<li className={`movement-type ${isSelected ? "selected" : ""}`}>
			<div className="group">
				{isSelected ? (
					<Crosshair
						size={17}
						weight="fill"
						color="var(--color-500)"
						onClick={() => onSelectMovementType(id)}
					/>
				) : (
					<CrosshairSimple
						size={17}
						color="var(--color-950)"
						onClick={() => onSelectMovementType(id)}
					/>
				)}
				<MovementTypeLabel
					mainColor={currMainColor}
					description={currDescription}
					isEditing={true}
					onUpdateDescription={(e) =>
						setCurrDescription(e.target.value)
					}
				/>
			</div>

			<div className="group">
				<InputRadio
					groupName={id}
					options={movementTypeTypes}
					currChecked={currMovementType}
					onChange={(e) => setCurrMovementType(e.target.value)}
				/>
				<InputColor
					value={currMainColor}
					onChange={(e) => setCurrMainColor(e.target.value)}
				/>
				<Button
					type="primary"
					isDisabled={!isEditing}
					onClick={() => onUpdateMovementType(updatedMovementType)}
				>
					<Check
						color={
							isEditing ? "var(--color-50)" : "var(--color-600)"
						}
						size={15}
					/>
				</Button>
			</div>
		</li>
	);
}
