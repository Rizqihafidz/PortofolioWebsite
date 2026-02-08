import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import jwt from 'jsonwebtoken'
import { env } from '@/lib/env'

export interface JwtPayload {
  adminId: string
  email: string
}

export function signToken(payload: JwtPayload): string {
  return jwt.sign(payload, env.JWT_SECRET, { expiresIn: '7d' })
}

export function verifyToken(token: string): JwtPayload | null {
  try {
    return jwt.verify(token, env.JWT_SECRET) as JwtPayload
  } catch {
    return null
  }
}

export async function getSession(): Promise<JwtPayload | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin-session')?.value
  if (!token) return null
  return verifyToken(token)
}

/**
 * Require authentication. Redirects to login page if no valid session.
 * Use this in Server Components or API routes that need auth.
 */
export async function requireAuth(): Promise<JwtPayload> {
  const session = await getSession()
  if (!session) {
    redirect('/login')
  }
  return session
}
