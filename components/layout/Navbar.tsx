'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from '@/components/ui/ThemeToggle'
import MaterialIcon from '@/components/ui/MaterialIcon'

const NAV_LINKS = [
    { label: 'Home', href: 'home' },
    { label: 'About', href: 'about' },
    { label: 'Skills', href: 'tech' },
    { label: 'Projects', href: 'projects' },
    { label: 'Contact', href: 'contact' },
]

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const pathname = usePathname()
    const isHome = pathname === '/'

    const getHref = (hash: string) => (isHome ? `#${hash}` : `/#${hash}`)

    const handleNavClick = () => setMobileOpen(false)

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 glass-nav bg-white/80 dark:bg-background-dark/80 border-b border-slate-200 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3" onClick={handleNavClick}>
                        <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
                            <MaterialIcon name="terminal" className="text-2xl" />
                        </div>
                        <span className="text-xl font-black tracking-tighter uppercase">Rizqi M.H.</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-10">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={getHref(link.href)}
                                className="text-sm font-semibold hover:text-primary transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-3">
                        <ThemeToggle />
                        <a
                            href="/assets/resume.pdf"
                            download
                            className="hidden lg:flex px-5 py-2.5 bg-primary hover:bg-primary/90 text-white text-sm font-bold rounded-lg transition-all shadow-lg shadow-primary/25"
                        >
                            Download CV
                        </a>
                        {/* Mobile hamburger */}
                        <button
                            className="md:hidden size-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                        >
                            <MaterialIcon name={mobileOpen ? 'close' : 'menu'} className="text-2xl" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {mobileOpen && (
                <div className="fixed inset-0 z-40 bg-background-light dark:bg-background-dark pt-20">
                    <div className="flex flex-col items-center gap-8 py-12">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={getHref(link.href)}
                                className="text-2xl font-bold hover:text-primary transition-colors"
                                onClick={handleNavClick}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="/assets/resume.pdf"
                            download
                            className="mt-4 px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25"
                            onClick={handleNavClick}
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            )}
        </>
    )
}
