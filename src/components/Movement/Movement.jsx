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
	movement: { id, date, amount, description, movementType },
}) {
	const formatedAmount = currencyFormatter.format(amount);
	const formatedDate = dateFormatter.format(date);

	return (
		<li className="movement">
			<p>
				{movementType.type === "income" ? "+ " : "- "}
				{formatedAmount}
			</p>
			<MovementTypeLabel mainColor={movementType.color}>
				{movementType.description}
			</MovementTypeLabel>
			<p>
				{formatedDate} - {description}
			</p>
			<Button type="secondary">Lixo</Button>
		</li>
	);
}
