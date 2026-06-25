'use client'

import React from 'react'
import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Coach Base AI - Premium Personal Training Platform',
  description: 'AI-powered personal training platform for coaches and fitness enthusiasts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark text-white">
        {children}
      </body>
    </html>
  )
}
