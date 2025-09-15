import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { QueryProvider } from '@/application/providers/QueryProvider'
import { TelegramProvider } from '@/application/providers/TelegramProvider'
import { Navbar } from '@/widgets/Navbar'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: [ 'latin' ],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: [ 'latin' ],
})

export const metadata: Metadata = {
  title: 'Автомойка',
  description: 'Автомойка',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          background: '#f3f4f6',
          color: '#171717',
          margin: 0,
          padding: 0,
          minHeight: '100vh',
        }}
      >
        <QueryProvider>
          <TelegramProvider>
            {children}
            <Navbar />
          </TelegramProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
