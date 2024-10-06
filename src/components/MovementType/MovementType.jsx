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
	movementType: { description, color, type } = {}, // remove default later
}) {
	const isSelected = false;

	return (
		<li className={`movement-type ${isSelected ? "selected" : ""}`}>
			<div className="group">
				<Button type="secondary">Lápis</Button>
				<MovementTypeLabel mainColor={color}>
					{description}
				</MovementTypeLabel>
			</div>

			<div className="group">
				<InputRadio options={movementTypeTypes} currChecked={type} />
				<InputColor />
			</div>
		</li>
	);
}
