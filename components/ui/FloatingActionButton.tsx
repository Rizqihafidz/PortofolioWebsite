export default function FloatingActionButton() {
    return (
        <div className="fixed bottom-8 right-8 z-[100] group">
            <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-white dark:bg-slate-800 px-4 py-2 rounded-lg shadow-xl border border-slate-200 dark:border-white/5 text-sm font-bold pointer-events-none">
                Download Resume
            </div>
            <a
                href="/assets/resume.pdf"
                download
                className="size-16 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl shadow-primary/40 hover:scale-110 active:scale-95 transition-all"
            >
                <span className="material-symbols-outlined text-3xl">download</span>
            </a>
        </div>
    )
}
