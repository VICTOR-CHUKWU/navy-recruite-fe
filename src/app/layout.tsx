import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NewNav } from '@/components/NewNav'
import { LayoutProvider } from './LayoutProvider'
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
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body className={inter.className}>
        <NewNav />
        <LayoutProvider>
          {children}
        </LayoutProvider>
      </body>
    </html>
  )
}
