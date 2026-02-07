import type { GalleryItem } from '@/types'

interface Props {
  gallery: GalleryItem[]
}

export default function ProjectGallery({ gallery }: Props) {
  if (gallery.length === 0) return null

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold tracking-tight">Project Gallery</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {gallery.map((item, index) => {
          const isWide = index === gallery.length - 1 && gallery.length % 2 !== 0
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
    </div>
  )
}
