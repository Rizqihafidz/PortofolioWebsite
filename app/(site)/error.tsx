'use client'

import { useEffect } from 'react'
import Link from 'next/link'

interface ErrorProps {
    error: Error & { digest?: string }
    reset: () => void
}

export default function SiteError({ error, reset }: ErrorProps) {
    useEffect(() => {
        // Log error to console in development
        console.error('Site error:', error)
    }, [error])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background-light dark:bg-background-dark px-6">
            {/* Error Icon */}
            <div className="size-20 bg-red-500/10 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-5xl text-red-500">error</span>
            </div>

            {/* Error Message */}
            <h1 className="text-3xl font-black tracking-tight mb-2">Something went wrong</h1>
            <p className="text-slate-600 dark:text-slate-400 text-center max-w-md mb-8">
                An unexpected error occurred. Please try again or go back to the home page.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 justify-center">
                <button
                    onClick={reset}
                    className="px-6 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-colors"
                >
                    Try Again
                </button>
                <Link
                    href="/"
                    className="px-6 py-3 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                >
                    Go Home
                </Link>
            </div>

            {/* Error Details (dev only) */}
            {process.env.NODE_ENV === 'development' && error.digest && (
                <p className="mt-8 text-xs text-slate-400 font-mono">Error ID: {error.digest}</p>
            )}
        </div>
    )
}
