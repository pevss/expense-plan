import InputChar from "../inputs/InputChar/InputChar";
import InputSelect from "../inputs/InputSelect/InputSelect";
import Button from "../Button/Button";

import "./FormAddMovement.css";

export default function FormAddMovement() {
	return (
		<form className="form-add-movement">
			<InputChar min={0} max={99999} type="number" placeholder="Amount" />
			<InputChar type="text" placeholder="Short description" />
			<InputSelect
				value="_DEFAULT-SELECT-OPTION_"
				placeholder="Select the movement type"
				options={[
					{ id: 123, description: "teste", value: "teste" },
					{ id: 1234, description: "teste2", value: "teste2" },
				]}
			/>
			<Button type="primary">{"->"}</Button>
		</form>
	);
}
