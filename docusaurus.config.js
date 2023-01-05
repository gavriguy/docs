const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Lyra✨",
  tagline: "An immutable, edge, full-text search engine",
  url: "https://docs.lyrasearch.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "/img/lyra.svg",
  deploymentBranch: "gh-pages",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: "nearform", // Usually your GitHub org/user name.
  // projectName: "lyra", // Usually your repo name.
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          sidebarCollapsible: false,
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "Lyra Logo",
          src: "/img/lyra.svg",
        },
        items: [
          {
            href: "https://github.com/nearform/lyra",
            position: "right",
            label: "GitHub",
            "aria-label": "Lyra on GitHub",
          },
          {
            href: "https://join.slack.com/t/lyrasearch/shared_invite/zt-1gzvj0mmt-yJhJ6pnrSGuwqPmPx9uO5Q",
            position: "right",
            label: "Slack",
            "aria-label": "Lyra on Slack",
          },
        ],
      },
      metadata: [
        {
          name: "og:image",
          content: "https://lyrasearch.io/images/og-image.png",
        },
        {
          name: "og:title",
          content: "Lyra, a fast, in-memory, typo-tolerant, full-text search engine written in TypeScript.",
        },
      ],
      footer: {
        style: "light",
        copyright: `Copyright © ${new Date().getFullYear()}\n Made by NearForm with ❤️`,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: ["@lyrasearch/plugin-docusaurus"],
};

module.exports = config;
