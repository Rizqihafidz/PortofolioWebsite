export interface ProjectMetadata {
    year: string
    role: string
    platform: string
    status: string
    statusColor: 'green' | 'blue' | 'yellow' | 'red'
}

export interface GalleryItem {
    src: string
    caption: string
}

export interface Mechanic {
    icon?: string
    title: string
    description: string
    tech: string
    color: 'primary' | 'accent'
}

export interface ProjectLink {
    label: string
    url: string
    icon: string
    isPrimary: boolean
}

export interface Project {
    // Card data (used on HomePage)
    slug: string
    title: string
    shortDescription: string
    tags: string[]
    cardImage: string
    githubUrl?: string

    // Detail page data
    type: 'game' | 'web'
    heroImage: string
    badge: string
    fullDescription: string[]
    metadata: ProjectMetadata
    gallery: GalleryItem[]
    mechanics: Mechanic[]
    techStack: string[]
    links: ProjectLink[]
    highlights: string[]
}

export interface ThemeContextType {
    isDark: boolean
    toggle: () => void
}

/* ───── Admin Types ───── */

export interface AboutCard {
    icon: string
    title: string
    description: string
}

export interface GalleryFormItem {
    file: File | null
    previewUrl: string
    caption: string
}

export interface MechanicFormItem {
    title: string
    description: string
    tech: string
}

export interface ProjectFormData {
    type: 'game' | 'web'
    title: string
    shortDescription: string
    tags: string[]
    fullDescription: string
    year: string
    role: string
    platform: string
    status: 'Published' | 'In Development'
    gallery: GalleryFormItem[]
    mechanics: MechanicFormItem[]
    techStack: string[]
    highlights: string[]
    projectLinkUrl: string
    githubUrl: string
    hasPublication: boolean
    publicationUrl: string
}
