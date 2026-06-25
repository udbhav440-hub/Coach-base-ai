'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setIsLoggedIn(!!session)
      setLoading(false)
    }
    checkAuth()
  }, [])

  if (loading) {
    return <div className="min-h-screen bg-dark flex items-center justify-center">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-primary/5 to-dark">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-primary/20">
        <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Coach Base AI
        </div>
        <div className="flex gap-4">
          {isLoggedIn ? (
            <>
              <Link href="/dashboard" className="px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 transition">
                Dashboard
              </Link>
              <Link href="/auth/logout" className="px-4 py-2 rounded-lg border border-primary hover:bg-primary/10 transition">
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link href="/auth/login" className="px-4 py-2 rounded-lg border border-primary hover:bg-primary/10 transition">
                Login
              </Link>
              <Link href="/auth/signup" className="px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 transition">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          The Future of Personal Training
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          AI-powered workout and nutrition planning. Manage your clients with ease. 
          Track progress. Automate follow-ups. Scale your coaching business.
        </p>
        <div className="flex gap-4 justify-center">
          {!isLoggedIn && (
            <>
              <Link href="/auth/signup?type=trainer" className="px-8 py-3 rounded-lg bg-gradient-primary hover:opacity-90 transition font-semibold">
                I'm a Trainer
              </Link>
              <Link href="/auth/signup?type=client" className="px-8 py-3 rounded-lg border border-primary hover:bg-primary/10 transition font-semibold">
                I'm a Client
              </Link>
            </>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose Coach Base AI?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'AI Workout Plans',
              description: 'Generate personalized workout plans powered by AI in seconds',
              icon: '💪',
            },
            {
              title: 'AI Nutrition Plans',
              description: 'Custom meal plans with macro calculations and recipes',
              icon: '🥗',
            },
            {
              title: 'Progress Tracking',
              description: 'Photos, measurements, and analytics in one place',
              icon: '📊',
            },
            {
              title: 'Automated Follow-ups',
              description: 'WhatsApp and Instagram content generated automatically',
              icon: '📱',
            },
            {
              title: 'PDF Export',
              description: 'Download plans as professional PDFs',
              icon: '📄',
            },
            {
              title: 'Client CRM',
              description: 'Manage all your clients in one centralized dashboard',
              icon: '👥',
            },
          ].map((feature, i) => (
            <div key={i} className="p-6 rounded-xl bg-white/5 border border-primary/20 hover:border-primary/50 transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Simple Pricing</h2>
        <div className="p-8 rounded-xl bg-gradient-primary/10 border border-primary/30">
          <h3 className="text-2xl font-bold mb-4">Professional Plan</h3>
          <div className="text-5xl font-bold mb-2">₹10,000<span className="text-lg text-gray-400">/month</span></div>
          <p className="text-gray-300 mb-8">Everything you need to manage up to 50 clients</p>
          <ul className="space-y-3 mb-8">
            {[
              'Unlimited workout plans',
              'Unlimited nutrition plans',
              'AI-powered content generation',
              'WhatsApp automation',
              'Client analytics dashboard',
              'PDF export',
              'Priority support',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="text-primary">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <Link href="/auth/signup?type=trainer" className="w-full px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 transition font-semibold text-center">
            Start Free Trial
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/20 py-8 text-center text-gray-400">
        <p>&copy; 2024 Coach Base AI. All rights reserved. | Built for premium fitness coaching</p>
      </footer>
    </div>
  )
}
