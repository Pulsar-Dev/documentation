import React from 'react'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import Link from "next/link";

const config = {
  logo: <strong>Pulsar Docs</strong>,
  project: {
    link: 'https://github.com/Pulsar-Dev/documentation',
  },
  chat: {
    link: 'https://discord.gg/2ZQv7dVmtJ',
  },
  docsRepositoryBase: 'https://github.com/Pulsar-Dev/documentation/docs/tree/master',
  editLink: {
    text: "Edit this page →"
  },
  feedback: {
    content: "Create an issue →",
    labels: "feedback"
  },
  banner: {
    dismissible: true,
    key: "indev",
    text: "⚠️ This site is under development, some artefacts may be missing or incomplete."
  },
  footer: {
    text: (
        <span>
            <Link href="https://mit-license.org/" target="_blank">
			    MIT License
			</Link>
            {` – © ${new Date().getFullYear()} `}
            <Link href="https://lythium.dev" target="_blank">
			    Lythium
            </Link>
        </span>
    )
  },
  sidebar: {
    defaultMenuCollapseLevel: 0,
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();

    const url = "https://docs.lythium.dev"
        + (defaultLocale === locale ? asPath : `/${locale}${asPath}`);
    const { frontMatter } = useConfig()
    return <>
      <meta property="og:url" content={`https://docs.lythium.vip${asPath}`} />
      <meta property="og:title" content={frontMatter.title || 'Pulsar Docs'} />
      <meta property="og:description" content={frontMatter.description} />
      <meta property="og:site_name" content="Pulsar Docs" />
      <meta property="og:locale" content={locale || "en_GB"} />
    </>
  },
  useNextSeoProps() {
    const { route } = useRouter()
    if (route !== '/') {
      return {
        titleTemplate: '%s – Pulsar Docs'
      }
    }
  },
  primaryHue: 190,

}

export default config
