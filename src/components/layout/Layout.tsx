import { Outlet } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingActionButton from '@/components/ui/FloatingActionButton'
import ScrollToTop from '@/components/ui/ScrollToTop'

export default function Layout() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-300 min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  )
}
