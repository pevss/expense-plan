import Month from "../Month/Month";

import "./MonthList.css";

export default function MonthList({
	movementsDates,
	selectedDate,
	onSelectDate,
}) {
	return (
		<ul className="month-list">
			{movementsDates.map((date) => {
				return (
					<Month
						month={date.month}
						year={date.year}
						selectedDate={selectedDate}
						onSelectDate={onSelectDate}
					/>
				);
			})}
		</ul>
	);
}
