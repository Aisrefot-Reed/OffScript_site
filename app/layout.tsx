import type { Metadata } from 'next'
import './globals.css'
import CursorWrapper from "@/components/cursor-wrapper"

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <CursorWrapper />
        {children}
      </body>
    </html>
  )
}
