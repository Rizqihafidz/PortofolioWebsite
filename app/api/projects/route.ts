import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAuth } from '@/lib/auth'
import { formDataToPrismaInput } from '@/lib/project-transform'
import { serializeProject, projectInclude } from '@/lib/project-serialize'
import { revalidateProjects } from '@/lib/revalidate'

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      include: projectInclude,
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(projects.map(serializeProject))
  } catch {
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    await requireAuth()
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const data = await request.json()
    const input = formDataToPrismaInput(data)

    const project = await prisma.project.create({
      data: {
        slug: input.slug,
        title: input.title,
        shortDescription: input.shortDescription,
        tags: input.tags,
        cardImage: input.cardImage,
        type: input.type,
        heroImage: input.heroImage,
        badge: input.badge,
        fullDescription: input.fullDescription,
        techStack: input.techStack,
        highlights: input.highlights,
        metaYear: input.metaYear,
        metaRole: input.metaRole,
        metaPlatform: input.metaPlatform,
        metaStatus: input.metaStatus,
        metaStatusColor: input.metaStatusColor,
        gallery: { create: input.gallery },
        mechanics: { create: input.mechanics },
        links: { create: input.links },
      },
      include: projectInclude,
    })

    revalidateProjects(input.slug)

    return NextResponse.json(serializeProject(project), { status: 201 })
  } catch (error) {
    console.error('Create project error:', error)
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 })
  }
}
