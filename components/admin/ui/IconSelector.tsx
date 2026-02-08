'use client'

import { useState, useRef, useEffect } from 'react'
import MaterialIcon from '@/components/ui/MaterialIcon'

// Curated list of commonly used Material Symbols icons
const ICON_OPTIONS = [
  // Education & Work
  'school', 'work', 'business_center', 'engineering', 'science', 'biotech',
  'psychology', 'history_edu', 'menu_book', 'auto_stories', 'library_books',

  // People & Social
  'group', 'person', 'diversity_3', 'handshake', 'volunteer_activism',
  'groups', 'supervisor_account', 'people', 'person_search', 'support_agent',

  // Tech & Development
  'sports_esports', 'web', 'code', 'terminal', 'data_object', 'api',
  'developer_mode', 'devices', 'computer', 'phone_iphone', 'memory',
  'storage', 'cloud', 'database', 'dns', 'hub',

  // Creative & Design
  'palette', 'brush', 'draw', 'design_services', 'architecture',
  'auto_awesome', 'interests', 'category', 'widgets', 'view_in_ar',

  // Communication
  'chat', 'forum', 'mail', 'call', 'videocam',
  'campaign', 'record_voice_over', 'translate', 'language',

  // Achievement & Progress
  'emoji_events', 'military_tech', 'stars', 'workspace_premium', 'verified',
  'task_alt', 'trending_up', 'insights', 'analytics', 'leaderboard',
  'trophy', 'grade', 'thumb_up', 'celebration',

  // Tools & Settings
  'build', 'settings', 'tune', 'handyman', 'construction', 'precision_manufacturing',

  // Navigation & Actions
  'explore', 'rocket_launch', 'flag', 'location_on', 'public',
  'map', 'travel_explore', 'flight_takeoff',

  // Media
  'photo_camera', 'smart_display', 'mic', 'headphones', 'movie',
  'music_note', 'image', 'play_circle',

  // Content & Documents
  'article', 'description', 'edit_note', 'sticky_note_2',
  'folder', 'attachment', 'link', 'bookmark',

  // Misc
  'lightbulb', 'bolt', 'favorite', 'shield', 'lock',
  'visibility', 'speed', 'timer', 'eco', 'recycling',
]

interface Props {
  value: string
  onChange: (icon: string) => void
}

export default function IconSelector({ value, onChange }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      // Focus search on open
      setTimeout(() => searchRef.current?.focus(), 50)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  const filtered = search
    ? ICON_OPTIONS.filter((icon) => icon.includes(search.toLowerCase().replace(/\s+/g, '_')))
    : ICON_OPTIONS

  return (
    <div ref={containerRef} className="relative">
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-lg hover:border-primary transition-colors w-full"
      >
        <MaterialIcon name={value || 'help'} className="text-2xl text-primary" />
        <span className="text-sm text-slate-600 dark:text-slate-400 truncate flex-1 text-left">
          {value || 'Select icon'}
        </span>
        <MaterialIcon
          name={isOpen ? 'expand_less' : 'expand_more'}
          className="text-lg text-slate-400"
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-xl shadow-xl overflow-hidden">
          {/* Search */}
          <div className="p-2 border-b border-slate-200 dark:border-white/10">
            <div className="relative">
              <MaterialIcon
                name="search"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-slate-400"
              />
              <input
                ref={searchRef}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search icons..."
                className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-lg outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Icon grid */}
          <div className="max-h-60 overflow-y-auto p-2">
            {filtered.length === 0 ? (
              <p className="text-center text-sm text-slate-400 py-4">No icons found</p>
            ) : (
              <div className="grid grid-cols-6 gap-1">
                {filtered.map((icon) => (
                  <button
                    key={icon}
                    type="button"
                    onClick={() => {
                      onChange(icon)
                      setIsOpen(false)
                      setSearch('')
                    }}
                    title={icon.replace(/_/g, ' ')}
                    className={`p-2 rounded-lg transition-colors flex items-center justify-center ${
                      value === icon
                        ? 'bg-primary/10 text-primary ring-2 ring-primary'
                        : 'hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <MaterialIcon name={icon} className="text-xl" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
