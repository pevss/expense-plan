import { Trash } from "@phosphor-icons/react";

import MovementTypeLabel from "../MovementTypeLabel/MovementTypeLabel";
import Button from "../Button/Button";

import "./Movement.css";

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
	style: "currency",
	currency: "BRL",
});
const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
	day: "2-digit",
	month: "2-digit",
	year: "numeric",
});

export default function Movement({
	movement: { id, date, amount, description, movementTypeId },
	movementTypes,
	onDelete,
}) {
	const movementType = movementTypes.find(
		(movementType) => movementType.id === movementTypeId
	);

	const formatedAmount = currencyFormatter.format(amount);
	const formatedDate = dateFormatter.format(new Date(date));

	return (
		<li className="movement">
			<p
				className="amount"
				style={{
					color:
						movementType.type === "income"
							? "var(--color-500)"
							: "var(--color-outcome)",
				}}
			>
				{movementType.type === "income" ? "+ " : "- "}
				{formatedAmount}
			</p>
			<MovementTypeLabel
				mainColor={movementType.mainColor}
				description={movementType.description}
			/>
			<p>
				{formatedDate} - {description}
			</p>
			<Button type="secondary" onClick={() => onDelete(id)}>
				<Trash size={15} color="var(--color-600)" />
			</Button>
		</li>
	);
}
