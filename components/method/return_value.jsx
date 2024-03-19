import Link from '@docusaurus/Link';

export default function ReturnValue({type, name, children}) {
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
			{name && ` ${name}`}
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