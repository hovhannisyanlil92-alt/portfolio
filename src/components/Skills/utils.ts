import type { SkillGroup } from './consts'

export function getSkillGroupKey(group: SkillGroup): string {
  return group.title
}
