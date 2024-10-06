import "./Section.css";

export default function Section({ title, shouldStrech, children }) {
	return (
		<section
			className="section"
			style={{ ...(shouldStrech && { height: "100%" }) }}
		>
			<h2>{title}</h2>
			{children}
		</section>
	);
}
