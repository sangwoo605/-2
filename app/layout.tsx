"use client";

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/contexts/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '내 감정일기 - 마음의 위로를 위한 공간',
  description: '감정을 기록하고 AI와 함께 마음을 정리하는 감정일기 서비스',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <AuthProvider>
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  )
} 