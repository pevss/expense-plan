import "./InputChar.css";

export default function InputChar({
	placeholder,
	type,
	value,
	onChange,
	min,
	max,
}) {
	return (
		<input
			className="input-char"
			placeholder={placeholder}
			type={type}
			value={value}
			onChange={onChange}
			min={min}
			max={max}
		/>
	);
}
