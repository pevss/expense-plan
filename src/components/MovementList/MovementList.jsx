import Movement from "../Movement/Movement";
import EmptyListMessage from "../EmptyListMessage/EmptyListMessage";

import "./MovementList.css";

export default function MovementList({ movements, movementTypes, onDelete }) {
	const filteredMovements = movements.filter(
		(movement) => !movement.isDeleted
	);

	if (!filteredMovements.length) {
		return <EmptyListMessage />;
	}

	return (
		<ul className="movement-list">
			{filteredMovements.map((movement) => (
				<Movement
					key={movement.id}
					movement={movement}
					movementTypes={movementTypes}
					onDelete={onDelete}
				/>
			))}
		</ul>
	);
}
