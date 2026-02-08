'use client'

import { useState, type KeyboardEvent } from 'react'
import MaterialIcon from '@/components/ui/MaterialIcon'

interface Props {
  value: string[]
  onChange: (tags: string[]) => void
  maxTags?: number
  placeholder?: string
}

export default function TagInput({ value, onChange, maxTags, placeholder = 'Type and press Enter' }: Props) {
  const [input, setInput] = useState('')

  const addTag = () => {
    const tag = input.trim()
    if (!tag) return
    if (maxTags && value.length >= maxTags) return
    if (value.includes(tag)) return
    onChange([...value, tag])
    setInput('')
  }

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault()
      addTag()
    }
    if (e.key === 'Backspace' && !input && value.length > 0) {
      onChange(value.slice(0, -1))
    }
  }

  return (
    <div className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent transition-all flex flex-wrap gap-2">
      {value.map((tag) => (
        <span
          key={tag}
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium"
        >
          {tag}
          <button onClick={() => onChange(value.filter((t) => t !== tag))} className="hover:text-primary/60">
            <MaterialIcon name="close" className="text-sm" />
          </button>
        </span>
      ))}
      {(!maxTags || value.length < maxTags) && (
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          onBlur={addTag}
          placeholder={value.length === 0 ? placeholder : ''}
          className="flex-1 min-w-[120px] bg-transparent outline-none text-sm py-1"
        />
      )}
    </div>
  )
}
