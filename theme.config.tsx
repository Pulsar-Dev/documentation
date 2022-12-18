import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <img src="https://raw.githubusercontent.com/Pulsar-Dev/documentation/main/public/pulsar.png" alt="logo" width="50" height="50"/>
      <span style={{ marginLeft: '.4em', fontWeight: 500 }}>
        Pulsar Docs
      </span>
    </>
  ),
  logoLink: "https://raw.githubusercontent.com/Pulsar-Dev/documentation/main/public/pulsar.png",
  project: {
    link: 'https://github.com/Pulsar-Dev/documentation',
  },
  chat: {
    link: 'https://discord.gg/2ZQv7dVmtJ',
  },
  docsRepositoryBase: 'https://github.com/Pulsar-Dev/documentation',
  footer: {
    text: 'Pulsar Docs',
  },
  sidebar: {
    defaultMenuCollapseLevel: 0,
  },
  head: () => {
    const { asPath } = useRouter()
    const { frontMatter } = useConfig()
    return <>
      <meta property="og:url" content={`https://docs.lythium.vip${asPath}`} />
      <meta property="og:title" content={frontMatter.title || 'Pulsar Docs'} />
      <meta property="og:description" content={frontMatter.description} />
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
