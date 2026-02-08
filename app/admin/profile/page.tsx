'use client'

import { useState, useRef } from 'react'
import { useAdminData } from '@/context/AdminDataContext'
import MaterialIcon from '@/components/ui/MaterialIcon'
import RichTextEditor from '@/components/admin/ui/RichTextEditor'
import IconSelector from '@/components/admin/ui/IconSelector'
import type { AboutCard } from '@/types'

export default function ProfilePage() {
  const { profileImage, aboutBio, aboutCards, updateProfile } = useAdminData()

  const [image, setImage] = useState(profileImage)
  const [bio, setBio] = useState(aboutBio)
  const [cards, setCards] = useState<AboutCard[]>(aboutCards.map((c) => ({ ...c })))
  const [saved, setSaved] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImage(URL.createObjectURL(file))
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file?.type.startsWith('image/')) {
      setImage(URL.createObjectURL(file))
    }
  }

  const [saving, setSaving] = useState(false)

  const handleSave = async () => {
    setSaving(true)
    try {
      await updateProfile(image, bio, cards)
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
    } catch {
      // handle silently
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black mb-2">Profile Settings</h1>
        <p className="text-slate-500 dark:text-slate-400">
          Update your profile image and about section content.
        </p>
      </div>

      {/* Profile Image */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 shadow-sm space-y-4">
        <h2 className="text-lg font-bold">Profile Image</h2>
        <div className="flex items-start gap-6">
          <img
            src={image}
            alt="Profile"
            className="w-32 h-32 rounded-2xl object-cover border-2 border-slate-200 dark:border-white/10"
          />
          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onClick={() => fileRef.current?.click()}
            className="flex-1 border-2 border-dashed border-slate-300 dark:border-slate-600 hover:border-primary rounded-xl p-8 text-center cursor-pointer transition-colors"
          >
            <MaterialIcon name="cloud_upload" className="text-4xl text-slate-400 block mx-auto mb-2" />
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Drag & drop an image, or click to browse
            </p>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
        </div>
      </div>

      {/* About Bio */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 shadow-sm space-y-4">
        <div>
          <h2 className="text-lg font-bold">About Bio</h2>
          <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
            Write your bio using the rich text editor. You can use multiple paragraphs, bold, italic, and more.
          </p>
        </div>
        <RichTextEditor
          value={bio}
          onChange={setBio}
          placeholder="Write your bio here..."
        />
      </div>

      {/* Info Cards */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 shadow-sm space-y-4">
        <h2 className="text-lg font-bold">Info Cards</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {cards.map((card, i) => (
            <div
              key={i}
              className="p-4 rounded-xl border border-slate-200 dark:border-white/10 space-y-3"
            >
              <div>
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
                  Icon
                </label>
                <IconSelector
                  value={card.icon}
                  onChange={(icon) => {
                    const next = [...cards]
                    next[i] = { ...next[i], icon }
                    setCards(next)
                  }}
                />
              </div>
              <input
                value={card.title}
                onChange={(e) => {
                  const next = [...cards]
                  next[i] = { ...next[i], title: e.target.value }
                  setCards(next)
                }}
                placeholder="Title"
                className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-bold"
              />
              <textarea
                value={card.description}
                onChange={(e) => {
                  const next = [...cards]
                  next[i] = { ...next[i], description: e.target.value }
                  setCards(next)
                }}
                rows={2}
                placeholder="Description"
                className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          <MaterialIcon name={saved ? 'check' : 'save'} className="text-xl" />
          {saving ? 'Saving...' : saved ? 'Saved!' : 'Save Changes'}
        </button>
      </div>
    </div>
  )
}
