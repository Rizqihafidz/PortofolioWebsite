'use client'

import { useState } from 'react'
import type { GalleryItem } from '@/types'
import MaterialIcon from '@/components/ui/MaterialIcon'

const DISPLAY_LIMIT = 4

interface Props {
  gallery: GalleryItem[]
}

export default function ProjectGallery({ gallery }: Props) {
  const [showAll, setShowAll] = useState(false)

  if (gallery.length === 0) return null

  const visibleGallery = showAll ? gallery : gallery.slice(0, DISPLAY_LIMIT)
  const hasMore = gallery.length > DISPLAY_LIMIT

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold tracking-tight">Project Gallery</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleGallery.map((item, index) => {
          const isWide =
            index === visibleGallery.length - 1 && visibleGallery.length % 2 !== 0
          return (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800 shadow-sm ${
                isWide ? 'md:col-span-2 aspect-[21/9]' : 'aspect-video'
              }`}
            >
              <img
                src={item.src}
                alt={item.caption}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm font-bold">{item.caption}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* See More / Show Less toggle */}
      {hasMore && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-primary/80 transition-colors"
          >
            {showAll
              ? 'Show Less'
              : `See More (${gallery.length - DISPLAY_LIMIT} more images)`}
            <MaterialIcon
              name={showAll ? 'expand_less' : 'expand_more'}
              className="text-xl"
            />
          </button>
        </div>
      )}
    </div>
  )
}
