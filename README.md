# Portfolio Website

A full-stack personal portfolio website with an integrated admin CMS for managing projects and profile content. Built with Next.js 16, React 19, and PostgreSQL.

## Features

- **Public portfolio** — Homepage with hero, about, tech stack, projects, and contact sections
- **Project showcase** — Detailed project pages with gallery, mechanics breakdown, and metadata
- **Admin dashboard** — Protected CMS to create, edit, and delete projects and update profile
- **Contact form** — Email delivery via Resend
- **Rich text editor** — Tiptap-based editor for project descriptions and bio
- **On-demand revalidation** — Static pages revalidate only when content changes (no time-based ISR)
- **Security** — JWT auth, bcrypt password hashing, XSS protection via DOMPurify, Zod input validation

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19, Tailwind CSS 3 |
| Database | PostgreSQL via Prisma 7 |
| Auth | JWT (jsonwebtoken) + bcryptjs |
| Email | Resend |
| Editor | Tiptap |
| Validation | Zod |
| Language | TypeScript |

## Project Structure

```
app/
  (site)/           Public pages (home, projects, project detail)
  (auth)/           Login page
  admin/            Protected admin dashboard (projects CRUD, profile editor, settings)
  api/              REST API routes (auth, projects, profile, contact)
components/         React components (home, admin, project, layout, ui)
context/            React Context providers (auth, admin data)
lib/                Utilities (prisma client, auth, sanitize, revalidation)
prisma/             Database schema, migrations, seed script
types/              TypeScript type definitions
```

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database (local or managed like [Neon](https://neon.tech))

### Setup

1. Clone the repository and install dependencies:

```bash
git clone <repo-url>
cd PortofolioWebsite
npm install
```

2. Create `.env` from the example:

```bash
cp .env.example .env
```

3. Fill in your environment variables:

```env
DATABASE_URL="postgresql://user:password@host/database?sslmode=require"
JWT_SECRET="your-random-64-char-secret"
ADMIN_EMAIL="admin@example.com"
ADMIN_PASSWORD="your-admin-password"
```

4. Run database migrations and seed:

```bash
npx prisma migrate deploy
npx prisma db seed
```

5. Start the development server:

```bash
npm run dev
```

The site runs at `http://localhost:3000`. Admin dashboard at `/admin`.

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for the full Vercel deployment guide.

Quick summary:

1. Push to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Set environment variables (`DATABASE_URL`, `JWT_SECRET`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`)
4. Deploy

Content updates via the admin dashboard are reflected immediately through on-demand revalidation — no redeploy needed.

## License

This project is private.
