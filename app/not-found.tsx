import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background-light dark:bg-background-dark px-6">
            {/* 404 Visual */}
            <div className="relative mb-8">
                <h1 className="text-[150px] sm:text-[200px] font-black tracking-tighter text-slate-200 dark:text-slate-800 leading-none select-none">
                    404
                </h1>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-6xl text-primary">
                        search_off
                    </span>
                </div>
            </div>

            {/* Message */}
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-2 text-center">
                Page Not Found
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-center max-w-md mb-8">
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>

            {/* Back Home Button */}
            <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-colors"
            >
                <span className="material-symbols-outlined text-xl">home</span>
                Back to Home
            </Link>
        </div>
    )
}
