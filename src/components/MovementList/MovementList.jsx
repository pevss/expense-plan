import Movement from "../Movement/Movement";
import EmptyListMessage from "../EmptyListMessage/EmptyListMessage";

import "./MovementList.css";

export default function MovementList({ movements }) {
	if (!movements.length) {
		return <EmptyListMessage />;
	}

	return (
		<ul>
			{movements.map((movement) => (
				<Movement key={movement.id} movement={movement} />
			))}
		</ul>
	);
}
