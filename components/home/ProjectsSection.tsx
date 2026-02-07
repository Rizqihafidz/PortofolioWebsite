import Link from 'next/link'
import { projects } from '@/data/projects'

export default function ProjectsSection() {
  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/30" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-black mb-4">Featured Work</h2>
            <p className="text-slate-500 dark:text-slate-400">
              A selection of my recent projects
            </p>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all block"
            >
              {/* Card Image */}
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                  <span className="text-white font-bold text-sm bg-primary/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                    View Details
                  </span>
                </div>
                <img
                  src={project.cardImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Card Content */}
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-700 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
