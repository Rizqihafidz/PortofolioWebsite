import type { Project } from '@/types'
import MaterialIcon from '@/components/ui/MaterialIcon'

interface Props {
  project: Project
}

export default function ProjectSidebar({ project }: Props) {
  return (
    <aside className="w-full lg:w-80 flex flex-col gap-10">

      {/* Action Links */}
      {project.links.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold tracking-tight">Project Links</h3>
          {project.links.map((link) => (
            <a
              key={link.url + link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between group w-full p-4 rounded-xl font-bold transition-all ${link.isPrimary
                ? 'bg-primary text-white hover:translate-y-[-2px] shadow-lg shadow-primary/30'
                : 'bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10'
                }`}
            >
              <span>{link.label}</span>
              <MaterialIcon
                name={link.icon}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          ))}
        </div>
      )}

      {/* Highlights Card */}
      <div className="glass-card bg-white/70 dark:bg-slate-800/40 border border-slate-200 dark:border-white/10 p-6 rounded-xl space-y-4">
        <h3 className="font-bold text-sm uppercase text-slate-400 dark:text-slate-500 tracking-widest">
          Dev Highlights
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

      {/* Tech Stack */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold tracking-tight">Technical Details</h3>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-medium hover:border-primary transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </aside>
  )
}
