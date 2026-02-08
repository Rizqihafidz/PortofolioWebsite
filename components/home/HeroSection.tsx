import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden px-6" id="home">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Text Content */}
        <div className="order-2 lg:order-1">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6 hover:bg-primary/20 transition-colors cursor-pointer"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider">Open to Work</span>
          </a>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-tight">
            Crafting <span className="text-primary">Games</span> & Digital Experiences
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed">
            Informatics Engineering Graduate from Brawijaya University. Specialized in game
            development with Unity & C#, with a published thesis on dynamic difficulty adjustment.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              className="px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-xl shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              href="#projects"
              aria-label="View my portfolio projects"
            >
              View My Work
            </a>
            <a
              className="px-8 py-4 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl border border-transparent hover:border-primary/50 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              href="#contact"
              aria-label="Contact me for collaboration"
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-[480px] md:h-[480px] bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl">
              <Image
                src="/assets/profile-pic.jpeg"
                alt="Rizqi Maulana Hafidz - Game Developer & Designer"
                fill
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAYH/8QAIhAAAgEEAQUBAAAAAAAAAAAAAQIDAAQFESEGEhMxQVH/xAAVAQEBAAAAAAAAAAAAAAAAAAAFBv/EABsRAQACAgMAAAAAAAAAAAAAAAEAAgMRBBIh/9oADAMBEQCEAPwAuuncRHl8VO9wxa3KJCZYxsdsjkDySPvHFFFVOTliusqMfZ//2Q=="
                sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 480px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
