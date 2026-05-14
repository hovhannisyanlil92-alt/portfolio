export type Project = {
  title: string
  description: string
  tags: string[]
  link: string
  image: string
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
    tags: ['HTML/CSS', 'JavaScript', 'ReactJS', 'React-Bootstr'],
    link: 'https://erikelena.github.io/',
    image: '../../assets/hero.png',
    // link: 'https://github.com/Lilit-92/demoApp.git',
    // image: 'https://lilit-92.github.io/assets/img/portfolio/todo.png',
  },
  {
    title: 'Task Management App',
    description: 'A productivity app to organize tasks and boost workflow.',
    tags: ['Next.js', 'TypeScript', 'Ant Design'],
    link: 'https://andranikgayane.github.io/',
    image: '../../assets/hero.png',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website built with React and modern UI.',
    tags: ['React', 'Ant Design', 'Framer Motion'],
    link: 'https://erikelena.github.io/',
    image: '../../assets/hero.png',
  },
]


