import { AppWalletProvider } from '@/components/auth/unified-wallet-provider'
import { Header } from '@/components/common/header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tapestry template',
  description: 'Create your first Tapestry protocol app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWalletProvider>
          <Header />
          <div className="max-w-6xl mx-auto pt-12">{children}</div>
        </AppWalletProvider>
      </body>
    </html>
  )
}
