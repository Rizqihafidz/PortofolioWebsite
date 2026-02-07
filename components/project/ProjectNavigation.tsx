import Link from 'next/link'
import MaterialIcon from '@/components/ui/MaterialIcon'

export default function ProjectNavigation() {
  return (
    <div className="py-8">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline underline-offset-4 decoration-2"
      >
        <MaterialIcon name="arrow_back" className="text-xl" />
        Back to All Projects
      </Link>
    </div>
  )
}
