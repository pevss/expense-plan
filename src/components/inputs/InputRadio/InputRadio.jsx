import "./InputRadio.css";

export default function InputRadio({
	groupName,
	currChecked,
	options,
	onChange,
}) {
	return (
		<div className="input-radio">
			{options.map((option, i) => (
				<div className="option" key={i}>
					<input
						type="radio"
						name={groupName}
						id={option.value}
						value={option.value}
						checked={currChecked === option.value}
						onChange={onChange}
					/>
					<label
						htmlFor={option.value}
						style={{
							color: option.color,
							backgroundColor: option.bgColor,
						}}
					>
						{option.label}
					</label>
				</div>
			))}
		</div>
	);
}
