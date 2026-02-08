import MaterialIcon from '@/components/ui/MaterialIcon'

interface AboutData {
  bio: string
  cards: { icon: string; title: string; description: string }[]
  profileImage: string
}

const defaultCards = [
  {
    icon: 'school',
    title: 'Education',
    description: 'S1 Informatics Engineering from Brawijaya University with 3.66 GPA.',
  },
  {
    icon: 'group',
    title: 'Leadership',
    description: 'Led Game Designer Division in Raion Community for 1 year.',
  },
  {
    icon: 'sports_esports',
    title: 'Game Dev',
    description: 'Developed games in Unity & C# including thesis research project.',
  },
  {
    icon: 'web',
    title: 'Web Dev',
    description: 'Developed this portfolio website using Next.js 16, React 19, and Tailwind CSS.',
  },
]

const defaultBio = '<p>I am Rizqi Maulana Hafidz, an Informatics Engineering graduate from Brawijaya University with a GPA of 3.66. I aspire to have a career as a game developer, combining my passion for gaming with strong technical skills in Unity and C# programming.</p><p>My thesis focused on dynamic difficulty adjustment in a 2D endless runner game, published in J-PTIIK journal. I\'ve also led the Game Designer Division in Raion Community, where I mentored new members and organized game development workshops. I\'m currently seeking opportunities to grow as a developer.</p>'

interface Props {
  data?: AboutData
}

export default function AboutSection({ data }: Props) {
  const cards = data?.cards ?? defaultCards
  const bio = data?.bio ?? defaultBio

  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/30" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <div>
            <h2 className="text-4xl font-black mb-8 tracking-tight">About Me</h2>
            <div
              className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed [&>p]:mb-0"
              dangerouslySetInnerHTML={{ __html: bio }}
            />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, index) => {
              const gradients = [
                'from-purple-500 to-indigo-500',
                'from-blue-500 to-cyan-500',
                'from-green-500 to-emerald-500',
                'from-orange-500 to-red-500',
              ]
              const gradient = gradients[index % gradients.length]

              return (
                <div
                  key={card.title}
                  className="relative p-8 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 shadow-sm group hover:shadow-lg transition-all overflow-hidden"
                >
                  {/* Gradient border on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  <div className="relative z-10">
                    <MaterialIcon name={card.icon} className="text-4xl text-primary mb-4 block" />
                    <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{card.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
