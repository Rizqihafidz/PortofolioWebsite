import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAuth } from '@/lib/auth'
import { formDataToPrismaInput } from '@/lib/project-transform'
import { serializeProject, projectInclude } from '@/lib/project-serialize'

interface RouteParams {
  params: Promise<{ slug: string }>
}

export async function GET(_request: Request, { params }: RouteParams) {
  try {
    const { slug } = await params
    const project = await prisma.project.findUnique({
      where: { slug },
      include: projectInclude,
    })

    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }

    return NextResponse.json(serializeProject(project))
  } catch {
    return NextResponse.json({ error: 'Failed to fetch project' }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: RouteParams) {
  try {
    await requireAuth()
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { slug } = await params
    const data = await request.json()
    const input = formDataToPrismaInput(data)

    // Delete old relations
    await prisma.galleryItem.deleteMany({ where: { projectSlug: slug } })
    await prisma.mechanic.deleteMany({ where: { projectSlug: slug } })
    await prisma.projectLink.deleteMany({ where: { projectSlug: slug } })

    // Update project with new data
    const project = await prisma.project.update({
      where: { slug },
      data: {
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

    return NextResponse.json(serializeProject(project))
  } catch (error) {
    console.error('Update project error:', error)
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 })
  }
}

export async function DELETE(_request: Request, { params }: RouteParams) {
  try {
    await requireAuth()
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { slug } = await params
    await prisma.project.delete({ where: { slug } })
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 })
  }
}
