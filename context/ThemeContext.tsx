'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { ThemeContextType } from '@/types'

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const STORAGE_KEY = 'portfolio-theme'

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [isDark, setIsDark] = useState<boolean>(true)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored !== null) {
            setIsDark(stored === 'dark')
        }
    }, [])

    useEffect(() => {
        if (!mounted) return

        const root = document.documentElement
        if (isDark) {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
        localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light')
    }, [isDark, mounted])

    const toggle = () => {
        if (mounted) {
            setIsDark((prev) => !prev)
        }
    }

    // Always provide context, but toggle only works when mounted
    return (
        <ThemeContext.Provider value={{ isDark, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(): ThemeContextType {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}
