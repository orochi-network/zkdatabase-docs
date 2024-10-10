import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./plugins/tailwind-config.cjs";

const config: Config = {
  title: "zkDatabase",
  tagline: "Orochi Network",
  favicon: "img/zklogo.svg",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Orochi Network", // Usually your GitHub org/user name.
  projectName: "zkDatabase", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [tailwindPlugin],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "zkDatabase",
      logo: {
        alt: "zkDatabase Logo",
        src: "img/zklogo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          label: "Document",
        },
        {
          to: "/contact",
          label: "Support",
        },
        {
          to: "https://docs.orochi.network/",
          label: "Cookbook",
        },
        {
          to: "https://orochi.network/blog",
          label: "Blog",
        },
        {
          to: "https://magical-caravel-b75.notion.site/Orochi-Network-Onboarding-Document-38c050910d2e4da4b92709bc867e790c",
          label: "Collab",
        },
        {
          // type: "html",
          position: "right",
          label: "Get started",
          to: "https://test-app.zkdatabase.org/",
          className: "button button--primary button--lg text-white",
          style: { color: "white" },
        },
      ],
    },
    footer: {
      links: [
        {
          title: "DEVELOPERS",
          items: [
            {
              label: "Homepage",
              to: "/docs/intro",
            },
            {
              label: "Github",
              href: "https://github.com/orochi-network/zkDatabase",
            },
            {
              label: "Cookbook",
              to: "https://docs.orochi.network/",
            },
            {
              label: "Get started",
              to: "https://test-app.zkdatabase.org",
            },
          ],
        },
        {
          title: "ECOSYSTEM",
          items: [
            {
              label: "Explore",
              href: "https://orochi.network/about",
            },
            {
              label: "Collab",
              href: "https://orochi.network/ecosystem",
            },
          ],
        },
        {
          title: "RESOURCE",
          items: [
            {
              label: "Blog",
              href: "https://orochi.network/blog",
            },
            {
              label: "o1js",
              href: "https://www.npmjs.com/package/zkdb",
            },
            {
              label: "MIPs",
              href: "https://forums.minaprotocol.com/t/draft-mina-data-availability-layer/6150",
            },
            {
              label: "RamenPasta",
              href: "https://eprint.iacr.org/2024/336",
            },
          ],
        },
      ],
      logo: {
        alt: "zkDatabase Logo",
        src: "img/orochiLogo.svg",
        // href: "https://orochi.network/",
        srcDark: "img/orochiLogoDark.svg",
        width: 200,
      },
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
