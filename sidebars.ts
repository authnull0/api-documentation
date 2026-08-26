import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'link',
      label: 'Documentation Home',
      href: '/docs/intro',
      className: 'sidebar-home-link sidebar-icon sidebar-icon--home',
    },
    {
      type: 'category',
      label: 'Getting started',
      collapsed: true,
      className: 'sidebar-icon sidebar-icon--start',
      items: ['intro', 'auth', 'scope', 'headers', 'errors', 'pagination'],
    },
    {
      type: 'category',
      label: 'AD Mode',
      collapsed: true,
      className: 'sidebar-icon sidebar-icon--ad',
      items: [
        'ad-domains',
        'ad-users',
        'ad-groups',
        'ad-policies',
        'ad-logs',
        'ad-enrollment',
        'ad-lockout',
      ],
    },
    {
      type: 'category',
      label: 'Database Mode',
      collapsed: true,
      className: 'sidebar-icon sidebar-icon--db',
      items: ['db-databases', 'db-users', 'db-tables', 'db-agents', 'db-connections'],
    },
    {
      type: 'category',
      label: 'Radius Mode',
      collapsed: true,
      className: 'sidebar-icon sidebar-icon--radius',
      items: ['rad-onboarding', 'rad-devices', 'rad-vendors'],
    },
    {
      type: 'category',
      label: 'API conventions',
      collapsed: true,
      className: 'sidebar-icon sidebar-icon--conv',
      items: ['conv-request', 'conv-response', 'conv-status', 'conv-trouble'],
    },
  ],
};

export default sidebars;
