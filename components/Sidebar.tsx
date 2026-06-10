'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navigation } from '@/lib/nav'

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 shrink-0 border-r border-gray-200 bg-white sticky overflow-y-auto flex flex-col" style={{ top: 60, height: 'calc(100vh - 60px)' }}>
      <nav className="flex-1 px-3 py-4 space-y-5">
        {navigation.map((group) => (
          <div key={group.title}>
            <h3 className="px-3 mb-1 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
              {group.title}
            </h3>
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const href = `/docs/${item.slug}`
                const isActive = pathname === href
                return (
                  <li key={item.slug}>
                    <Link
                      href={href}
                      className={`block px-3 py-1.5 rounded-md text-sm transition-colors ${
                        isActive
                          ? 'bg-indigo-50 text-indigo-700 font-medium'
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
        ))}
      </nav>

    </aside>
  )
}
