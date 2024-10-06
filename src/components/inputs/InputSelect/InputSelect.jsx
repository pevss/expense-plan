import "./InputSelect.css";

export default function InputSelect({ value, options, placeholder, onChange }) {
	const finalOptions = [
		{ id: 0, value: "_DEFAULT-SELECT-OPTION_", description: placeholder },
		...options,
	];

	const isDefaultSelected = value === "_DEFAULT-SELECT-OPTION_";

	return (
		<select
			className="input-select"
			value={value}
			onChange={onChange}
			style={{
				...(isDefaultSelected && { color: "var(--color-border)" }),
			}}
		>
			{finalOptions.map((option) => (
				<option value={option.id} key={option.id}>
					{option.description}
				</option>
			))}
		</select>
	);
}
