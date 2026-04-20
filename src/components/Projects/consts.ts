export type Project = {
  title: string
  description: string
  tags: string[]
}

export const PROJECTS_TEXT = {
  eyebrow: 'Featured projects',
  title: 'Some of my recent work',
  viewAll: 'View all projects',
}

export const PROJECTS: Project[] = [
  {
    title: 'E-Commerce Dashboard',
    description: 'Admin dashboard for managing products, orders and customers.',
    tags: ['React', 'Ant Design', 'TypeScript'],
  },
  {
    title: 'Task Management App',
    description: 'A productivity app to organize tasks and boost workflow.',
    tags: ['Next.js', 'TypeScript', 'Ant Design'],
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website built with React and modern UI.',
    tags: ['React', 'Ant Design', 'Framer Motion'],
  },
]
