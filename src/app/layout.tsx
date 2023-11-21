import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Nav } from '@/components/Nav'
import '@/styles/app.scss'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Navy Recruitment',
  description: 'to recruit new sailors into the milliraty',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}</body>
    </html>
  )
}
