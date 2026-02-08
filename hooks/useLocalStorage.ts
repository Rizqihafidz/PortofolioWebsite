'use client'

import { useState, useEffect, useCallback } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((prev: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(initialValue)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const item = localStorage.getItem(key)
      if (item !== null) {
        setStoredValue(JSON.parse(item))
      }
    } catch {
      // keep initial value
    }
  }, [key])

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      setStoredValue((prev) => {
        const next = value instanceof Function ? value(prev) : value
        if (mounted) {
          try {
            localStorage.setItem(key, JSON.stringify(next))
          } catch {
            // quota exceeded etc.
          }
        }
        return next
      })
    },
    [key, mounted],
  )

  return [storedValue, setValue]
}
