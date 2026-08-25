import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting started',
      collapsed: false,
      items: ['intro', 'auth', 'scope', 'headers', 'errors', 'pagination'],
    },
    {
      type: 'category',
      label: 'AD Mode',
      collapsed: false,
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
      collapsed: false,
      items: ['db-databases', 'db-users', 'db-tables', 'db-agents', 'db-connections'],
    },
    {
      type: 'category',
      label: 'Radius Mode',
      collapsed: false,
      items: ['rad-onboarding', 'rad-devices', 'rad-vendors'],
    },
    {
      type: 'category',
      label: 'API conventions',
      collapsed: false,
      items: ['conv-request', 'conv-response', 'conv-status', 'conv-trouble'],
    },
  ],
};

export default sidebars;
