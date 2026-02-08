'use client'

import { useState, useEffect, useCallback, createContext, useContext, type ReactNode } from 'react'
import MaterialIcon from '@/components/ui/MaterialIcon'

type ToastType = 'success' | 'error' | 'info'

interface Toast {
  id: number
  message: string
  type: ToastType
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

let nextId = 0

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const showToast = useCallback((message: string, type: ToastType = 'success') => {
    const id = nextId++
    setToasts((prev) => [...prev, { id, message, type }])
  }, [])

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Toast container */}
      <div className="fixed top-4 right-4 z-[100] space-y-2">
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onDismiss={removeToast} />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

function ToastItem({ toast, onDismiss }: { toast: Toast; onDismiss: (id: number) => void }) {
  useEffect(() => {
    const timer = setTimeout(() => onDismiss(toast.id), 3000)
    return () => clearTimeout(timer)
  }, [toast.id, onDismiss])

  const styles = {
    success: 'bg-emerald-500',
    error: 'bg-red-500',
    info: 'bg-primary',
  }

  const icons = {
    success: 'check_circle',
    error: 'error',
    info: 'info',
  }

  return (
    <div
      className={`${styles[toast.type]} text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3 min-w-[280px] animate-[slideIn_0.2s_ease-out]`}
    >
      <MaterialIcon name={icons[toast.type]} className="text-xl flex-shrink-0" />
      <span className="text-sm font-medium flex-1">{toast.message}</span>
      <button onClick={() => onDismiss(toast.id)} className="hover:opacity-80">
        <MaterialIcon name="close" className="text-lg" />
      </button>
    </div>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}
