'use client'

import { useTheme } from '@/context/ThemeContext'

export default function ThemeToggle() {
    const { isDark, toggle } = useTheme()

    return (
        <button
            onClick={toggle}
            className="size-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            <span className="material-symbols-outlined text-xl">
                {isDark ? 'light_mode' : 'dark_mode'}
            </span>
        </button>
    )
}
