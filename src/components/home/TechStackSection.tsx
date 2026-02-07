import MaterialIcon from '@/components/ui/MaterialIcon'

const techItems = [
  { icon: 'sports_esports', name: 'Unity' },
  { icon: 'code', name: 'C#' },
  { icon: 'design_services', name: 'Figma' },
  { icon: 'html', name: 'HTML/CSS' },
  { icon: 'merge_type', name: 'Git' },
  { icon: 'edit_note', name: 'Notion' },
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
                <MaterialIcon name={item.icon} className="text-3xl text-primary" />
              </div>
              <span className="font-bold text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
