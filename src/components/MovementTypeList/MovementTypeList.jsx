import MovementType from "../MovementType/MovementType";
import EmptyListMessage from "../EmptyListMessage/EmptyListMessage";

import "./MovementTypeList.css";

export default function MovementTypeList({ movementTypes }) {
	if (!movementTypes.length) {
		return <EmptyListMessage />;
	}

	return (
		<ul className="movement-type-list">
			{movementTypes.map((movementType) => (
				<MovementType
					key={movementType.id}
					movementType={movementType}
				/>
			))}
		</ul>
	);
}
