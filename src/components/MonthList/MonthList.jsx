import Month from "../Month/Month";

import "./MonthList.css";

const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

export default function MonthList({ movementsDates }) {
	return (
		<ul className="month-list">
			{movementsDates.map((date) => {
				const isDateCurrent =
					date.year === currentYear && date.month === currentMonth;

				return (
					<Month
						month={date.month}
						year={date.year}
						isSelected={isDateCurrent}
					/>
				);
			})}
		</ul>
	);
}
