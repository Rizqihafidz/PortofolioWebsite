import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { projects, getProjectBySlug } from '@/data/projects'
import ProjectHero from '@/components/project/ProjectHero'
import ProjectMetadata from '@/components/project/ProjectMetadata'
import ProjectOverview from '@/components/project/ProjectOverview'
import ProjectGallery from '@/components/project/ProjectGallery'
import ProjectMechanics from '@/components/project/ProjectMechanics'
import ProjectSidebar from '@/components/project/ProjectSidebar'
import ProjectNavigation from '@/components/project/ProjectNavigation'

interface PageProps {
    params: Promise<{ slug: string }>
}

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const project = getProjectBySlug(slug)

    if (!project) {
        return {
            title: 'Project Not Found',
        }
    }

    return {
        title: project.title,
        description: project.shortDescription,
        openGraph: {
            title: project.title,
            description: project.shortDescription,
            images: [project.heroImage],
        },
    }
}

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params
    const project = getProjectBySlug(slug)

    if (!project) {
        notFound()
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
