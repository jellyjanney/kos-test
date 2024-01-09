import type { Metadata } from 'next'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './src/css/tailwind.css'
import './src/css/main.css'

export const metadata: Metadata = {
  title: 'Frontend Testing | KOS Design',
  description: 'This is testing program for Frontend dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
