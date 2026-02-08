'use client'

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import type { Project, AboutCard, ProjectFormData } from '@/types'

interface AdminDataContextType {
  projects: Project[]
  profileImage: string
  aboutBio: string
  aboutCards: AboutCard[]
  isLoading: boolean
  addProject: (data: ProjectFormData) => Promise<void>
  updateProject: (slug: string, data: ProjectFormData) => Promise<void>
  deleteProject: (slug: string) => Promise<void>
  updateProfile: (image: string, bio: string, cards: AboutCard[]) => Promise<void>
}

const AdminDataContext = createContext<AdminDataContextType | undefined>(undefined)

export function AdminDataProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([])
  const [profileImage, setProfileImage] = useState('/assets/profile-pic.jpeg')
  const [aboutBio, setAboutBio] = useState('')
  const [aboutCards, setAboutCards] = useState<AboutCard[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchProjects = useCallback(async () => {
    try {
      const res = await fetch('/api/projects')
      if (res.ok) {
        const data = await res.json()
        setProjects(data)
      }
    } catch {
      // keep current state
    }
  }, [])

  const fetchProfile = useCallback(async () => {
    try {
      const res = await fetch('/api/profile')
      if (res.ok) {
        const data = await res.json()
        setProfileImage(data.profileImage)
        setAboutBio(data.aboutBio)
        setAboutCards(data.aboutCards)
      }
    } catch {
      // keep current state
    }
  }, [])

  useEffect(() => {
    Promise.all([fetchProjects(), fetchProfile()]).finally(() => setIsLoading(false))
  }, [fetchProjects, fetchProfile])

  const addProject = useCallback(async (data: ProjectFormData) => {
    const res = await fetch('/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error('Failed to create project')
    await fetchProjects()
  }, [fetchProjects])

  const updateProject = useCallback(async (slug: string, data: ProjectFormData) => {
    const res = await fetch(`/api/projects/${slug}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error('Failed to update project')
    await fetchProjects()
  }, [fetchProjects])

  const deleteProject = useCallback(async (slug: string) => {
    const res = await fetch(`/api/projects/${slug}`, { method: 'DELETE' })
    if (!res.ok) throw new Error('Failed to delete project')
    await fetchProjects()
  }, [fetchProjects])

  const updateProfile = useCallback(async (image: string, bio: string, cards: AboutCard[]) => {
    const res = await fetch('/api/profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ profileImage: image, aboutBio: bio, aboutCards: cards }),
    })
    if (!res.ok) throw new Error('Failed to update profile')
    await fetchProfile()
  }, [fetchProfile])

  return (
    <AdminDataContext.Provider
      value={{ projects, profileImage, aboutBio, aboutCards, isLoading, addProject, updateProject, deleteProject, updateProfile }}
    >
      {children}
    </AdminDataContext.Provider>
  )
}

export function useAdminData() {
  const context = useContext(AdminDataContext)
  if (context === undefined) {
    throw new Error('useAdminData must be used within an AdminDataProvider')
  }
  return context
}
