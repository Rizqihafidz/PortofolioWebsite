import { SiUnity, SiSharp, SiFigma, SiHtml5, SiGit, SiNotion } from 'react-icons/si'
import type { IconType } from 'react-icons'

const techItems: { icon: IconType; name: string }[] = [
  { icon: SiUnity, name: 'Unity' },
  { icon: SiSharp, name: 'C#' },
  { icon: SiFigma, name: 'Figma' },
  { icon: SiHtml5, name: 'HTML/CSS' },
  { icon: SiGit, name: 'Git' },
  { icon: SiNotion, name: 'Notion' },
]

export default function TechStackSection() {
  return (
    <section className="py-24 px-6" id="tech">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">Tech Stack</h2>
          <p className="text-slate-500 dark:text-slate-400">
            The core tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {techItems.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-transparent hover:border-primary/30 transition-all group"
            >
              <div className="size-16 rounded-xl bg-white dark:bg-slate-700 flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <item.icon className="text-3xl text-primary" />
              </div>
              <span className="font-bold text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
