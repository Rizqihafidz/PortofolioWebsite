import type { Project } from '@/types'
import MaterialIcon from '@/components/ui/MaterialIcon'

interface Props {
  project: Project
}

export default function ProjectOverview({ project }: Props) {
  return (
    <div className="space-y-12">
      {/* Overview */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight border-l-4 border-primary pl-6">
          Project Overview
        </h2>
        {project.fullDescription.map((paragraph, index) => (
          <p key={index} className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Highlights */}
      {project.highlights.length > 0 && (
        <div className="bg-white/70 dark:bg-slate-800/40 backdrop-blur-sm border border-slate-200 dark:border-white/10 p-6 lg:p-8 rounded-xl space-y-4">
          <h3 className="font-bold text-sm uppercase text-slate-400 dark:text-slate-500 tracking-widest">
            Key Highlights
          </h3>
          <ul className="space-y-3">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-3 text-sm">
                <MaterialIcon
                  name="check_circle"
                  className="text-primary text-lg flex-shrink-0 mt-0.5"
                />
                <span className="text-slate-600 dark:text-slate-400">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
