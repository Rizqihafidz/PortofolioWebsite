import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingActionButton from '@/components/ui/FloatingActionButton'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
      <FloatingActionButton />
    </>
  )
}
