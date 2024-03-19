import { themes as prismThemes } from 'prism-react-renderer';

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
					title: 'Docs',
					items: [
						{
							label: 'Tutorial',
							to: '/docs/intro',
						},
					],
				},
				{
					title: 'Community',
					items: [
						{
							label: 'Stack Overflow',
							href: 'https://stackoverflow.com/questions/tagged/docusaurus',
						},
						{
							label: 'Discord',
							href: 'https://discordapp.com/invite/docusaurus',
						},
						{
							label: 'Twitter',
							href: 'https://twitter.com/docusaurus',
						},
					],
				},
				{
					title: 'More',
					items: [
						{
							label: 'Blog',
							to: '/blog',
						},
						{
							label: 'GitHub',
							href: 'https://github.com/facebook/docusaurus',
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
