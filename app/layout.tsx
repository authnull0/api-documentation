import type { Metadata } from 'next'
import './globals.css'
import { dmSans, jetbrainsMono } from './fonts'

export const metadata: Metadata = {
  title: 'AuthNull API Documentation',
  description: 'AuthNull API Documentation',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${jetbrainsMono.variable} bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  )
}
