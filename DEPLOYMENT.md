# Deployment Guide

This guide covers deploying the Portfolio Website to Vercel with a managed PostgreSQL database.

## Prerequisites

- GitHub account
- Vercel account (free tier works)
- Managed PostgreSQL provider account (Neon recommended)

---

## 1. Setup Database (Neon)

1. Go to [neon.tech](https://neon.tech) and create account
2. Create new project
3. Copy the connection string:
   ```
   postgresql://user:pass@ep-xxx.aws.neon.tech/dbname?sslmode=require
   ```

### Run Migrations

```bash
# Set production DATABASE_URL
$env:DATABASE_URL="postgresql://..."  # PowerShell
# OR
export DATABASE_URL="postgresql://..."  # Bash/Linux

# Apply migrations
npx prisma migrate deploy

# Seed initial data (optional)
npx prisma db seed
```

---

## 2. Push to GitHub

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

---

## 3. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project" → Select your GitHub repo
3. Add Environment Variables:

| Variable | Value |
|----------|-------|
| `DATABASE_URL` | Your Neon connection string |
| `JWT_SECRET` | Random 64-character string |
| `ADMIN_EMAIL` | Admin login email |
| `ADMIN_PASSWORD` | Admin login password |

4. Click Deploy!

---

## 4. Post-Deployment

### Access Admin Dashboard
Navigate to `https://your-domain.vercel.app/admin` to manage content.

### Custom Domain (Optional)
1. Vercel Dashboard → Project → Settings → Domains
2. Add your domain and configure DNS

---

## Updating the Website

| Change Type | Action |
|-------------|--------|
| Code/UI changes | `git push origin main` → Auto deploy |
| Database schema | `prisma migrate deploy` → then `git push` |
| Content (via admin) | No deploy needed |
| Env variables | Vercel Dashboard → Edit → Redeploy |

---

## Troubleshooting

### Build fails with Prisma error
Ensure `postinstall` script exists in `package.json`:
```json
"postinstall": "prisma generate"
```

### Database connection error
- Verify `DATABASE_URL` includes `?sslmode=require`
- Check Neon dashboard for connection limits

### Migration fails
Run locally first to catch errors:
```bash
npx prisma migrate dev
```
