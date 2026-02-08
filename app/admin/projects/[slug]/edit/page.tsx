'use client'

import { useParams } from 'next/navigation'
import { useAdminData } from '@/context/AdminDataContext'
import ProjectForm from '@/components/admin/projects/form/ProjectForm'
import type { ProjectFormData } from '@/types'

export default function EditProjectPage() {
  const params = useParams<{ slug: string }>()
  const { projects } = useAdminData()
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    return (
      <div className="text-center py-20">
        <p className="text-slate-500 dark:text-slate-400">Project not found.</p>
      </div>
    )
  }

  // Convert Project to ProjectFormData for the form
  const primaryLink = project.links.find((l) => l.isPrimary)
  const githubLink = project.links.find((l) => l.label === 'GitHub Repository')
  const pubLink = project.links.find((l) => l.label === 'Publication')

  const initialData: ProjectFormData = {
    type: project.type,
    title: project.title,
    shortDescription: project.shortDescription,
    tags: [...project.tags],
    fullDescription: project.fullDescription.join(''),
    year: project.metadata.year,
    role: project.metadata.role,
    platform: project.metadata.platform,
    status: project.metadata.status as 'Published' | 'In Development',
    gallery: project.gallery.map((g) => ({ file: null, previewUrl: g.src, caption: g.caption })),
    mechanics: project.mechanics.map((m) => ({ title: m.title, description: m.description, tech: m.tech })),
    techStack: [...project.techStack],
    highlights: [...project.highlights],
    projectLinkUrl: primaryLink?.url ?? '',
    githubUrl: githubLink?.url ?? '',
    hasPublication: !!pubLink,
    publicationUrl: pubLink?.url ?? '',
  }

  return <ProjectForm initialData={initialData} editSlug={project.slug} />
}
