export default function Footer() {
    return (
        <footer className="py-12 border-t border-white/5 px-6">
            <div className="max-w-5xl mx-auto flex items-center justify-center">
                <p className="text-sm text-slate-400 text-center">
                    &copy; {new Date().getFullYear()} Rizqi Maulana Hafidz
                </p>
            </div>
        </footer>
    )
}
