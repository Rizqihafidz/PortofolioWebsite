import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingActionButton from '@/components/ui/FloatingActionButton'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

export const metadata: Metadata = {
    title: {
        default: 'Rizqi Maulana Hafidz | Portfolio',
        template: '%s | Rizqi M.H.',
    },
    description: 'Game Developer & Designer Portfolio - Unity, C#, Game Design',
    keywords: ['Game Developer', 'Game Designer', 'Unity', 'C#', 'Portfolio'],
    authors: [{ name: 'Rizqi Maulana Hafidz' }],
    openGraph: {
        title: 'Rizqi Maulana Hafidz | Portfolio',
        description: 'Game Developer & Designer Portfolio',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={inter.variable} suppressHydrationWarning>
            <head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
                />
            </head>
            <body className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-300 min-h-screen font-display">
                <ThemeProvider>
                    <Navbar />
                    <main className="pt-20">{children}</main>
                    <Footer />
                    <FloatingActionButton />
                </ThemeProvider>
            </body>
        </html>
    )
}
