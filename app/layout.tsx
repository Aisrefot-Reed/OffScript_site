"use client"

import './globals.css'
import AnimatedCursor from "@/components/animated-cursor"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <AnimatedCursor />
        {children}
      </body>
    </html>
  )
}
