export type SkillGroup = {
  title: string
  items: string[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  { title: 'Frontend', items: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'] },
  { title: 'AI', items: ['Cursor', 'Stitch'] },
  { title: 'Tools & Others', items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Photoshop', 'Illustrator'] },
]

export const SKILLS_TEXT = {
  eyebrow: 'My skills',
  title: 'Technologies I work with',
}
