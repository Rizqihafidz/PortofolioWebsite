import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAuth, signToken } from '@/lib/auth'
import bcrypt from 'bcryptjs'

export async function PUT(request: Request) {
  try {
    const session = await requireAuth()

    const { currentPassword, newEmail, newPassword } = await request.json()

    if (!currentPassword?.trim()) {
      return NextResponse.json({ error: 'Current password is required' }, { status: 400 })
    }

    if (!newEmail?.trim() && !newPassword?.trim()) {
      return NextResponse.json({ error: 'New email or new password is required' }, { status: 400 })
    }

    // Verify current password
    const admin = await prisma.admin.findUnique({ where: { id: session.adminId } })
    if (!admin) {
      return NextResponse.json({ error: 'Admin not found' }, { status: 404 })
    }

    const valid = await bcrypt.compare(currentPassword, admin.password)
    if (!valid) {
      return NextResponse.json({ error: 'Incorrect password' }, { status: 401 })
    }

    // Build update data
    const updateData: { email?: string; password?: string } = {}

    if (newEmail?.trim()) {
      // Check if email already taken by another admin
      const existing = await prisma.admin.findUnique({ where: { email: newEmail.trim() } })
      if (existing && existing.id !== admin.id) {
        return NextResponse.json({ error: 'Email already in use' }, { status: 409 })
      }
      updateData.email = newEmail.trim()
    }

    if (newPassword?.trim()) {
      updateData.password = await bcrypt.hash(newPassword, 10)
    }

    // Update admin
    const updated = await prisma.admin.update({
      where: { id: admin.id },
      data: updateData,
    })

    // Sign new JWT with updated email
    const token = signToken({ adminId: updated.id, email: updated.email })

    const response = NextResponse.json({ success: true })
    response.cookies.set('admin-session', token, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 7 * 24 * 60 * 60,
    })

    return response
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
