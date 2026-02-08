'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MaterialIcon from '@/components/ui/MaterialIcon'
import { useAuth } from '@/context/AuthContext'

const navItems = [
  { href: '/admin', icon: 'dashboard', label: 'Dashboard' },
  { href: '/admin/profile', icon: 'person', label: 'Profile' },
  { href: '/admin/projects', icon: 'folder', label: 'Projects' },
  { href: '/admin/settings', icon: 'settings', label: 'Settings' },
]

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function AdminSidebar({ isOpen, onClose }: Props) {
  const pathname = usePathname()
  const { logout } = useAuth()

  const isActive = (href: string) =>
    href === '/admin' ? pathname === '/admin' : pathname.startsWith(href)

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200 dark:border-white/5 flex flex-col transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-slate-200 dark:border-white/5">
          <div className="flex items-center gap-2">
            <MaterialIcon name="terminal" className="text-2xl text-primary" />
            <span className="text-lg font-black tracking-tight">Admin Panel</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                isActive(item.href)
                  ? 'bg-primary/10 text-primary font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5'
              }`}
            >
              <MaterialIcon name={item.icon} className="text-xl" />
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-slate-200 dark:border-white/5 space-y-1">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
          >
            <MaterialIcon name="arrow_back" className="text-xl" />
            Back to Site
          </Link>
          <button
            onClick={logout}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all w-full"
          >
            <MaterialIcon name="logout" className="text-xl" />
            Logout
          </button>
        </div>
      </aside>
    </>
  )
}
