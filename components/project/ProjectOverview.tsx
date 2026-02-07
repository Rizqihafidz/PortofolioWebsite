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


    </div>
  )
}
