import type { ProjectMetadata as MetadataType } from '@/types'
import MaterialIcon from '@/components/ui/MaterialIcon'

interface Props {
  metadata: MetadataType
}

const STATUS_DOT_COLORS: Record<MetadataType['statusColor'], string> = {
  green: 'bg-green-500',
  blue: 'bg-blue-500',
  yellow: 'bg-yellow-500',
  red: 'bg-red-500',
}

export default function ProjectMetadata({ metadata }: Props) {
  return (
    <div className="border-y border-slate-200 dark:border-white/5 bg-white/50 dark:bg-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-1">
          <span className="text-xs uppercase text-slate-400 dark:text-slate-500 font-bold tracking-widest">
            Year
          </span>
          <span className="text-lg font-semibold">{metadata.year}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs uppercase text-slate-400 dark:text-slate-500 font-bold tracking-widest">
            Role
          </span>
          <span className="text-lg font-semibold">{metadata.role}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs uppercase text-slate-400 dark:text-slate-500 font-bold tracking-widest">
            Platform
          </span>
          <span className="text-lg font-semibold">{metadata.platform}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs uppercase text-slate-400 dark:text-slate-500 font-bold tracking-widest">
            Status
          </span>
          <div className="flex items-center gap-2">
            <span
              className={`size-2 rounded-full animate-pulse ${STATUS_DOT_COLORS[metadata.statusColor]}`}
            />
            <span className="text-lg font-semibold">{metadata.status}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
