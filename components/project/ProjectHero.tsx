import Image from 'next/image'
import type { Project } from '@/types'

interface Props {
  project: Project
}

export default function ProjectHero({ project }: Props) {
  return (
    <section className="relative w-full h-[50vh] lg:h-[65vh] overflow-hidden bg-slate-100 dark:bg-slate-900">
      {/* Background Image */}
      <Image
        src={project.heroImage}
        alt={`${project.title} hero image`}
        fill
        priority
        sizes="100vw"
        className="object-cover transition-transform duration-700 hover:scale-105"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background-light via-background-light/60 to-transparent dark:from-background-dark dark:via-background-dark/60 dark:to-transparent z-10" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full z-20 px-6 lg:px-20 pb-12 lg:pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-4 max-w-3xl">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest w-fit border ${project.type === 'game'
                  ? 'bg-red-500/10 text-red-500 border-red-500/20'
                  : 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
                }`}
            >
              {project.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter">
              {project.title}
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
              {project.shortDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
