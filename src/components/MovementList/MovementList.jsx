import Movement from "../Movement/Movement";
import EmptyListMessage from "../EmptyListMessage/EmptyListMessage";

import "./MovementList.css";

export default function MovementList({ movements, movementTypes, onDelete }) {
	if (!movements.length) {
		return <EmptyListMessage />;
	}

	return (
		<ul className="movement-list">
			{movements.map((movement) => (
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
