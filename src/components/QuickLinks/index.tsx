import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import type {LucideIcon} from 'lucide-react';

export interface QuickLinkItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  to: string;
}

export default function QuickLinks({items}: {items: QuickLinkItem[]}): ReactNode {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(238px, 1fr))',
        gap: 12,
        margin: '6px 0 24px',
      }}>
      {items.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          style={{
            display: 'block',
            padding: '16px 18px',
            border: '1px solid var(--ifm-color-emphasis-300)',
            borderRadius: 11,
            color: 'inherit',
            textDecoration: 'none',
          }}>
          <div style={{display: 'flex', alignItems: 'center', gap: 9, marginBottom: 6}}>
            <item.icon size={15} strokeWidth={1.7} color="var(--ifm-color-primary)" />
            <span style={{fontSize: 15, fontWeight: 600, letterSpacing: '-0.01em'}}>{item.title}</span>
          </div>
          <div style={{fontSize: '13.5px', lineHeight: 1.55, color: 'var(--ifm-color-emphasis-700)'}}>
            {item.desc}
          </div>
        </Link>
      ))}
    </div>
  );
}
