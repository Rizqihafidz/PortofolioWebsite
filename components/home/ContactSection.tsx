'use client'

import MaterialIcon from '@/components/ui/MaterialIcon'

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with form service (Formspree, EmailJS, etc.)
  }

  return (
    <section className="py-24 px-6" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Contact Info */}
          <div>
            <h2 className="text-5xl font-black mb-8 tracking-tighter">
              Let's work <br />
              <span className="text-primary">together.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-md">
              Have a project in mind or just want to say hi? I'm always open to discussing new
              opportunities and creative ideas.
            </p>

            <div className="space-y-6 mb-12">
              <a
                href="mailto:rizqimaulanahafidz156@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <MaterialIcon name="mail" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                    Email Me
                  </p>
                  <p className="font-bold">rizqimaulanahafidz156@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 group">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <MaterialIcon name="location_on" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                    Location
                  </p>
                  <p className="font-bold">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                className="size-12 rounded-xl border border-slate-200 dark:border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all"
                href="https://linkedin.com/in/qimau"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <MaterialIcon name="link" />
              </a>
              <a
                className="size-12 rounded-xl border border-slate-200 dark:border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all"
                href="https://github.com/Rizqihafidz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <MaterialIcon name="code" />
              </a>
              <a
                className="size-12 rounded-xl border border-slate-200 dark:border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all"
                href="mailto:rizqimaulanahafidz156@gmail.com"
                aria-label="Email"
              >
                <MaterialIcon name="mail" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 dark:bg-slate-800/50 p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-white/5">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Name</label>
                  <input
                    className="w-full px-5 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Email</label>
                  <input
                    className="w-full px-5 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Message</label>
                <textarea
                  className="w-full px-5 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="How can I help you?"
                  rows={4}
                ></textarea>
              </div>
              <button
                className="w-full py-4 bg-primary text-white font-black rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
