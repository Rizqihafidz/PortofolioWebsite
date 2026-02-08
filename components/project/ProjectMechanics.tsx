import type { Mechanic } from '@/types'
import MaterialIcon from '@/components/ui/MaterialIcon'

interface Props {
  mechanics: Mechanic[]
}

export default function ProjectMechanics({ mechanics }: Props) {
  if (mechanics.length === 0) return null

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight border-l-4 border-accent pl-6">
        Key Features & Mechanics
      </h2>
      <div className="grid gap-8">
        {mechanics.map((mechanic, index) => (
          <div
            key={index}
            className="glass-card bg-white/70 dark:bg-slate-800/40 border border-slate-200 dark:border-white/10 p-8 rounded-xl space-y-3"
          >
            <div
              className={`flex items-center gap-3 ${mechanic.color === 'primary' ? 'text-primary' : 'text-accent'
                }`}
            >
              <h4 className="text-xl font-bold">{mechanic.title}</h4>
            </div>
            <p className="text-slate-600 dark:text-slate-400">{mechanic.description}</p>
            <p
              className={`text-sm font-medium ${mechanic.color === 'primary' ? 'text-primary' : 'text-accent'
                }`}
            >
              Tech: {mechanic.tech}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
