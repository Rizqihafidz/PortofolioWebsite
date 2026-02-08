import 'dotenv/config'
import { PrismaClient } from '../generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import bcrypt from 'bcryptjs'
import { projects } from './seed-data/projects'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

async function main() {
  // 1. Create admin user
  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD!, 12)
  await prisma.admin.upsert({
    where: { email: process.env.ADMIN_EMAIL! },
    update: {},
    create: {
      email: process.env.ADMIN_EMAIL!,
      password: hashedPassword,
    },
  })
  console.log('Admin user created/confirmed')

  // 2. Seed profile
  await prisma.profile.upsert({
    where: { id: 'singleton' },
    update: {},
    create: {
      id: 'singleton',
      profileImage: '/assets/profile-pic.jpeg',
      aboutBio:
        '<p>I am Rizqi Maulana Hafidz, an Informatics Engineering graduate from Brawijaya University with a GPA of 3.66. I aspire to have a career as a game developer, combining my passion for gaming with strong technical skills in Unity and C# programming.</p><p>My thesis focused on dynamic difficulty adjustment in a 2D endless runner game, published in J-PTIIK journal. I\'ve also led the Game Designer Division in Raion Community, where I mentored new members and organized game development workshops. I\'m currently seeking opportunities to grow as a developer.</p>',
    },
  })

  // Seed about cards
  const defaultCards = [
    { icon: 'school', title: 'Education', description: 'S1 Informatics Engineering from Brawijaya University with 3.66 GPA.', order: 0 },
    { icon: 'group', title: 'Leadership', description: 'Led Game Designer Division in Raion Community for 1 year.', order: 1 },
    { icon: 'sports_esports', title: 'Game Dev', description: 'Developed games in Unity & C# including thesis research project.', order: 2 },
    { icon: 'web', title: 'Web Dev', description: 'Developed this portfolio website using Next.js 16, React 19, and Tailwind CSS.', order: 3 },
  ]

  // Clear old cards first
  await prisma.aboutCard.deleteMany({ where: { profileId: 'singleton' } })
  for (const card of defaultCards) {
    await prisma.aboutCard.create({
      data: { ...card, profileId: 'singleton' },
    })
  }
  console.log('Profile and about cards seeded')

  // 3. Seed projects
  for (const project of projects) {
    // Skip if already exists
    const existing = await prisma.project.findUnique({ where: { slug: project.slug } })
    if (existing) {
      console.log(`Project "${project.slug}" already exists, skipping`)
      continue
    }

    await prisma.project.create({
      data: {
        slug: project.slug,
        title: project.title,
        shortDescription: project.shortDescription,
        tags: project.tags,
        cardImage: project.cardImage,
        type: project.type,
        heroImage: project.heroImage,
        badge: project.badge,
        fullDescription: project.fullDescription,
        techStack: project.techStack,
        highlights: project.highlights,
        metaYear: project.metadata.year,
        metaRole: project.metadata.role,
        metaPlatform: project.metadata.platform,
        metaStatus: project.metadata.status,
        metaStatusColor: project.metadata.statusColor,
        gallery: {
          create: project.gallery.map((g, i) => ({
            src: g.src,
            caption: g.caption,
            order: i,
          })),
        },
        mechanics: {
          create: project.mechanics.map((m, i) => ({
            icon: m.icon ?? null,
            title: m.title,
            description: m.description,
            tech: m.tech,
            color: m.color,
            order: i,
          })),
        },
        links: {
          create: project.links.map((l, i) => ({
            label: l.label,
            url: l.url,
            icon: l.icon,
            isPrimary: l.isPrimary,
            order: i,
          })),
        },
      },
    })
    console.log(`Seeded project: ${project.title}`)
  }

  console.log('Seed complete!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
