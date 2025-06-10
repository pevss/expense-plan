import "./Month.css";

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

export default function Month({ year, month, selectedDate, onSelectDate }) {
	const isSelected = selectedDate.month === month && selectedDate.year === year;

	return (
		<li
			className={`month ${isSelected ? "selected" : ""}`}
			data-year={year}
			data-month={month}
			onClick={(e) => {
				onSelectDate({
					year: +e.target.dataset.year,
					month: +e.target.dataset.month,
				});
			}}
		>
			<span>{year}</span>
			<h1>{months[month]}</h1>
		</li>
	);
}
