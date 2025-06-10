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

export default function Month({ year, month, isSelected }) {
	return (
		<li className={`month ${isSelected ? "selected" : ""}`}>
			<span>{year}</span>
			<h1>{months[month]}</h1>
		</li>
	);
}
