import { revalidatePath } from 'next/cache'

/**
 * Revalidate all public pages that display project data.
 * Call after any project mutation (create, update, delete).
 */
export function revalidateProjects(slug?: string) {
  revalidatePath('/')
  revalidatePath('/projects')
  if (slug) {
    revalidatePath(`/projects/${slug}`)
  }
}

/**
 * Revalidate all public pages that display profile data.
 * Call after any profile mutation.
 */
export function revalidateProfile() {
  revalidatePath('/')
}
