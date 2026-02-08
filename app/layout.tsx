import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'

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
        {/* Blocking script to prevent dark mode flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('portfolio-theme');
                  if (theme === 'dark' || (!theme && true)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-300 min-h-screen font-display">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
