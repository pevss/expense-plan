import { useState } from "react";

import InputChar from "../inputs/InputChar/InputChar";
import InputSelect from "../inputs/InputSelect/InputSelect";
import Button from "../Button/Button";

import "./FormAddMovement.css";

export default function FormAddMovement({ movementTypes, onAddNewMovement }) {
	const [amount, setAmount] = useState("");
	const [description, setDescription] = useState("");
	const [movementTypeId, setMovementTypeId] = useState(
		"_DEFAULT-SELECT-OPTION_"
	);

	const isSubmitable =
		amount > 0 &&
		description.length &&
		movementTypeId !== "_DEFAULT-SELECT-OPTION_";

	const newMovement = {
		id: crypto.randomUUID(),
		date: new Date().toISOString(),
		amount,
		description,
		movementTypeId,
	};

	const handleSubmit = function (e) {
		e.preventDefault();

		onAddNewMovement(newMovement);

		setAmount("");
		setDescription("");
		setMovementTypeId("_DEFAULT-SELECT-OPTION_");
	};

	return (
		<form className="form-add-movement" onSubmit={handleSubmit}>
			<InputChar
				min={0}
				max={99999}
				type="number"
				placeholder="Amount"
				value={amount}
				onChange={(e) =>
					setAmount((currAmount) =>
						//prettier-ignore
						+e.target.value > 99999 ? currAmount :
                        +e.target.value === 0 ? "" : +e.target.value
					)
				}
			/>
			<InputChar
				type="text"
				placeholder="Short description"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<InputSelect
				value={movementTypeId}
				placeholder="Select the movement type"
				options={movementTypes}
				onChange={(e) => setMovementTypeId(e.target.value)}
			/>
			<Button type="primary" isDisabled={!isSubmitable}>
				{"->"}
			</Button>
		</form>
	);
}
