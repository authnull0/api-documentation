import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['introduction', 'installation'],
    },
    {
      type: 'category',
      label: 'API Reference',
      collapsed: false,
      items: [
        'pam',
        'endpoint-management',
        'endpoint-group-management',
        'endpoint-user-management',
        'authnull-agent',
        'ad-agent',
        'active-directory',
        'csv-agent',
        'decentralized-identities',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: false,
      items: ['errors'],
    },
  ],
};

export default sidebars;
