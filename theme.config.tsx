import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Pulsar Docs</span>,
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
  }
}

export default config
