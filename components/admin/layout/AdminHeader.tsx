'use client'

import MaterialIcon from '@/components/ui/MaterialIcon'
import ThemeToggle from '@/components/ui/ThemeToggle'

interface Props {
  onMenuToggle: () => void
}

export default function AdminHeader({ onMenuToggle }: Props) {
  return (
    <header className="sticky top-0 z-30 h-16 bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-slate-200 dark:border-white/5 flex items-center px-6 gap-4">
      <button
        onClick={onMenuToggle}
        className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
      >
        <MaterialIcon name="menu" className="text-2xl" />
      </button>

      <div className="flex-1" />

      <ThemeToggle />
    </header>
  )
}
