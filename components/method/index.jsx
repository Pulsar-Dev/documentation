import Link from '@docusaurus/Link';
import React from 'react';
import Realm from "../realm";

function LinkButton({href, icon, title, ...props}) {
	return (<Link
			href={href} target="_blank"
			className={"method-button"}
			{...props}
		>
			<span
				style={{
					display: "flex", fontWeight: 600, alignItems: "flex-start", gap: "0.25rem", padding: "0.75rem 1rem",
				}}
			>
				{icon}
				{title}
			</span>
		</Link>);
}

export default function Method({name, realm, args, returns, repositoryUrl, declaration, internal = false, children}) {
	const listValues = (values, typesOnly) => values.map((val, idx) => {
		const {type, name, defaultValue} = val.props;
		return (<>
				<Link className="" href={`https://wiki.facepunch.com/gmod/${type}`} target="_blank">
					{type}
				</Link>
				{typesOnly ? "" : ` ${name ?? ""}${defaultValue ? ` = ${defaultValue}` : ""}`}
				{`${idx === values.length - 1 ? "" : ", "}`}
			</>);
	});

	return (<>
			<div className="method-function">
				<Realm type={realm}/>
				<div className="method-function-text">
					{(returns && returns.length > 0) && listValues(returns, true)}
					{` ${name}(`}
					{(args && args.length > 0) && (<>
							{" "}
							{listValues(args)}
							{" "}
						</>)}
					{")"}
				</div>
			</div>

			{repositoryUrl && (<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "flex-end",
						gap: ".5rem",
						marginTop: "1rem",
					}}
				>
					<LinkButton
						href={`${repositoryUrl}/search?utf8=%E2%9C%93&q=${name}`}
						title="Search GitHub"
						icon={<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							style={{
								margin: "auto", height: "1rem", fill: "currentColor",
							}}
						>
							<path
								d="M368 208A160 160 0 1 0 48 208a160 160 0 1 0 320 0zM337.1 371.1C301.7 399.2 256.8 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 48.8-16.8 93.7-44.9 129.1L505 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L337.1 371.1z"/>
						</svg>}
					/>
					{declaration && (<LinkButton
							href={`${repositoryUrl}/blob/master/${declaration}`}
							title="View Source"
							icon={<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
								style={{
									margin: "auto", height: "1rem", fill: "currentColor",
								}}
							>
								<path
									d="M80 112a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm80-32c0 35.8-23.5 66.1-56 76.3V256c20.1-15.1 45-24 72-24h96c39.8 0 72-32.2 72-72v-3.7c-32.5-10.2-56-40.5-56-76.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 35.8-23.5 66.1-56 76.3V160c0 66.3-53.7 120-120 120H176c-39.8 0-72 32.2-72 72v3.7c32.5 10.2 56 40.5 56 76.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-35.8 23.5-66.1 56-76.3V352 156.3C23.5 146.1 0 115.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm240 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM80 464a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/>
							</svg>}
						/>)}
				</div>)}
			{children && (<>
					<h2>Description</h2>
					<hr/>
					{children}
				</>)}
			{(args && args.length > 0) && (<>
					<h2>Arguments</h2>
					<hr/>
					<div
						style={{
							marginBottom: "3rem", paddingLeft: "1.5rem",
						}}
					>
						{args}
					</div>
				</>)}
			{(returns && returns.length > 0) > 0 && (<>
					<h2>Returns</h2>
					<hr/>
					<div
						style={{
							marginBottom: "3rem", paddingLeft: "1.5rem",
						}}
					>
						{returns}
					</div>
				</>)}
		</>);
}