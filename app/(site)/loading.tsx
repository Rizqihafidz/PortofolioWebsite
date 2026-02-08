export default function SiteLoading() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            {/* Logo Pulse */}
            <div className="size-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/30 animate-pulse mb-8">
                <span className="material-symbols-outlined text-3xl">terminal</span>
            </div>

            {/* Skeleton Content */}
            <div className="w-full max-w-md px-6 space-y-6">
                <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded-lg animate-pulse" />
                <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-3/4 animate-pulse" />
                <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/2 animate-pulse" />
            </div>

            {/* Loading Text */}
            <div className="mt-12 flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <span className="text-sm font-medium">Loading...</span>
            </div>
        </div>
    )
}
