import "./InputColor.css";

export default function InputColor({ value, onChange }) {
	return (
		<input
			className="input-color"
			type="color"
			value={value}
			onChange={onChange}
		/>
	);
}
