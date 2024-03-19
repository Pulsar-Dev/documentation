import Link from '@docusaurus/Link';

export default function Argument({type, name, defaultValue, children}) {
	return (<>
		<h3>
			<Link
				href={`https://wiki.facepunch.com/gmod/${type}`} target="_blank"
				className="monospaced"
				style={{
					fontSize: "1rem",

				}}
			>
				{type}
			</Link>
			{` ${name}`}
			{defaultValue && (<span
				style={{
					fontSize: "1rem", color: "var(--code-defaultvalue-color)",
				}}
			>
				{` = ${defaultValue}`}
			</span>)}
		</h3>
		<p
			style={{
				marginTop: "-1rem",
			}}
		>
			{children}
		</p>
	</>);
}