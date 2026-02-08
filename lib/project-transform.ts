import type { ProjectFormData } from '@/types'

export function formDataToPrismaInput(data: ProjectFormData) {
  const slug = data.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

  const links = [
    {
      label: data.type === 'game' ? 'Play Game' : 'Visit Website',
      url: data.projectLinkUrl,
      icon: data.type === 'game' ? 'gamepad' : 'web',
      isPrimary: true,
      order: 0,
    },
    {
      label: 'GitHub Repository',
      url: data.githubUrl,
      icon: 'code',
      isPrimary: false,
      order: 1,
    },
  ]

  if (data.hasPublication && data.publicationUrl) {
    links.push({
      label: 'Publication',
      url: data.publicationUrl,
      icon: 'article',
      isPrimary: false,
      order: 2,
    })
  }

  return {
    slug,
    title: data.title,
    shortDescription: data.shortDescription,
    tags: data.tags,
    cardImage: data.gallery[0]?.previewUrl ?? '',
    type: data.type,
    heroImage: data.gallery[0]?.previewUrl ?? '',
    badge: data.type === 'game' ? 'Game Development' : 'Web Development',
    fullDescription: data.fullDescription.filter((p) => p.trim()),
    techStack: data.techStack,
    highlights: data.highlights.filter((h) => h.trim()),
    metaYear: data.year,
    metaRole: data.role,
    metaPlatform: data.platform,
    metaStatus: data.status,
    metaStatusColor: data.status === 'Published' ? 'green' : 'yellow',
    gallery: data.gallery.map((g, i) => ({
      src: g.previewUrl,
      caption: g.caption,
      order: i,
    })),
    mechanics: data.mechanics.map((m, i) => ({
      icon: '',
      title: m.title,
      description: m.description,
      tech: m.tech,
      color: 'primary',
      order: i,
    })),
    links,
  }
}
