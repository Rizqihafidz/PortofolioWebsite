import type { Project } from '@/types'

// Type for Prisma query result with includes
interface DbProject {
  slug: string
  title: string
  shortDescription: string
  tags: string[]
  cardImage: string
  type: string
  heroImage: string
  badge: string
  fullDescription: string[]
  techStack: string[]
  highlights: string[]
  metaYear: string
  metaRole: string
  metaPlatform: string
  metaStatus: string
  metaStatusColor: string
  gallery: { src: string; caption: string; order: number }[]
  mechanics: { icon: string | null; title: string; description: string; tech: string; color: string; order: number }[]
  links: { label: string; url: string; icon: string; isPrimary: boolean; order: number }[]
}

export function serializeProject(dbProject: DbProject): Project {
  return {
    slug: dbProject.slug,
    title: dbProject.title,
    shortDescription: dbProject.shortDescription,
    tags: dbProject.tags,
    cardImage: dbProject.cardImage,
    type: dbProject.type as 'game' | 'web',
    heroImage: dbProject.heroImage,
    badge: dbProject.badge,
    fullDescription: dbProject.fullDescription,
    metadata: {
      year: dbProject.metaYear,
      role: dbProject.metaRole,
      platform: dbProject.metaPlatform,
      status: dbProject.metaStatus,
      statusColor: dbProject.metaStatusColor as 'green' | 'blue' | 'yellow' | 'red',
    },
    gallery: dbProject.gallery
      .sort((a, b) => a.order - b.order)
      .map((g) => ({ src: g.src, caption: g.caption })),
    mechanics: dbProject.mechanics
      .sort((a, b) => a.order - b.order)
      .map((m) => ({
        icon: m.icon ?? undefined,
        title: m.title,
        description: m.description,
        tech: m.tech,
        color: m.color as 'primary' | 'accent',
      })),
    techStack: dbProject.techStack,
    links: dbProject.links
      .sort((a, b) => a.order - b.order)
      .map((l) => ({
        label: l.label,
        url: l.url,
        icon: l.icon,
        isPrimary: l.isPrimary,
      })),
    highlights: dbProject.highlights,
  }
}

// Include option for Prisma queries
export const projectInclude = {
  gallery: true,
  mechanics: true,
  links: true,
} as const
