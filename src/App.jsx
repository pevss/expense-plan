import Section from "./components/Section/Section";
import Card from "./components/Card/Card";
import Overview from "./components/Overview/Overview";
import FormAddMovementType from "./components/FormAddMovementType/FormAddMovementType";
import MovementTypeList from "./components/MovementTypeList/MovementTypeList";
import FormAddMovement from "./components/FormAddMovement/FormAddMovement";
import MovementList from "./components/MovementList/MovementList";

import "./App.css";

export default function App() {
	return (
		<div className="app">
			<aside style={{ height: "100%" }}>
				<Section title="Overview">
					<div className="overview-container">
						<Card label="Current balance:">
							<Overview value={0} isNeutral={true} />
						</Card>
						<div className="overview-details">
							<Card label="Earned:">
								<Overview value={0} />
							</Card>
							<Card label="Spent:">
								<Overview value={0} />
							</Card>
						</div>
					</div>
				</Section>

				<Section title="Movement types" shouldStrech={true}>
					<Card label="Add new movement type:">
						<FormAddMovementType />
					</Card>
					<Card label="Your movement types:" shouldStrech={true}>
						<MovementTypeList movementTypes={[]} />
					</Card>
				</Section>
			</aside>

			<main>
				<Section title="Movements" shouldStrech={true}>
					<Card label="Add new movement: ">
						<FormAddMovement />
					</Card>
					<Card label="Your movements: " shouldStrech={true}>
						<MovementList movements={[]} />
					</Card>
				</Section>
			</main>
		</div>
	);
}
