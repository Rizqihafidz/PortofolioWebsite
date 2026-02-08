'use client'

export default function AdminLoading() {
    return (
        <div className="flex-1 p-6">
            {/* Header Skeleton */}
            <div className="flex items-center justify-between mb-8">
                <div className="h-8 w-48 bg-slate-200 dark:bg-slate-700 rounded-lg animate-pulse" />
                <div className="h-10 w-32 bg-slate-200 dark:bg-slate-700 rounded-lg animate-pulse" />
            </div>

            {/* Cards Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                        key={i}
                        className="p-6 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-white/5"
                    >
                        <div className="h-4 w-24 bg-slate-200 dark:bg-slate-700 rounded animate-pulse mb-4" />
                        <div className="h-8 w-16 bg-slate-200 dark:bg-slate-700 rounded animate-pulse mb-2" />
                        <div className="h-3 w-32 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
                    </div>
                ))}
            </div>
        </div>
    )
}
