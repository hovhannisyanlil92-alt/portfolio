import type { Project } from './consts'

export function getProjectKey(project: Project): string {
  return project.title
}
