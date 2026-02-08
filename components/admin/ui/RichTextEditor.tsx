'use client'

import { useRef, useCallback, useEffect } from 'react'
import MaterialIcon from '@/components/ui/MaterialIcon'

interface Props {
  value: string
  onChange: (html: string) => void
  placeholder?: string
}

interface ToolButton {
  command: string
  icon: string
  label: string
  arg?: string
}

const tools: ToolButton[] = [
  { command: 'bold', icon: 'format_bold', label: 'Bold' },
  { command: 'italic', icon: 'format_italic', label: 'Italic' },
  { command: 'underline', icon: 'format_underlined', label: 'Underline' },
  { command: 'strikeThrough', icon: 'strikethrough_s', label: 'Strikethrough' },
  { command: 'insertUnorderedList', icon: 'format_list_bulleted', label: 'Bullet List' },
  { command: 'insertOrderedList', icon: 'format_list_numbered', label: 'Numbered List' },
]

export default function RichTextEditor({ value, onChange, placeholder = 'Start writing...' }: Props) {
  const editorRef = useRef<HTMLDivElement>(null)
  const isInternalUpdate = useRef(false)

  // Set initial content
  useEffect(() => {
    if (editorRef.current && !isInternalUpdate.current) {
      if (editorRef.current.innerHTML !== value) {
        editorRef.current.innerHTML = value
      }
    }
  }, [value])

  const execCommand = useCallback((command: string, arg?: string) => {
    document.execCommand(command, false, arg)
    editorRef.current?.focus()
    if (editorRef.current) {
      isInternalUpdate.current = true
      onChange(editorRef.current.innerHTML)
      isInternalUpdate.current = false
    }
  }, [onChange])

  const handleInput = useCallback(() => {
    if (editorRef.current) {
      isInternalUpdate.current = true
      onChange(editorRef.current.innerHTML)
      isInternalUpdate.current = false
    }
  }, [onChange])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      document.execCommand('insertText', false, '    ')
    }
  }, [])

  const isEmpty = !value || value === '<br>' || value === '<div><br></div>'

  return (
    <div className="border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent transition-all">
      {/* Toolbar */}
      <div className="flex items-center gap-1 px-3 py-2 bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-white/10">
        {tools.map((tool) => (
          <button
            key={tool.command}
            type="button"
            onMouseDown={(e) => {
              e.preventDefault()
              execCommand(tool.command, tool.arg)
            }}
            title={tool.label}
            className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <MaterialIcon name={tool.icon} className="text-lg" />
          </button>
        ))}

        <div className="w-px h-5 bg-slate-200 dark:bg-slate-700 mx-1" />

        {/* Heading selector */}
        <select
          onChange={(e) => {
            if (e.target.value === 'p') {
              execCommand('formatBlock', 'p')
            } else {
              execCommand('formatBlock', e.target.value)
            }
            e.target.value = ''
          }}
          defaultValue=""
          className="px-2 py-1 text-xs bg-transparent border border-slate-200 dark:border-white/10 rounded-lg text-slate-600 dark:text-slate-400 cursor-pointer outline-none"
        >
          <option value="" disabled>Format</option>
          <option value="p">Paragraph</option>
          <option value="h3">Heading</option>
          <option value="blockquote">Quote</option>
        </select>
      </div>

      {/* Editor area */}
      <div className="relative">
        {isEmpty && (
          <div className="absolute top-0 left-0 px-5 py-4 text-slate-400 dark:text-slate-500 pointer-events-none select-none">
            {placeholder}
          </div>
        )}
        <div
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          onInput={handleInput}
          onKeyDown={handleKeyDown}
          className="min-h-[200px] px-5 py-4 bg-white dark:bg-slate-900 text-base leading-relaxed focus:outline-none prose dark:prose-invert prose-sm max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0"
          style={{ wordBreak: 'break-word' }}
        />
      </div>
    </div>
  )
}
