import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'AuthNull API Documentation',
  tagline:
    'Integrate passwordless access and MFA across Active Directory, databases, and Radius network devices with our developer-first APIs.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://authnull0.github.io',
  baseUrl: '/',

  organizationName: 'authnull0',
  projectName: 'api-documentation',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com',
      rel: 'preconnect',
    },
    {
      href: 'https://fonts.gstatic.com',
      rel: 'preconnect',
      crossorigin: 'anonymous',
    },
    'https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=IBM+Plex+Mono:wght@400;500;600&display=swap',
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'AuthNull',
        src: 'img/authnull-logo.png',
      },
      items: [
        {
          href: 'https://authnull-website-v3.pages.dev/contact',
          label: 'Get in Touch',
          position: 'right',
          className: 'navbar-cta',
        },
      ],
    },
    // Footer is fully custom — see src/theme/Footer/index.tsx (brand tagline,
    // status dot, and the Privacy/Terms/Security bottom bar have no equivalent
    // in the footer config API), so no `footer` field is set here.
    prism: {
      theme: prismThemes.vsDark,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['http', 'python'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
