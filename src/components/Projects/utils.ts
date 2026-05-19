import { PROJECT_DESCRIPTION_MAX_LENGTH, type Project } from './consts'

export function getProjectKey(project: Project): string {
  return project.gitHub
}

export function isProjectDescriptionLong(
  description: string,
  maxLength: number = PROJECT_DESCRIPTION_MAX_LENGTH,
): boolean {
  return description.trim().length > maxLength
}
