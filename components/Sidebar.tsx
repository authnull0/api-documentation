'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Home, ChevronDown, Rocket, Code2, FileText, type LucideIcon } from 'lucide-react'
import { navigation } from '@/lib/nav'

const GROUP_ICONS: Record<string, LucideIcon> = {
  'Getting Started': Rocket,
  'API Reference': Code2,
  Reference: FileText,
}

export function Sidebar() {
  const pathname = usePathname()
  const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>({})

  return (
    <aside className="w-64 shrink-0 border-r border-gray-200 bg-white sticky overflow-y-auto flex flex-col" style={{ top: 60, height: 'calc(100vh - 60px)' }}>
      <nav className="flex-1 py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 pl-0 pr-3 py-2.5 mb-3 rounded-md text-[15px] font-medium text-gray-900 hover:bg-gray-50 transition-colors"
        >
          <Home size={17} className="text-gray-500 shrink-0" />
          Documentation Home
        </Link>

        <div className="space-y-1">
          {navigation.map((group) => {
            const GroupIcon = GROUP_ICONS[group.title] ?? FileText
            const isCollapsed = collapsedGroups[group.title]
            return (
              <div key={group.title} className="pt-3 border-t border-gray-100 first:border-t-0 first:pt-0">
                <button
                  type="button"
                  onClick={() => setCollapsedGroups((c) => ({ ...c, [group.title]: !c[group.title] }))}
                  aria-expanded={!isCollapsed}
                  className="w-full flex items-center gap-2.5 pl-0 pr-3 py-2 rounded-md text-[15px] font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  <GroupIcon size={17} className="text-gray-500 shrink-0" />
                  <span className="flex-1 text-left">{group.title}</span>
                  <ChevronDown
                    size={16}
                    className={`text-gray-400 shrink-0 transition-transform ${isCollapsed ? '-rotate-90' : ''}`}
                  />
                </button>

                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                  style={{ gridTemplateRows: isCollapsed ? '0fr' : '1fr' }}
                >
                  <div className="overflow-hidden">
                    <ul className="mt-0.5 space-y-0.5">
                      {group.items.map((item) => {
                        const href = `/docs/${item.slug}`
                        const isActive = pathname === href
                        return (
                          <li key={item.slug}>
                            <Link
                              href={href}
                              className={`block pl-8 pr-3 py-2.5 rounded-md text-[15px] transition-colors ${
                                isActive
                                  ? 'bg-gray-100 text-gray-900 font-semibold'
                                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                              }`}
                            >
                              {item.title}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </nav>
    </aside>
  )
}
