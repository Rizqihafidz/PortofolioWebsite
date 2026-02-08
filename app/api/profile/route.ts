import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAuth } from '@/lib/auth'

export async function GET() {
  try {
    const profile = await prisma.profile.findUnique({
      where: { id: 'singleton' },
      include: {
        aboutCards: { orderBy: { order: 'asc' } },
      },
    })

    if (!profile) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 })
    }

    return NextResponse.json({
      profileImage: profile.profileImage,
      aboutBio: profile.aboutBio,
      aboutCards: profile.aboutCards.map((c) => ({
        icon: c.icon,
        title: c.title,
        description: c.description,
      })),
    })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    await requireAuth()
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { profileImage, aboutBio, aboutCards } = await request.json()

    // Delete old cards and recreate
    await prisma.aboutCard.deleteMany({ where: { profileId: 'singleton' } })

    const profile = await prisma.profile.update({
      where: { id: 'singleton' },
      data: {
        profileImage,
        aboutBio,
        aboutCards: {
          create: aboutCards.map((card: { icon: string; title: string; description: string }, i: number) => ({
            icon: card.icon,
            title: card.title,
            description: card.description,
            order: i,
          })),
        },
      },
      include: {
        aboutCards: { orderBy: { order: 'asc' } },
      },
    })

    return NextResponse.json({
      profileImage: profile.profileImage,
      aboutBio: profile.aboutBio,
      aboutCards: profile.aboutCards.map((c) => ({
        icon: c.icon,
        title: c.title,
        description: c.description,
      })),
    })
  } catch (error) {
    console.error('Update profile error:', error)
    return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 })
  }
}
