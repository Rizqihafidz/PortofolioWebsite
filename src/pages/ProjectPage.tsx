import { useParams, Navigate } from 'react-router-dom'
import { getProjectBySlug } from '@/data/projects'
import ProjectHero from '@/components/project/ProjectHero'
import ProjectMetadata from '@/components/project/ProjectMetadata'
import ProjectOverview from '@/components/project/ProjectOverview'
import ProjectGallery from '@/components/project/ProjectGallery'
import ProjectMechanics from '@/components/project/ProjectMechanics'
import ProjectSidebar from '@/components/project/ProjectSidebar'
import ProjectNavigation from '@/components/project/ProjectNavigation'

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <ProjectHero project={project} />
      <ProjectMetadata metadata={project.metadata} />

      <section className="max-w-7xl mx-auto px-6 lg:px-20 py-16">
        <ProjectNavigation />

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Content */}
          <div className="flex-1 space-y-20">
            <ProjectOverview project={project} />
            <ProjectGallery gallery={project.gallery} />
            <ProjectMechanics mechanics={project.mechanics} />
          </div>

          {/* Sidebar */}
          <ProjectSidebar project={project} />
        </div>
      </section>
    </>
  )
}
