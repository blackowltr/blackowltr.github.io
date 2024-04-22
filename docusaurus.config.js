const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'BlackOwl',
  tagline: 'Difficult problems require novel solutions.',
  url: 'https://github.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'blackowltr', // Usually your GitHub org/user name.
  projectName: 'blackowltr.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/blackowltr/blackowltr.github.io/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/blackowltr/blackowltr.github.io/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'BlackOwl',
      logo: {
        alt: 'services',
        src: 'img/logo.svg',
      },
      items: [
        { to: 'https://medium.com/@black-owl', label: 'Blog', position: 'right' },
        {
          type: 'doc',
          docId: 'intro',
          position: 'right',
          label: 'About me',
        },
        {
          href: 'https://github.com/blackowltr',
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
              label: 'Services',
              to: '/docs/category/testnet',
            },
            {
              label: 'Explorer',
              to: 'https://explorer.blackowl.tech',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/blackowltr',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/Egx5RK9NXm',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/brsbtc',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'https://medium.com/@black-owl',
            },
            {
              label: 'Linktree',
              to: 'https://linktr.ee/blackowltr',
            },
          ],
        },
      ],
      copyright: `Copyright © 2024 BlackOwl 🦉`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
});
