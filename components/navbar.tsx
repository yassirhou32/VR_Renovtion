'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Nos Services', href: '/services' },
    { label: 'Nos Réalisations', href: '/realisations' },
    { label: 'À propos', href: '/a-propos' },
  ]

  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-slate-200/80 bg-gradient-to-b from-white via-white to-slate-50/90 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
      <div className="max-w-6xl mx-auto w-full px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="VR Harmonie"
            width={96}
            height={108}
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-wide text-slate-900">VR Harmonie</span>
            <span className="text-[11px] tracking-[0.18em] uppercase text-slate-500">
              Toiture • Façades • Patrimoine
            </span>
          </div>
        </Link>

        {/* Desktop Nav + CTA grouped on the right */}
        <div className="hidden md:flex items-center gap-8 ml-auto">
          <div className="flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium pb-0.5 border-b-2 transition-colors ${
                    isActive
                      ? 'text-slate-900 border-slate-900'
                      : 'text-slate-600 border-transparent hover:text-slate-900 hover:border-slate-300'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
          <Button
            asChild
            className="rounded-full px-6 text-sm font-semibold shadow-[0_12px_30px_rgba(15,23,42,0.35)] bg-slate-900 hover:bg-slate-800 text-white"
          >
            <Link href="/contact">Contact</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white shadow-sm border border-slate-200"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-72 bg-gradient-to-b from-white via-slate-50 to-white border-l border-slate-200 px-6 py-6"
          >
            <div className="mt-6 flex flex-col gap-6">
              <div className="space-y-1">
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-400">
                  Navigation
                </p>
              </div>

              <nav className="flex flex-col gap-4">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-slate-900'
                          : 'text-slate-700 hover:text-slate-900'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </nav>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

              <div className="space-y-3">
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-400">
                  Contact
                </p>
                <Button
                  asChild
                  className="bg-slate-900 hover:bg-slate-800 text-white rounded-full w-full text-sm font-semibold shadow-[0_14px_40px_rgba(15,23,42,0.5)]"
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Demandez un devis
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
