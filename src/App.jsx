import { useState } from "react";

import Section from "./components/Section/Section";
import Card from "./components/Card/Card";
import Overview from "./components/Overview/Overview";
import FormAddMovementType from "./components/FormAddMovementType/FormAddMovementType";
import MovementTypeList from "./components/MovementTypeList/MovementTypeList";
import FormAddMovement from "./components/FormAddMovement/FormAddMovement";
import MovementList from "./components/MovementList/MovementList";

import "./App.css";

const defaultMovementTypes = [
	{
		id: "98df3940-e51b-4f6c-b639-9f1a0516a03a",
		description: "Salary",
		mainColor: "#00AD62",
		type: "income",
	},
	{
		id: "2eefad16-c92d-4843-a68c-f87697930147",
		description: "Eating out",
		mainColor: "#C63F00",
		type: "outcome",
	},
	{
		id: "ed93ff09-4e4f-4e38-b7c0-770b4b37b84b",
		description: "Groceries",
		mainColor: "#4CD2FB",
		type: "outcome",
	},
	{
		id: "389b3fe8-8227-43a7-a77f-0533f15ded39",
		description: "Self care",
		mainColor: "#D70E47",
		type: "outcome",
	},
	{
		id: "f3ee3b5a-3be9-4173-97f4-2cc10cb13ff9",
		description: "Investing",
		mainColor: "#92ED00",
		type: "outcome",
	},
	{
		id: "838fa36b-63e2-47a7-a3b8-6e455083b513",
		description: "Dividends",
		mainColor: "#FEFE14",
		type: "income",
	},
	{
		id: "98202b28-7ecc-4834-b18b-1fb2cf14991b",
		description: "Freelance",
		mainColor: "#CE2DFF",
		type: "income",
	},
];

export default function App() {
	const [movements, setMovements] = useState([]);
	const [movementTypes, setMovementTypes] = useState(defaultMovementTypes);
	const [selectedMovementType, setSelectedMovementType] = useState(null);

	const filteredMovements = movements.filter((movement) =>
		selectedMovementType
			? movement.movementTypeId === selectedMovementType?.id
			: true
	);

	const { balance, earned, spent } = movements.reduce(
		(acc, movement) => {
			const movementType = movementTypes.find(
				(movementType) => movementType.id === movement.movementTypeId
			);

			if (movementType.type === "income") {
				acc.balance += movement.amount;
				acc.earned += movement.amount;
			} else {
				acc.balance -= movement.amount;
				acc.spent += movement.amount;
			}

			return acc;
		},
		{ balance: 0, earned: 0, spent: 0 }
	);

	const handleAddMovementType = function (newMovementType) {
		setMovementTypes((currMovementTypes) => [
			...currMovementTypes,
			newMovementType,
		]);
	};

	const handleSelectMovementType = function (movementTypeId) {
		const requestedMovementType = movementTypes.find(
			(movementType) => movementType.id === movementTypeId
		);

		setSelectedMovementType((currSelected) =>
			currSelected?.id === movementTypeId ? null : requestedMovementType
		);
	};

	const handleUpdateMovementType = function (updatedMovementType) {
		setMovementTypes((currMovementType) =>
			currMovementType.map((movementType) =>
				movementType.id === updatedMovementType.id
					? updatedMovementType
					: movementType
			)
		);
	};

	const handleAddNewMovement = function (newMovement) {
		setMovements((currMovements) => [...currMovements, newMovement]);
	};

	const handleDeleteMovement = function (movementId) {
		if (window.confirm("Are you sure you want to delete this movement?"))
			setMovements((currMovements) =>
				currMovements.filter((movement) => movement.id !== movementId)
			);
	};

	return (
		<div className="app">
			<aside style={{ height: "100%" }}>
				<Section title="Overview">
					<div className="overview-container">
						<Card label="Current balance:">
							<Overview
								value={balance < 0 ? 0 : balance}
								isNeutral={true}
							/>
						</Card>
						<div className="overview-details">
							<Card label="Earned:">
								<Overview value={earned} />
							</Card>
							<Card label="Spent:">
								<Overview value={-spent} />
							</Card>
						</div>
					</div>
				</Section>

				<Section title="Movement types" shouldStrech={true}>
					<Card label="Add new movement type:">
						<FormAddMovementType
							onAddMovementType={handleAddMovementType}
						/>
					</Card>
					<Card label="Your movement types:" shouldStrech={true}>
						<MovementTypeList
							movementTypes={movementTypes}
							selectedMovementType={selectedMovementType}
							onSelectMovementType={handleSelectMovementType}
							onUpdateMovementType={handleUpdateMovementType}
						/>
					</Card>
				</Section>
			</aside>

			<main>
				<Section title="Movements" shouldStrech={true}>
					<Card label="Add new movement: ">
						<FormAddMovement
							movementTypes={movementTypes}
							onAddNewMovement={handleAddNewMovement}
						/>
					</Card>
					<Card label="Your movements: " shouldStrech={true}>
						<MovementList
							movements={filteredMovements}
							movementTypes={movementTypes}
							onDelete={handleDeleteMovement}
						/>
					</Card>
				</Section>
			</main>
		</div>
	);
}
