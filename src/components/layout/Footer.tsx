export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-white/5 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          &copy; {new Date().getFullYear()} Rizqi Maulana Hafidz. Built with passion &amp; clean
          code.
        </p>
        <div className="flex items-center gap-8">
          <a
            className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors"
            href="https://linkedin.com/in/qimau"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors"
            href="https://github.com/Rizqihafidz"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
