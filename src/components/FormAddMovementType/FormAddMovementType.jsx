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

export default function FormAddMovementType() {
	return (
		<form className="form-add-movement-type">
			<div className="line line-1">
				<InputChar placeholder="Name a new movement type" />
				<Button type="primary"> {"->"} </Button>
			</div>
			<div className="line line-2">
				<InputRadio options={movementTypeTypes} />
				<InputColor />
			</div>
		</form>
	);
}
