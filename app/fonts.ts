import localFont from 'next/font/local'

export const dmSans = localFont({
  src: [
    { path: './fonts/dm-sans/DMSans-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/dm-sans/DMSans-italic.woff2', weight: '400', style: 'italic' },
    { path: './fonts/dm-sans/DMSans-normal.woff2', weight: '500', style: 'normal' },
    { path: './fonts/dm-sans/DMSans-italic.woff2', weight: '500', style: 'italic' },
    { path: './fonts/dm-sans/DMSans-normal.woff2', weight: '600', style: 'normal' },
    { path: './fonts/dm-sans/DMSans-normal.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-dm-sans',
  display: 'swap',
  preload: true,
})

export const jetbrainsMono = localFont({
  src: [
    { path: './fonts/jetbrains-mono/JetBrainsMono-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/jetbrains-mono/JetBrainsMono-normal.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})
