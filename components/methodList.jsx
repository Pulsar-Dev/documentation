import Link from '@docusaurus/Link';

const listTypes = (types) => types.map((type, idx) => {
	return (
		<>
			<Link className="monospaced" href={`https://wiki.facepunch.com/gmod/${type}`} target="_blank">
				{type}
			</Link>
			{`${idx === types.length - 1 ? "" : ", "}`}
		</>
	);
});

export default function MethodList({ methods }) {
	return (
		<div
			style={{
				marginTop: "0.5rem",
				marginBottom: "3rem",
				paddingLeft: "1.5rem",
			}}
		>
			{
				methods.map((method) => (
					<div style={{
						marginTop: "1rem"
					}}
					>
						<code className="text-[.9em] min-h-5 align-middle" style={{
							fontSize: "1em",
							verticalAlign: "middle",
							paddingLeft: "0.25rem",
							paddingRight: "0.25rem",
						}}>
							{(method.returns && method.returns.length > 0) && listTypes(method.returns, true)}
							{" "}
							{method.parent}
							{
								method.href ? (
									<>
										<Link className="" href={method.href}>
											{method.name}
										</Link>
										{"("}
									</>
								) : (`${method.name}(`)
							}
							{
								(method.args && method.args.length > 0) && (
									<>
										{" "}
										{listTypes(method.args)}
										{" "}
									</>
								)
							}
							{")"}
						</code>
						<p>
							{method.description}
						</p>
					</div>
				))
			}
		</div>
	);
}