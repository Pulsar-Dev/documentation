const config = {
	title: 'pulsar/docs',
	tagline: 'Dinosaurs are cool',
	favicon: 'img/favicon.ico',

	url: 'https://docs.lythium.dev',
	baseUrl: '/',

	organizationName: 'Pulsar-Dev',
	projectName: 'documentation',

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			({
				docs: {
					sidebarPath: './sidebars.js',
					routeBasePath: '/',
					editUrl: 'https://github.com/Pulsar-Dev/documentation/tree/main/',

				},
				blog: false,
				theme: {
					customCss: './src/css/custom.css',
				},
			}),
		],
	],

	themeConfig: ({
		image: 'img/docusaurus-social-card.jpg',
		navbar: {
			title: 'pulsar/docs',
			logo: {
				alt: 'Pulsar Logo',
				src: 'img/logo.svg',
			},
			items: [
				{
					href: 'https://github.com/Pulsar-Dev/documentation',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Pulsar',
					items: [
						{
							label: 'GitHub',
							to: 'https://github.com/Pulsar-Dev',
						},
						{
							label: 'Docs',
							to: 'https://docs.lythium.dev',
						},
						{
							label: 'GmodStore',
							to: 'https://www.gmodstore.com/teams/pBHR7XxwQHWbTixsmqop3A',
						},
						{
							label: 'Discord',
							to: 'https://discord.gg/WjdWPeePBE',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Pulsar-Dev. Built with Docusaurus.`,
		},
		prism: {

			additionalLanguages: ['lua'],
		},
	})
};

export default config;
